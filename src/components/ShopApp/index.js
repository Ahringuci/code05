import React from "react";
import ShopDisplay from "./shop_display";
import ShopCart from "./shop_cart";

const ShopApp = (props) => {
    return (
        <>
            <ShopDisplay />
            <ShopCart />
        </>
    );
};

export default ShopApp;
