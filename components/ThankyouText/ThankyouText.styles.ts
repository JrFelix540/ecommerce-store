import styled from "styled-components";

export const ThankyouTextContent = styled.p`
    font-size: 18px;
    color: #22262a;
    font-weight: 700;
    text-align: center;
`;
export const ThankyouImage = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    & > img {
        height: 350px;
        width: auto;
        @media screen and (max-width: 576px) {
            height: 200px;
        }
    }
`;
