import styled from "styled-components";

interface imageUrl {
    imgUrl: string;
}

export const CheckoutTableWrapper = styled.div`
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        display: none;
    }
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
    margin: 20px 0;
`;

export const CartButtons = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CheckoutTableMobile = styled.div`
    display: none;
    flex-direction: column;
    @media screen and (max-width: 768px) {
        display: flex;
    }
`;

export const CheckoutTableMobileRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 20px;
    margin-bottom: 20px;

    @media screen and (max-width: 576px) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const CheckoutTableMobileImage = styled.div<imageUrl>`
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.imgUrl});
    min-height: 200px;
`;

export const CheckoutTableMobileDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemNameMobile = styled(ItemName)`
    margin-bottom: 10px;
`;
export const ItemQuantityMobile = styled(ItemQuantity)`
    margin-bottom: 10px;
`;
export const ItemPriceMobile = styled(ItemPrice)`
    margin-bottom: 10px;
`;
export const ItemRemoveMobile = styled(ItemRemove)`
    justify-content: flex-start;
`;
