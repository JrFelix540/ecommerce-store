import { ICartItem } from "../context/types";

export const addCartItem = (newItem: ICartItem) => {
    let cartListItems: ICartItem[] = [];
    const existingCartItemsJson = localStorage.getItem(`cartItems`);
    if (!existingCartItemsJson) {
        cartListItems.push(newItem);
    } else {
        const existingCartItems = JSON.parse(existingCartItemsJson);
        if (existingCartItems) {
            const existingItem = existingCartItems.find(
                (item: ICartItem) => item.id === newItem.id,
            );

            if (existingItem) {
                cartListItems = existingCartItems.map(
                    (item: ICartItem) =>
                        item.id === newItem.id
                            ? {
                                  ...item,
                                  quantity:
                                      item.quantity +
                                      newItem.quantity,
                              }
                            : item,
                );
            } else {
                existingCartItems.push(newItem);
                cartListItems = existingCartItems;
            }
        }
    }

    localStorage.removeItem(`cartItems`);
    const cartListJson = JSON.stringify(cartListItems);
    localStorage.setItem(`cartItems`, cartListJson);
};
