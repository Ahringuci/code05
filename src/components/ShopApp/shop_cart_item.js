import React from "react";
import { CURRENCY_FORMAT } from "./constants";

const CartItem = (props) => {
    const { values, remove_item_callback } = props;
    const handle_remove_self = (item) => {
        remove_item_callback(item);
    };

    return (
        <div className="cart__item">
            <button
                className="cart__item-remove"
                onClick={() => handle_remove_self(values)}
            ></button>
            <figure className="cart__item-image">
                <img src={values.imgsrc} alt={values.title} />
                <figcaption>
                    <span className="cart__item-title">{values.title}</span>
                    <span className="cart__item-price">
                        {CURRENCY_FORMAT(values.price)}
                    </span>
                </figcaption>
            </figure>
            <span className="cart__item-amount">
                <span>SL: </span>
                {values.amount}
            </span>
        </div>
    );
};

export default CartItem;
