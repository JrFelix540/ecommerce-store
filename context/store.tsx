import React, { createContext, useReducer } from "react";
import { IState, IAction } from "./types";
import { ProductActionTypes } from "./products/products.types";
import {
    fetchCategories,
    fetchProducts,
} from "./products/products.actions";
import { CartActionTypes } from "./cart/cart.types";
import { removeCartItem, addCartItem } from "./cart/cart.actions";

export const initialState: IState = {
    products: [],
    cartItems: [],
    hideCart: true,
    categories: [],
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_CATEGORIES:
            return {
                ...state,
                categories: fetchCategories(),
            };
        case ProductActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: fetchProducts(),
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addCartItem(
                    state.cartItems,
                    action.payload,
                ),
            };

        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(
                    state.cartItems,
                    action.payload,
                ),
            };

        case "TOGGLE_CART":
            return {
                ...state,
                hideCart: !state.hideCart,
            };
        default:
            return state;
    }
};

export const StoreProvider = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <Store.Provider value={{ state, dispatch }}>
            {props.children}
        </Store.Provider>
    );
};
