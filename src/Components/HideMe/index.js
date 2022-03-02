import React from "react";

const HideMe = (props) => {
    const { text, isShown } = props;
    return (
        <>
            <h3>{text}</h3>
            {isShown
                ? "Child component is shown now!"
                : "Child component was hidden!"}
        </>
    );
};

export default HideMe;
