import styled from "styled-components";

export const ProductsRow = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 40px;
`;

export const SeeMore = styled.div`
    margin: 30px 0 50px 0;
    text-align: center;
`;

export const BtnSecondary = styled.a`
    border: 1px solid #22262a;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
`;
