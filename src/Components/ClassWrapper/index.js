import React, { useState } from "react";
import StudentInfo from "../StudentInfo";

const ClassWrapper = () => {
    const uuid = () => Math.floor(Math.random(1) * 10000 + 100000);
    const students = [
        {
            uuid: uuid(),
            fullName: "Nguyen Van A",
            points: 10,
        },
        {
            uuid: uuid(),
            fullName: "Le Van B",
            points: 8,
        },
        {
            uuid: uuid(),
            fullName: "Pham Thi C",
            points: 7,
        },
        {
            uuid: uuid(),
            fullName: "Tran Van D",
            points: 6,
        },
        {
            uuid: uuid(),
            fullName: "Ta Thi Lang",
            points: 1,
        },
    ];

    const [studentList, setStudentList] = useState(students);

    const onAddNewStudent = () => {
        let _add = {
            uuid: uuid(),
            fullName: "undefined",
            points: (Math.random(1) * 10).toFixed(2),
        };
        setStudentList([...studentList, _add]);
    };

    const onDisbanStudent = (id) => {
        setStudentList(studentList.filter((stu) => stu.uuid !== id));
    };

    return (
        <>
            {studentList.length !== 0 ? (
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>point</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {studentList.map((val, ind) => (
                            /* <tr key={ind}>
                            <td>{val.uuid}</td>
                            <td>{val.fullName}</td>
                            <td>{val.points}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        onDisbanStudent(val.uuid);
                                    }}
                                >
                                    x
                                </button>
                            </td>
                        </tr> */
                            <StudentInfo
                                key={ind}
                                student={val}
                                onDisbanStudent={onDisbanStudent}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                "no list"
            )}
            <button
                onClick={() => {
                    onAddNewStudent();
                }}
            >
                add student
            </button>
        </>
    );
};

export default ClassWrapper;
