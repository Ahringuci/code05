export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const PAY_ALL = "PAY_ALL";

export const CURRENCY_FORMAT = (value) => {
    let _value = value.toLocaleString("it-IT", {
        style: "currency",
        currency: "VND",
    });
    return _value;
};
