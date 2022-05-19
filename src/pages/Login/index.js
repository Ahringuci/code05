import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = React.useState({});
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        if (user.email === "admin@gmail.com" && user.password === "admin") {
            const _user = JSON.stringify(user);
            localStorage.setItem("user", _user);
            navigate("/");
        }
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>email</label>
            <input
                type="email"
                name="email"
                value={user.email || ""}
                onChange={(e) => handleChange(e)}
                required={true}
            />

            <label>password</label>
            <input
                type="password"
                name="password"
                value={user.password || ""}
                onChange={(e) => handleChange(e)}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default Login;
