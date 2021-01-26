import styled from "styled-components";

interface ProductImageProps {
    url: string;
}

export const Card = styled.div``;

export const ProductImage = styled.div<ProductImageProps>`
    height: 350px;
    width: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${(props) => props.url});
    cursor: pointer;
`;

export const ProductDetails = styled.div`
    margin-top: 25px;
`;

export const ProductTitle = styled.p`
    font-size: 15px;
    font-weight: 700;
    text-transform: uppercase;
    color: #22262a;
    margin: 10px 0;
    cursor: pointer;
`;
export const ProductCategories = styled.p`
    color: #22262a;
    font-weight: 100;
    font-size: 15px;
    text-transform: uppercase;
`;

export const PriceRow = styled.div`
    display: flex;
`;
export const SalePrice = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #cf2929;
`;
export const OriginalPrice = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #22262a;
    text-decoration: line-through;
    margin-right: 10px;
`;
export const Price = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #22262a;
`;
