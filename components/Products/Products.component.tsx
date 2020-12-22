import React, { Fragment, useContext, useEffect } from "react";
import { ProductsRow } from "./Products.style";
import { Container, ProductCard } from "..";
import { Store } from "../../context/store";
import { IProduct } from "../../context/types";

export interface IProductCategory {
    id: number;
    title: string;
}

interface ProductsProps {
    products: IProduct[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
    // const { state, dispatch } = useContext(Store);

    // useEffect(() => {
    //     dispatch({
    //         type: "FETCH_PRODUCTS",
    //     });

    //     dispatch({
    //         type: "FETCH_CATEGORIES",
    //     });
    // }, []);

    return (
        <Fragment>
            <Container>
                <ProductsRow>
                    {products?.map((product) => (
                        <Fragment key={product.id}>
                            <ProductCard product={product} />
                        </Fragment>
                    ))}
                </ProductsRow>
            </Container>
        </Fragment>
    );
};

export default Products;
