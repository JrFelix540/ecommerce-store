import React, { Fragment, useContext } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { CheckoutTable, Container, Navbar } from "../components";
import { Store } from "../context/store";
const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: 'Poppins', sans-serif;
  }
`;

const Checkout: React.FC = () => {
    const { state, dispatch } = useContext(Store);

    return (
        <Fragment>
            <Helmet>
                <title>E-commerce Store | Checkout</title>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <GlobalStyle />
            <Navbar />
            <Container>
                <CheckoutTable cartItems={state.cartItems} />
            </Container>
        </Fragment>
    );
};

export default Checkout;
