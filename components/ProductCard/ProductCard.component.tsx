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
interface ProductCardProps {
    product: IProduct;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Fragment>
            <Card>
                <ProductImage url={product.imageUrl} />
                <ProductDetails>
                    <ProductCategories>
                        {product.categories?.map(
                            (cat) => cat.title + ` `,
                        )}
                    </ProductCategories>
                    <ProductTitle>{product.title}</ProductTitle>
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
