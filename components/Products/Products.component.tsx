import React, { Fragment } from "react";
import { Container, ProductCard } from "..";
import { IProduct } from "../../context/types";
import { BtnSecondary, ProductsRow, SeeMore } from "./Products.style";
import Link from "next/link";

export interface IProductCategory {
    id: number;
    title: string;
}

interface ProductsProps {
    products: IProduct[];
    isCategory: boolean;
    categoryId?: number;
}

const Products: React.FC<ProductsProps> = ({
    products,
    isCategory,
    categoryId,
}) => {
    return (
        <Fragment>
            <Container>
                <ProductsRow>
                    {isCategory
                        ? products?.slice(0, 4).map((product) => (
                              <Fragment key={product.id}>
                                  <ProductCard product={product} />
                              </Fragment>
                          ))
                        : products?.map((product) => (
                              <Fragment key={product.id}>
                                  <ProductCard product={product} />
                              </Fragment>
                          ))}
                </ProductsRow>
                {isCategory && products.length > 4 && (
                    <SeeMore>
                        <Link
                            href={`/categories/[id]`}
                            as={`/categories/${categoryId}`}
                        >
                            <BtnSecondary>See More</BtnSecondary>
                        </Link>
                    </SeeMore>
                )}
            </Container>
        </Fragment>
    );
};

export default Products;
