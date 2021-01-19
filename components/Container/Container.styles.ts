import styled from "styled-components";

export const MaxWidth = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
        max-width: 900px;
    }

    @media screen and (max-width: 1000px) {
        max-width: 770px;
    }

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`;
