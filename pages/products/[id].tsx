import { useRouter } from "next/router";
import React, { Fragment, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
import { Navbar, ProductFull } from "../../components";
import { Store } from "../../context/store";
import { IProduct } from "../../context/types";
import { useGetIntId } from "../../utils/useGetIntId";

const ProductPage: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    const router = useRouter();
    const intId = useGetIntId();
    useEffect(() => {
        dispatch({
            type: "FETCH_PRODUCTS",
        });
    }, []);

    const product = state.products.find(
        (product: IProduct) => product.id === intId,
    );
    const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: 'Poppins', sans-serif;
  }
`;

    return (
        <Fragment>
            <GlobalStyle />
            <Helmet>
                <title>{product?.title}</title>
            </Helmet>
            <Navbar />
            <ProductFull product={product} />
        </Fragment>
    );
};

export async function getStaticProps(context: any) {
    const id = context.params.id;
    return {
        props: {
            categoryId: parseFloat(id),
        },
    };
}

export async function getStaticPaths(context: any) {
    const res = await fetch(
        `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/products.json`,
    );
    const products = await res.json();

    const paths = products.map((product: IProduct) => ({
        params: { id: product.id.toString() },
    }));

    return { paths, fallback: false };
}

export default ProductPage;
