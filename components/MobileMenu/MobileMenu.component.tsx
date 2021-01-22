import React, { Fragment } from "react";
import { ICategory } from "../../context/types";
import {
    MobileMenuContainer,
    MobileNavbarItem,
    MobileNavLinks,
} from "./MobileMenu.styles";
import Link from "next/link";
import { NavbarLink } from "../Navbar/Navbar.styles";

interface MobileMenuProps {
    openMenu: boolean;
    categories: ICategory[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({
    openMenu,
    categories,
}) => {
    return (
        <Fragment>
            <MobileMenuContainer open={openMenu}>
                <MobileNavLinks>
                    <MobileNavbarItem>
                        <NavbarLink href="/">Home</NavbarLink>
                    </MobileNavbarItem>
                    <MobileNavbarItem>
                        <NavbarLink href="/shop">Shop</NavbarLink>
                    </MobileNavbarItem>
                    {categories.map((category: ICategory) => (
                        <MobileNavbarItem key={category.id}>
                            <Link
                                href={`/categories/[id]`}
                                as={`/categories/${category.id}`}
                            >
                                <NavbarLink>
                                    {category.title}
                                </NavbarLink>
                            </Link>
                        </MobileNavbarItem>
                    ))}
                </MobileNavLinks>
            </MobileMenuContainer>
        </Fragment>
    );
};

export default MobileMenu;
