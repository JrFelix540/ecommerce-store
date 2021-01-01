import styled from "styled-components";

export const CartDropdownRelative = styled.div`
    position: relative;
`;

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #e5e5e5;
    background-color: white;
    top: 0;
    right: 0;
    z-index: 5;
`;

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`;

export const CartItem = styled.div`
    height: 65px;
    display: flex;
    margin-bottom: 15px;
`;
export const CartImage = styled.div`
    height: 100%;
    & > img {
        width: 70px;
        height: 100%;
    }
`;

export const CartItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`;

export const CartItemTitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;
`;

export const CartItemQuantity = styled.p`
    font-weight: 100;
    font-size: 12px;
`;

export const TertiaryButton = styled.a`
    width: 100%;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    background-color: #22262a;
    color: #fff;
    margin-top: 10px;
    padding: 10px 0;
`;
