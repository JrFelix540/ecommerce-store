import React, { Fragment, useContext } from "react";
import Link from "next/link";
import { Store } from "../../context/store";
import { ICartItem } from "../../context/types";
import {
    CartDropdownRelative,
    CartDropdownContainer,
    CartItems,
    CartItem,
    CartImage,
    CartItemDetails,
    CartItemTitle,
    CartItemQuantity,
    TertiaryButton,
} from "./CartDropdown.styles";

const CartDropdown: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    return (
        <Fragment>
            <CartDropdownRelative>
                <CartDropdownContainer>
                    <CartItems>
                        {state.cartItems.length <= 0 ? (
                            <p>Your cart is empty</p>
                        ) : (
                            state.cartItems.map(
                                (cartItem: ICartItem) => (
                                    <CartItem key={cartItem.id}>
                                        <CartImage>
                                            <img
                                                src={
                                                    cartItem.imageUrl
                                                }
                                                alt=""
                                            />
                                        </CartImage>
                                        <CartItemDetails>
                                            <CartItemTitle>
                                                {cartItem.name}
                                            </CartItemTitle>
                                            <CartItemQuantity>
                                                Qty:{" "}
                                                {cartItem.quantity}
                                            </CartItemQuantity>
                                        </CartItemDetails>
                                    </CartItem>
                                ),
                            )
                        )}
                    </CartItems>
                    <Link href="/checkout">
                        <TertiaryButton
                            onClick={() => {
                                dispatch({
                                    type: "TOGGLE_CART",
                                });
                            }}
                        >
                            Go to checkout
                        </TertiaryButton>
                    </Link>
                </CartDropdownContainer>
            </CartDropdownRelative>
        </Fragment>
    );
};

export default CartDropdown;
