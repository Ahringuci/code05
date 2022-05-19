import React from "react";
import { useNavigate } from "react-router-dom";
const Home = () => {
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

    return <div>{user.email && <h2>Hello {user.email}</h2>}</div>;
};

export default Home;
