import React, { Fragment, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navbar, Products } from "../components";
import { Store } from "../context/store";

const Shop: React.FC = () => {
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        dispatch({
            type: "FETCH_PRODUCTS",
        });
    }, []);

    return (
        <Fragment>
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
            <Products isCategory={false} products={state.products} />
        </Fragment>
    );
};

export default Shop;
