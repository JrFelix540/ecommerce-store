import React, { Fragment, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navbar, Products } from "../../components";
import { CategoryTitle } from "../../components/Category/Category.styles";
import { Store } from "../../context/store";
import { ICollection } from "../../context/types";
import { useGetIntId } from "../../utils/useGetIntId";

const CollectionPage: React.FC = () => {
    const { state, dispatch } = useContext(Store);
    const intId = useGetIntId();

    useEffect(() => {
        dispatch({
            type: "FETCH_COLLECTIONS",
        });
    }, []);

    const collection: ICollection = state.collections.find(
        (collection: ICollection) => collection.id === intId,
    );
    return (
        <Fragment>
            {console.log(collection)}
            <Helmet>
                <title>{collection?.title}</title>
            </Helmet>
            <Navbar />
            <CategoryTitle>{collection?.title}</CategoryTitle>

            <Products
                isCategory={false}
                products={collection?.products}
            />
        </Fragment>
    );
};
export async function getStaticProps(context: any) {
    const id = context.params.id;
    return {
        props: {
            collectionId: parseFloat(id),
        },
    };
}

export async function getStaticPaths() {
    const paths = [
        {
            params: {
                id: "1",
            },
        },
        {
            params: {
                id: "2",
            },
        },
    ];
    return { paths, fallback: false };
}

export default CollectionPage;
