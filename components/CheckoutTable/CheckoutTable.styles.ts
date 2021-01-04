import styled from "styled-components";

export const CheckoutTableWrapper = styled.div`
    width: 900px;
    margin: 0 auto;
`;

export const CheckoutTableHeader = styled.div`
    display: grid;
    grid-template-columns: 23% 23% 23% 23% 8%;
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 0;
    margin-top: 40px;
`;

export const CheckoutTableBody = styled.div``;

export const Item = styled.div`
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 0;
    display: grid;
    grid-template-columns: 23% 23% 23% 23% 8%;
`;

export const ItemImage = styled.div`
    & > img {
        height: 60px;
        width: 60px;
    }
`;

export const ItemQuantity = styled.div`
    display: flex;
    align-items: center;
    & > a {
        cursor: pointer;
    }
`;

export const ItemQuantityText = styled.p`
    color: #22262a;
    margin: 0 2px;
`;

export const ItemName = styled.p`
    display: flex;
    align-items: center;
`;

export const ItemPrice = styled.p`
    display: flex;
    align-items: center;
`;

export const ItemRemove = styled.div`
    & > a {
        cursor: pointer;
    }

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CartTotalText = styled.p`
    font-size: 24px;
    text-align: right;
    color: #22262a;
    margin-top: 20px;
`;
