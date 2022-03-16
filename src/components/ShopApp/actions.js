import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REMOVE_ALL_FROM_CART,
    PAY_ALL,
} from "./constants";

export function add_to_cart(item) {
    return {
        type: ADD_TO_CART,
        message: {
            item,
        },
    };
}
export function remove_from_cart(item) {
    console.log("remove_from_cart");
    return {
        type: REMOVE_FROM_CART,
        message: {
            item,
        },
    };
}
export function remove_all_from_cart() {
    return {
        type: REMOVE_ALL_FROM_CART,
    };
}
export function pay_all_from_cart() {
    return {
        type: PAY_ALL,
    };
}
