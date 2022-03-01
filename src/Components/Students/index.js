import React from "react";

export const StudentInfoComponent = () => {
    const students = [
        {
            id: 1,
            name: "Nguyen Van A",
            age: 10,
            address: "Ha Noi",
        },
        {
            id: 2,
            name: "Nguyen Van B",
            age: 12,
            address: "Ho Chi Minh",
        },
        {
            id: 3,
            name: "Nguyen Van C",
            age: 14,
            address: "Ha Nam",
        },
        {
            id: 4,
            name: "Nguyen Van D",
            age: 16,
            address: "Da Nang",
        },
        {
            id: 5,
            name: "Nguyen Van E",
            age: 18,
            address: "Nha Trang",
        },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>age</td>
                    <td>address</td>
                </tr>
            </thead>
            <tbody>
                {students.map((val, ind) => (
                    <tr key={ind}>
                        <td>{val.id}</td>
                        <td>{val.name}</td>
                        <td>{val.age}</td>
                        <td>{val.address}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
