import React from "react";
// import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee";
import Login from "./pages/Login";
import Details from "./pages/Employee/details";
import "./App.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Employee />} />
            <Route path="detail" element={<Details />} />
            <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);
