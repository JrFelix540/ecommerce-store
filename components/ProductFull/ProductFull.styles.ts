import styled from "styled-components";

interface ProductImageProps {
    url: string;
}

export const ProductFullContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
`;

export const ProductImage = styled.div<ProductImageProps>`
    background-position: center center;
    width: 100%;
    height: 450px;
    background-position: center center;
    background-size: cover;
    background-image: url(${(props) => props.url});
`;

export const ProductTitle = styled.h3`
    margin: 30px 0;
    font-size: 20px;
    font-weight: 700;
    color: #22262a;
    text-transform: uppercase;
`;

export const ProductDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Price = styled.p`
    font-size: 18px;
    color: #22262a;
    margin-bottom: 20px;
`;
export const ProductQuantity = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
export const QuantityLabel = styled.p`
    color: #22262a;
    margin-right: 10px;
`;

export const QuantityButtons = styled.div`
    display: flex;
    align-items: center;
`;

export const AddToCartButton = styled.button`
    width: 100%;
    background: #22262a;
    color: #fff;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border: none;
`;

export const AddSubtractButton = styled.a`
    background: #fff;
    color: #22262a;
    height: 40px;
    width: 40px;
    border: 1px solid #e5e5e5;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;
