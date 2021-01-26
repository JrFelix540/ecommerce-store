import React, { Fragment, useContext, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Navbar, Products } from "../../components";
import { CategoryTitle } from "../../components/Category/Category.styles";
import { Store } from "../../context/store";
import { ICollection, IProduct } from "../../context/types";
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

export default CollectionPage;
