import React, { useState } from "react";
import HideMe from "../HideMe/index.js";

const GameWrapper = () => {
    const [isChildComponentHidden, setIsChildComponentHidden] = useState(false);

    const toggleShow = () => {
        setIsChildComponentHidden(!isChildComponentHidden);
    };
    return (
        <div>
            <p>
                {isChildComponentHidden
                    ? "child component show"
                    : "child component hide"}
            </p>
            <button onClick={toggleShow}>Click me!</button>
            <HideMe text={"lorem"} isShown={isChildComponentHidden} />
        </div>
    );
};

export default GameWrapper;
