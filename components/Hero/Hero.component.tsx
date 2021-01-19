import React, { Fragment } from "react";
import { Container } from "..";
import {
    HeroContainer,
    HeroImage,
    HeroImageContainer,
    HeroContent,
    HeroSubTitle,
    HeroText,
    HeroTextContent,
    HeroTitle,
    HeroButtons,
    PrimaryButton,
} from "./Hero.styles";

const Hero: React.FC = () => {
    return (
        <Fragment>
            <HeroContainer>
                <Container>
                    <HeroContent>
                        <HeroImageContainer>
                            <HeroImage src="./hero-image.png" />
                        </HeroImageContainer>
                        <HeroTextContent>
                            <HeroSubTitle>New Trend</HeroSubTitle>
                            <HeroTitle>Collusion</HeroTitle>
                            <HeroText>
                                An exclusive selection of this
                                season's trends.
                            </HeroText>
                            <HeroButtons>
                                <PrimaryButton>
                                    Shop Now
                                </PrimaryButton>
                            </HeroButtons>
                        </HeroTextContent>
                    </HeroContent>
                </Container>
            </HeroContainer>
        </Fragment>
    );
};

export default Hero;
