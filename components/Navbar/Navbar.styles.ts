import styled from "styled-components";

interface MobileIconProps {
    open: boolean;
}
export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    position: relative;
`;

export const LogoWrapper = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

export const NavbarLinks = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    @media screen and (max-width: 576px) {
        display: none;
    }
`;

export const NavbarItem = styled.li`
    cursor: pointer;
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
`;

export const NavbarLink = styled.a`
    text-decoration: none;
    color: #22262a;
    text-transform: uppercase;
`;

export const NavbarActions = styled.div`
    display: flex;
    align-items: center;
`;

export const NavbarAction = styled.div`
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
`;

export const NavbarCart = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const CartTotal = styled.div`
    background: #000;
    border-radius: 50%;
    height: 12px;
    width: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -10px;
`;
export const CartTotalText = styled.p`
    color: #fff;
    font-size: 9px;
`;

export const MobileMenuIcon = styled.a<MobileIconProps>`
    display: none;
    margin-left: 5px;
    cursor: pointer;
    @media screen and (max-width: 576px) {
        display: ${(props) => (props.open ? `none` : `flex`)};
    }
`;

export const CancelMenuIcon = styled.a<MobileIconProps>`
    display: none;
    margin-left: 5px;
    @media screen and (max-width: 576px) {
        display: ${(props) => (props.open ? `flex` : `none`)};
    }
    cursor: pointer;
`;
