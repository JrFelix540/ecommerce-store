import React from "react";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { Navbar, Hero, AllCategories } from "../components";
import { StoreProvider } from "../context/store";
import { Helmet } from "react-helmet";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: 'Poppins', sans-serif;
  }
`;

export default function Home() {
    return (
        <>
            <Helmet>
                <title>E-commerce Store</title>
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
            <Hero />
            <StoreProvider>
                <AllCategories />
            </StoreProvider>
            {/* <Products products={products} /> */}
        </>
    );
}
