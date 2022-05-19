import React, { useState } from "react";
import { Formik } from "formik";
import "./App.css";

export default function App() {
    const carList = ["mvw", "ben", "maybach", "mercerdes"];
    const colorList = ["red", "blue", "white", "green"];
    const [selectedCar, setSelectedCar] = React.useState({
        car: "",
        color: "",
    });

    const handleChange = (e) => {
        setSelectedCar({ ...selectedCar, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <h1>[Bài tập] Xây dựng component Car selection</h1>
            <select
                name="car"
                defaultValue={"chose car"}
                onChange={(e) => handleChange(e)}
            >
                <option value={"chose car"} disabled={true}>
                    chose car
                </option>
                {carList.length > 1 &&
                    carList.map((val, ind) => (
                        <option key={ind} value={val}>
                            {val}
                        </option>
                    ))}
            </select>
            <select
                name="color"
                defaultValue={"chose color"}
                onChange={(e) => handleChange(e)}
            >
                <option value={"chose color"} disabled={true}>
                    chose color
                </option>
                {colorList.length > 1 &&
                    colorList.map((val, ind) => (
                        <option key={ind} value={val}>
                            {val}
                        </option>
                    ))}
            </select>
        </div>
    );
}
