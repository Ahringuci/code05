import React from "react";
import "./App.css";

function App() {
    const [books, setBooks] = React.useState([]);
    const [form, setForm] = React.useState({
        id: -1,
        title: "",
        number: "",
        errors: {},
    });
    const [indexSelected, setIndexSelected] = React.useState(-1);

    const handleChange = (e) => {
        let _name = e.target.name,
            _value = e.target.value;
        setForm({ ...form, [_name]: _value });
    };

    const handleValidate = () => {
        const errors = {};

        if (form.title === " ") {
            errors.title = "khong để trống !";
        } else {
            if (form.title.length < 3) {
                errors.title = "khong ngắn hơn 3 !";
            }
        }

        if (form.number === "") {
            errors.number = "khong để trống !";
        } else {
            if (+form.number < 0) {
                errors.number = "khong nho hơn 0 !";
            }
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = handleValidate();

        if (errors.length === 0) {
            setForm({ ...form, errors });
        } else {
            let _id = (Math.random() * 10000) | 0;
            const book = {
                id: _id,
                title: form.title,
                number: form.number,
            };

            setBooks([...books, book]);
            setForm({ ...form, title: "", number: "" });
        }
    };

    const handleDelete = (id) => {
        const newBook = books.filter((book) => book.id !== id);
        setBooks(newBook);
    };
    return (
        <div className="app">
            <h3>LIBRARY</h3>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>tiêu đề</label>
                <input
                    name="title"
                    type="text"
                    value={form.title}
                    onChange={(e) => handleChange(e)}
                    required={true}
                />
                {form.errors.title && <p>{form.errors.title}</p>}

                <label>số lượng</label>
                <input
                    name="number"
                    type="number"
                    value={form.number}
                    onChange={(e) => handleChange(e)}
                    required={true}
                />
                {form.errors.number && <p>{form.errors.number}</p>}

                <button>Submit</button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.length > 0 &&
                        books.map((val, ind) => (
                            <tr key={val.id}>
                                <th>{val.title}</th>
                                <td>{val.number}</td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(val.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
