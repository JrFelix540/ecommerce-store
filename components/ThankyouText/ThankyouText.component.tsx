import React, { Fragment } from "react";
import { Container } from "..";
import {
    ThankyouImage,
    ThankyouTextContent,
} from "./ThankyouText.styles";

const ThankyouText: React.FC = () => {
    return (
        <Fragment>
            <Container>
                <ThankyouImage>
                    <img
                        src="/img/successful-purchase.png"
                        alt="successful purchase"
                    />
                </ThankyouImage>
                <ThankyouTextContent>
                    Thank you for shopping with us!
                </ThankyouTextContent>
            </Container>
        </Fragment>
    );
};

export default ThankyouText;
