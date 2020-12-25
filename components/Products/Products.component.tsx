import React, {
    Fragment,
    useContext,
    useEffect,
    useState,
} from "react";
import { ProductsRow, SeeMore, BtnSecondary } from "./Products.style";
import { Container, ProductCard } from "..";
import { Store } from "../../context/store";
import { IProduct } from "../../context/types";

export interface IProductCategory {
    id: number;
    title: string;
}

interface ProductsProps {
    products: IProduct[];
    isCategory: boolean;
}

const Products: React.FC<ProductsProps> = ({
    products,
    isCategory,
}) => {
    return (
        <Fragment>
            <Container>
                <ProductsRow>
                    {products?.slice(0, 4).map((product) => (
                        <Fragment key={product.id}>
                            <ProductCard product={product} />
                        </Fragment>
                    ))}
                </ProductsRow>
                {isCategory && products.length > 4 && (
                    <SeeMore>
                        <BtnSecondary>See More</BtnSecondary>
                    </SeeMore>
                )}
            </Container>
        </Fragment>
    );
};

export default Products;
