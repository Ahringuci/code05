import React from "react";
import { CURRENCY_FORMAT } from "./constants";

const ShopDisplayItem = (props) => {
    const { values, add_to_cart_callback } = props;
    const add_to_cart = (item) => {
        add_to_cart_callback(item);
    };

    return (
        <div className="shop-app__item">
            <figure className="shop-app__item-image">
                <img width={200} src={values.image} alt={values.title} />

                <figcaption>{values.title}</figcaption>
            </figure>
            <p className="shop-app__item-price">
                <span>Giá: </span>
                {CURRENCY_FORMAT(values.price)}
            </p>
            <p className="shop-app__item-price">
                {values.quantity ? (
                    <span>Còn lại: {values.quantity}</span>
                ) : (
                    <span>Hết Hàng</span>
                )}
            </p>

            <button
                className="shop-app__item-add-to-cart btn-all"
                onClick={() => add_to_cart(values)}
                disabled={values.quantity <= 0 ? true : false}
            >
                Add to cart
            </button>
        </div>
    );
};

export default ShopDisplayItem;
