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
                ? {
                      ...item,
                      quantity: item.quantity + newItem.quantity,
                  }
                : item,
        );
    }

    return [
        ...existingItems,
        { ...newItem, quantity: newItem.quantity },
    ];
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

export const clearCartItem = (
    existingItems: ICartItem[],
    clearItem: ICartItem,
): ICartItem[] => {
    const existingItem: ICartItem | undefined = existingItems.find(
        (cartItem: ICartItem) => cartItem.id === clearItem.id,
    );

    if (!existingItem) {
        return existingItems;
    }

    return existingItems.filter(
        (cartItem: ICartItem) => cartItem.id !== clearItem.id,
    );
};

export const fetchCartItems = (): ICartItem[] => {
    const cartItemsJson = localStorage.getItem(`cartItems`);
    if (!cartItemsJson) {
        return [];
    }
    return JSON.parse(cartItemsJson);
};

export const calculateCartTotal = (
    existingItems: ICartItem[],
): number => {
    let cartTotal: number = 0;

    existingItems.map((item) => {
        const itemTotal = item.price * item.quantity;
        cartTotal = cartTotal + itemTotal;
    });

    return cartTotal;
};
