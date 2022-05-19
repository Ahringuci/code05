import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = () => {
    const employes = [
        {
            id: 1,
            name: "Hoa",
            age: 20,
        },
        {
            id: 2,
            name: "Khánh",
            age: 25,
        },
        {
            id: 3,
            name: "Tú",
            age: 22,
        },
    ];
    const navigate = useNavigate();
    const [user, setUser] = React.useState({});
    React.useEffect(() => {
        let _user = localStorage.getItem("user");
        if (!_user) {
            navigate("/login");
        } else {
            let _json = JSON.parse(_user);
            setUser({ ...user, ..._json });
        }
    }, []);

    const handleDetail = (e) => {
        navigate("/detail", { state: e });
    };

    return (
        <div>
            {user.email && <h2>Hello {user.email}</h2>}
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {employes.length > 0 &&
                        employes.map((val, ind) => (
                            <tr key={val.id}>
                                <td>{val.name}</td>
                                <td>{val.age}</td>
                                <td>
                                    <button onClick={(e) => handleDetail(val)}>
                                        Detail
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Employee;
