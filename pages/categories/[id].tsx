import React, { Fragment, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navbar, Products } from "../../components";
import { CategoryTitle } from "../../components/Category/Category.styles";
import { Store } from "../../context/store";
import { ICategory } from "../../context/types";
import { useGetIntId } from "../../utils/useGetIntId";

const CategoryPage: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    const intId = useGetIntId();
    useEffect(() => {
        dispatch({
            type: "FETCH_CATEGORIES",
        });
    }, []);
    const category = state.categories.find(
        (cat: ICategory) => cat.id === intId,
    );
    return (
        <Fragment>
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
    const categoriesUrl = process.env.NEXT_CATEGORIES_JSON;

    if (!categoriesUrl) {
        return;
    }
    const res = await fetch(categoriesUrl);
    const categories = await res.json();

    const paths = categories.map((cat: ICategory) => ({
        params: { id: cat.id.toString() },
    }));

    return { paths, fallback: false };
}

export default CategoryPage;
