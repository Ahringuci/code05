import React from "react";

const StudentInfo = (props) => {
    const { student, onDisbanStudent } = props;

    return (
        <tr>
            <td>{student.uuid}</td>
            <td>{student.fullName}</td>
            <td>{student.points}</td>
            <td>
                <button onClick={() => onDisbanStudent(student.uuid)}>x</button>
            </td>
        </tr>
    );
};

export default StudentInfo;
