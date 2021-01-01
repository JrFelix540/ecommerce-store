import React, {
    Fragment,
    useContext,
    useEffect,
    useState,
} from "react";
import { Container } from "..";
import {
    NavbarWrapper,
    LogoWrapper,
    NavbarLink,
    NavbarItem,
    NavbarLinks,
    NavbarAction,
    NavbarActions,
    CartTotal,
    CartTotalText,
    NavbarCart,
} from "./Navbar.styles";
import { Cart3, Heart, Search } from "@styled-icons/bootstrap";
import { Store } from "../../context/store";
import { ICartItem } from "../../context/types";

const Navbar: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    useEffect(() => {
        dispatch({
            type: "FETCH_CART_ITEMS",
        });
    }, []);

    // calculateCartItems();
    return (
        <Fragment>
            <Container>
                <NavbarWrapper>
                    <LogoWrapper></LogoWrapper>
                    <NavbarLinks>
                        <NavbarItem>
                            <NavbarLink href="/">Home</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/">Shop</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/">Lookbook</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/">Features</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/">Pages</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/">Blog</NavbarLink>
                        </NavbarItem>
                    </NavbarLinks>
                    <NavbarActions>
                        <NavbarAction>
                            <Search size="16" />
                        </NavbarAction>
                        <NavbarCart>
                            <Cart3 size="16" />
                            <CartTotal>
                                <CartTotalText>
                                    {state.cartItems.reduce(function (
                                        acc: number,
                                        obj: ICartItem,
                                    ) {
                                        return acc + obj.quantity;
                                    },
                                    0)}
                                </CartTotalText>
                            </CartTotal>
                        </NavbarCart>
                    </NavbarActions>
                </NavbarWrapper>
            </Container>
        </Fragment>
    );
};

export default Navbar;
