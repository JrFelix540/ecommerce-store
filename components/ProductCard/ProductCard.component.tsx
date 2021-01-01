import React, { Fragment } from "react";
import { IProduct } from "../../context/types";
import {
    ProductImage,
    Card,
    ProductCategories,
    ProductDetails,
    ProductTitle,
    PriceRow,
    OriginalPrice,
    SalePrice,
    Price,
} from "./ProductCard.styles";
import Link from "next/link";

interface ProductCardProps {
    product: IProduct;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Fragment>
            <Card>
                <Link
                    href={`/products/[id]`}
                    as={`/products/${product.id}`}
                >
                    <ProductImage url={product.imageUrl} />
                </Link>
                <ProductDetails>
                    <ProductCategories>
                        {product.categories?.map(
                            (cat) => cat.title + ` `,
                        )}
                    </ProductCategories>
                    <Link
                        href={`/products/[id]`}
                        as={`/products/${product.id}`}
                    >
                        <ProductTitle>{product.title}</ProductTitle>
                    </Link>
                    {product.salePrice ? (
                        <PriceRow>
                            <OriginalPrice>
                                ${product.price}
                            </OriginalPrice>
                            <SalePrice>
                                ${product.salePrice}
                            </SalePrice>
                        </PriceRow>
                    ) : (
                        <Price>${product.price}</Price>
                    )}
                </ProductDetails>
            </Card>
        </Fragment>
    );
};

export default ProductCard;
