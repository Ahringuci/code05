import React from "react";
import { connect } from "react-redux";

import { add_to_cart } from "./actions";

import ShopDisplayItem from "./shop_display_item";

const ShopDisplay = (props) => {
    const { defaultItems, add_to_cart } = props;

    const handle_add_to_cart = (item) => {
        add_to_cart && add_to_cart(item);
    };

    return (
        <div className="shop-app">
            {defaultItems.length > 0
                ? defaultItems.map((item) => (
                      <ShopDisplayItem
                          key={item.id}
                          values={item}
                          add_to_cart_callback={handle_add_to_cart}
                      />
                  ))
                : "Nghĩ bán"}
        </div>
    );
};

const get_state = (state) => {
    return {
        defaultItems: state.reduxReducer.defaultItems,
    };
};

const get_dispatch = (dispatch) => {
    return {
        dispatch,
        add_to_cart: (e) => dispatch(add_to_cart(e)),
    };
};
export default connect(get_state, get_dispatch)(ShopDisplay);
