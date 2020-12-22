import { ICartItem } from "../types";

export const addCartItem = (
    existingItems: ICartItem[],
    newItem: ICartItem,
) => {
    const existingItem = existingItems.find(
        (item) => item.id === newItem.id,
    );

    if (existingItem) {
        return existingItems.map((item) =>
            item.id === newItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
        );
    }

    return [...existingItems, { ...newItem, quantity: 1 }];
};

export const removeCartItem = (
    existingItems: ICartItem[],
    removeItem: ICartItem,
) => {
    const existingItem: any = existingItems.find(
        (cartItem: ICartItem) => cartItem.id === removeItem.id,
    );

    if (existingItem.quantity === 1) {
        return existingItems.filter(
            (cartItem: ICartItem) => cartItem.id !== removeItem.id,
        );
    }

    return existingItems.map((cartItem: ICartItem) =>
        cartItem.id === removeItem.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem,
    );
};
