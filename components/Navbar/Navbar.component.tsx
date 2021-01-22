import React, {
    Fragment,
    useContext,
    useEffect,
    useState,
} from "react";
import { CartDropdown, Container, MobileMenu } from "..";
import {
    NavbarWrapper,
    LogoWrapper,
    NavbarLink,
    NavbarItem,
    NavbarLinks,
    NavbarActions,
    CartTotal,
    CartTotalText,
    NavbarCart,
    MobileMenuIcon,
    CancelMenuIcon,
} from "./Navbar.styles";
import { Cart3, List, X } from "@styled-icons/bootstrap";
import { Store } from "../../context/store";
import { ICartItem, ICategory } from "../../context/types";
import Link from "next/link";

const Navbar: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    useEffect(() => {
        dispatch({
            type: "FETCH_CART_ITEMS",
        });
        dispatch({
            type: "FETCH_CATEGORIES",
        });
    }, []);

    const toggleCart = () => {
        dispatch({
            type: `TOGGLE_CART`,
        });
    };
    return (
        <Fragment>
            <Container>
                <NavbarWrapper>
                    <LogoWrapper href="/">
                        <img src="/img/logo.png" alt="Logo" />
                    </LogoWrapper>
                    <NavbarLinks>
                        <NavbarItem>
                            <NavbarLink href="/">Home</NavbarLink>
                        </NavbarItem>
                        <NavbarItem>
                            <NavbarLink href="/shop">Shop</NavbarLink>
                        </NavbarItem>
                        {state.categories.map(
                            (category: ICategory) => (
                                <NavbarItem key={category.id}>
                                    <Link
                                        href={`/categories/[id]`}
                                        as={`/categories/${category.id}`}
                                    >
                                        <NavbarLink>
                                            {category.title}
                                        </NavbarLink>
                                    </Link>
                                </NavbarItem>
                            ),
                        )}
                    </NavbarLinks>
                    <NavbarActions>
                        <NavbarCart onClick={toggleCart}>
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
                        <MobileMenuIcon
                            open={openMenu}
                            onClick={() => {
                                setOpenMenu(true);
                            }}
                        >
                            <List size="20" />
                        </MobileMenuIcon>
                        <CancelMenuIcon
                            open={openMenu}
                            onClick={() => {
                                setOpenMenu(false);
                            }}
                        >
                            <X size="30" />
                        </CancelMenuIcon>
                    </NavbarActions>
                </NavbarWrapper>
                <MobileMenu
                    openMenu={openMenu}
                    categories={state.categories}
                />
                {!state.hideCart && <CartDropdown />}
            </Container>
        </Fragment>
    );
};

export default Navbar;
