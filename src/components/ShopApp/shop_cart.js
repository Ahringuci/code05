import React from "react";
import { connect } from "react-redux";
import {
    remove_from_cart,
    remove_all_from_cart,
    pay_all_from_cart,
} from "./actions";
import { CURRENCY_FORMAT } from "./constants";

import CartItem from "./shop_cart_item";

const ShopCart = (props) => {
    const [cartIsOpen, setCartState] = React.useState(false);
    const {
        walletAmount,
        cartItems,
        remove_from_cart,
        remove_all_from_cart,
        pay_all_from_cart,
    } = props;

    const cart_toggler = () => {
        setCartState(!cartIsOpen);
    };

    const remove_all = () => {
        remove_all_from_cart && remove_all_from_cart();
    };

    const pay_all = () => {
        pay_all_from_cart && pay_all_from_cart();
    };

    const remove_with_id = (item) => {
        remove_from_cart && remove_from_cart(item);
    };

    return (
        <>
            <button className="shop-cart__toggler" onClick={cart_toggler}>
                {cartIsOpen ? "Close cart" : "Open cart"}
            </button>
            <div className={cartIsOpen ? "shop-cart open" : "shop-cart"}>
                <div className="shop-cart__mask" onClick={cart_toggler}></div>
                <div className="shop-cart__container">
                    <span className="shop-cart__wallet">
                        Ví tiền: {CURRENCY_FORMAT(walletAmount)}
                    </span>
                    {cartItems.length > 0 ? (
                        <>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    values={item}
                                    remove_item_callback={remove_with_id}
                                />
                            ))}
                            <button
                                className="btn-all shop-cart__remove-all"
                                onClick={remove_all}
                            >
                                remove all
                            </button>{" "}
                            <div className="shop-cart__pay-area">
                                <span className="shop-cart__total">
                                    Tổng:{" "}
                                    {CURRENCY_FORMAT(
                                        cartItems.reduce(
                                            (acc, cur) =>
                                                acc + cur.amount * cur.price,
                                            0
                                        )
                                    )}
                                </span>
                                <button
                                    className="btn-all shop-cart__pay-all"
                                    onClick={pay_all}
                                >
                                    Thanh toán
                                </button>
                            </div>
                        </>
                    ) : (
                        <span className="shop-cart__empty">
                            không có gì hết
                        </span>
                    )}
                </div>
            </div>
        </>
    );
};

const get_state = (state) => {
    return {
        cartItems: state.reduxReducer.cartItems,
        walletAmount: state.reduxReducer.walletAmount,
    };
};

const get_dispatch = (dispatch) => {
    return {
        dispatch,
        remove_from_cart: (e) => dispatch(remove_from_cart(e)),
        remove_all_from_cart: () => dispatch(remove_all_from_cart()),
        pay_all_from_cart: () => dispatch(pay_all_from_cart()),
    };
};
export default connect(get_state, get_dispatch)(ShopCart);
