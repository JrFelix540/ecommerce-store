import React, { Fragment } from "react";
import { Navbar, ThankyouText } from "../components";
import { Helmet } from "react-helmet";

const Thankyou: React.FC = () => {
    return (
        <Fragment>
            <Helmet>
                <title>E-commerce Store | Thank you</title>
            </Helmet>
            <Navbar />
            <ThankyouText />
        </Fragment>
    );
};

export default Thankyou;
