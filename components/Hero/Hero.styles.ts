import styled from "styled-components";
interface PrimaryButtonProps {
    mr?: string;
}

export const HeroContainer = styled.div`
    background-color: #ccd7db;
    min-height: 450px;

    @media screen and (max-width: 768px) {
        min-height: 300px;
    }

    @media screen and (max-width: 576px) {
        min-height: 0;
    }
`;

export const HeroImageContainer = styled.div``;

export const HeroImage = styled.img`
    height: 450px;
    width: auto;
    @media screen and (max-width: 768px) {
        height: 300px;
    }
    @media screen and (max-width: 576px) {
        height: auto;
        width: 150px;
        margin-top: 55px;
    }
`;

export const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const HeroTextContent = styled.div`
    margin-top: 200px;
    @media screen and (max-width: 768px) {
        margin-top: 120px;
    }

    @media screen and (max-width: 576px) {
        margin-top: 30px;
    }
`;
export const HeroSubTitle = styled.h4`
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;

    @media screen and (max-width: 576px) {
        font-size: 16px;
    }
`;

export const HeroTitle = styled.h1`
    font-weight: 900;
    text-transform: uppercase;
    font-size: 80px;

    @media screen and (max-width: 1200px) {
        font-size: 50px;
    }
    @media screen and (max-width: 768px) {
        font-size: 36px;
    }

    @media screen and (max-width: 576px) {
        font-size: 24px;
    }
`;

export const HeroText = styled.p`
    font-size: 18px;
    font-weight: 500;
    @media screen and (max-width: 576px) {
        font-size: 16px;
    }
`;

export const HeroButtons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
`;

export const PrimaryButton = styled.a<PrimaryButtonProps>`
    background-color: #22262a;
    color: #fff;
    text-transform: uppercase;
    font-size: 18px;
    cursor: pointer;
    padding: 10px 15px;
    border: none;
    margin-right: ${(props) => (props.mr ? props.mr : 0)};
    @media screen and (max-width: 576px) {
        font-size: 16px;
        padding: 7.5px 15px;
    }
`;
