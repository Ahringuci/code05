import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    REMOVE_ALL_FROM_CART,
    PAY_ALL,
} from "../../constants";

import { defaultAPI } from "../../default_api";

const initState = {
    defaultItems: defaultAPI,
    cartItems: [],
    walletAmount: 100000000,
};

function reduxReducer(state = initState, action) {
    let _state = { ...state };

    const find_index = (tar, arr) => {
        let _index = -1;
        arr.length > 0 &&
            arr.forEach((item, ind) => {
                if (item.id === tar.id) _index = ind;
            });
        return _index;
    };

    switch (action.type) {
        case ADD_TO_CART: {
            console.log("ADD_TO_CART reducer");
            const Target = action.message.item;
            let _check = find_index(Target, _state.cartItems),
                _cart_item = [..._state.cartItems],
                _default = [..._state.defaultItems],
                _add_success = false;
            if (_check === -1) {
                let _new_item = {
                    id: Target.id,
                    title: Target.title,
                    amount: 1,
                    sku: Target.sku,
                    price: Target.price,
                    imgsrc: Target.image,
                };
                _cart_item.push(_new_item);
                _add_success = true;
            } else {
                _cart_item[_check].amount += 1;
                _add_success = true;
            }
            if (_add_success) {
                let _decreaseItemIndex = find_index(
                    Target,
                    _state.defaultItems
                );
                _default[_decreaseItemIndex].quantity -= 1;

                _state = { ..._state, defaultItems: _default };
            }

            _state = { ..._state, cartItems: _cart_item };
            console.log("end ADD_TO_CART reducer");
            break;
        }
        case REMOVE_FROM_CART: {
            console.log("REMOVE_FROM_CART reducer");
            const Target = action.message.item;
            let _check = find_index(Target, _state.cartItems),
                _cart_item = [..._state.cartItems],
                _default = [...state.defaultItems],
                _remove_success = false;

            if (_check !== -1) {
                _cart_item = _cart_item.filter((i) => i.id !== Target.id);
                _remove_success = true;
            } else {
                console.log("khong tim thay remove item");
            }

            if (_remove_success) {
                let _removeItemIndex = find_index(Target, _state.defaultItems);
                _default[_removeItemIndex].quantity += Target.amount;

                _state = { ..._state, defaultItems: _default };
            }
            _state = { ..._state, cartItems: _cart_item };
            console.log("end REMOVE_FROM_CART reducer");
            break;
        }

        case REMOVE_ALL_FROM_CART: {
            console.log("REMOVE_ALL_FROM_CART reducer");

            let _cart_item = [..._state.cartItems],
                _default = [..._state.defaultItems];

            _cart_item.forEach((item) => {
                let _iIndex = find_index(item, _state.defaultItems);

                if (_iIndex !== -1) _default[_iIndex].quantity += item.amount;
            });

            _cart_item.length = 0;
            _state = { ..._state, cartItems: _cart_item };
            _state = { ..._state, defaultItems: _default };
            console.log("end REMOVE_ALL_FROM_CART reducer");
            break;
        }

        case PAY_ALL: {
            console.log("PAY_ALL recuder");

            let _cart_item = [..._state.cartItems],
                _wallet_amount = _state.walletAmount,
                _total = _cart_item.reduce(
                    (acc, cur) => acc + cur.amount * cur.price,
                    0
                );

            if (_state.walletAmount > 0 && _state.walletAmount >= _total) {
                _wallet_amount -= _total;
                _cart_item.length = 0;
                _state = _state = {
                    ..._state,
                    walletAmount: _wallet_amount,
                    cartItems: _cart_item,
                };
                alert("Thanh toán thành công");
            } else {
                alert("Thanh toán thất bại");
            }

            console.log("end PAY_ALL recuder");
            break;
        }

        default:
            break;
    }
    return _state;
}

export default reduxReducer;
