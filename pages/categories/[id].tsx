import { useRouter } from "next/router";
import React, { Fragment, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Navbar, Products } from "../../components";
import { CategoryTitle } from "../../components/Category/Category.styles";
import { Store } from "../../context/store";
import { useGetIntId } from "../../utils/useGetIntId";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body{
    font-family: 'Poppins', sans-serif;
  }
`;

const CategoryPage: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    const router = useRouter();
    const intId = useGetIntId();
    useEffect(() => {
        dispatch({
            type: "FETCH_CATEGORIES",
        });
    }, []);
    const category = state.categories.find((cat) => cat.id === intId);
    return (
        <Fragment>
            <GlobalStyle />
            <Helmet>
                <title>{category?.title}</title>
            </Helmet>
            <Navbar />
            <CategoryTitle>{category?.title}</CategoryTitle>
            <Products
                products={category?.products}
                isCategory={false}
            />
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
        `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/categories.json`,
    );
    const categories = await res.json();

    const paths = categories.map((cat) => ({
        params: { id: cat.id.toString() },
    }));

    return { paths, fallback: false };
}

export default CategoryPage;
