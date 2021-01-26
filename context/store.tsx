import React, { createContext, useReducer } from "react";
import { IState, IAction } from "./types";
import { ProductActionTypes } from "./products/products.types";
import {
    fetchCategories,
    fetchProducts,
    fetchCollections,
} from "./products/products.actions";
import { CartActionTypes } from "./cart/cart.types";
import {
    removeCartItem,
    addCartItem,
    fetchCartItems,
    clearCartItem,
    calculateCartTotal,
} from "./cart/cart.actions";

export const initialState: IState = {
    products: [],
    cartItems: [],
    hideCart: true,
    categories: [],
    cartTotal: 0,
    collections: [],
};

export const Store = createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ProductActionTypes.FETCH_CATEGORIES:
            return {
                ...state,
                categories: fetchCategories(),
            };
        case CartActionTypes.CALCULATE_CART_TOTAL:
            return {
                ...state,
                cartTotal: calculateCartTotal(state.cartItems),
            };
        case ProductActionTypes.FETCH_PRODUCTS:
            return {
                ...state,
                products: fetchProducts(),
            };

        case ProductActionTypes.FETCH_COLLECTIONS:
            return {
                ...state,
                collections: fetchCollections(),
            };
        case CartActionTypes.ADD_CART_ITEM:
            return {
                ...state,
                cartItems: addCartItem(
                    state.cartItems,
                    action.payload,
                ),
            };
        case CartActionTypes.CLEAR_CART_ITEM:
            return {
                ...state,
                cartItems: clearCartItem(
                    state.cartItems,
                    action.payload,
                ),
            };
        case CartActionTypes.REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeCartItem(
                    state.cartItems,
                    action.payload,
                ),
            };

        case CartActionTypes.FETCH_CART_ITEMS:
            return {
                ...state,
                cartItems: fetchCartItems(),
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
