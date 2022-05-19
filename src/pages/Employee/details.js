import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Details = () => {
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
    const { state } = useLocation();
    React.useEffect(() => {
        let _user = localStorage.getItem("user");
        if (!_user) {
            navigate("/login");
        }
    }, []);
    return (
        <div>
            <h3>Details</h3>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {state && (
                        <tr>
                            <td>{state.name}</td>
                            <td>{state.age}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Details;
