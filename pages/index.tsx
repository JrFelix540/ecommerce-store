import React from "react";
import { Helmet } from "react-helmet";
import { AllCategories, Hero, Navbar } from "../components";

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
            <Navbar />
            <Hero />
            <AllCategories />
        </>
    );
}
