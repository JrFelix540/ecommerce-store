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
import Link from "next/link";
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
                                <Link
                                    href={`/collections/[id]`}
                                    as={`/collections/2`}
                                >
                                    <PrimaryButton>
                                        Shop Now
                                    </PrimaryButton>
                                </Link>
                            </HeroButtons>
                        </HeroTextContent>
                    </HeroContent>
                </Container>
            </HeroContainer>
        </Fragment>
    );
};

export default Hero;
