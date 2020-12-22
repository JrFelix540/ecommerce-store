import styled from "styled-components";
interface PrimaryButtonProps {
  mr?: string;
}

export const HeroContainer = styled.div`
  background-color: #ccd7db;
  min-height: 450px;
`;

export const HeroImageContainer = styled.div``;

export const HeroImage = styled.img`
  height: 450px;
  width: auto;
`;

export const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const HeroTextContent = styled.div`
  margin-top: 200px;
`;
export const HeroSubTitle = styled.h4`
  font-weight: 700;
  text-transform: uppercase;
  font-size: 18px;
`;

export const HeroTitle = styled.h1`
  font-weight: 900;
  text-transform: uppercase;
  font-size: 80px;
`;

export const HeroText = styled.p`
  font-size: 18px;
  font-weight: 700;
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
  padding: 10px 15px;
  border: none;
  margin-right: ${(props) => (props.mr ? props.mr : 0)};
`;
