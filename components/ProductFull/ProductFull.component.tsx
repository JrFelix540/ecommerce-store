import React, {
    Fragment,
    useState,
    useContext,
    useEffect,
} from "react";
import { Container } from "..";
import { ICartItem, IProduct } from "../../context/types";
import { Store } from "../../context/store";
import {
    ProductDetails,
    ProductFullContainer,
    ProductImage,
    ProductTitle,
    ProductQuantity,
    QuantityButtons,
    QuantityLabel,
    AddToCartButton,
    AddSubtractButton,
} from "./ProductFull.styles";
import { Input } from "../InputTextField/InputTextField.styles";
import { addCartItem } from "../../utils/cartOperations";
import {
    PriceRow,
    OriginalPrice,
    SalePrice,
    Price,
} from "../ProductCard/ProductCard.styles";

interface ProductFullProps {
    product: IProduct;
}

const ProductFull: React.FC<ProductFullProps> = ({ product }) => {
    const { dispatch } = useContext(Store);
    useEffect(() => {
        dispatch({
            type: "ADD_CURRENT_PRODUCT",
            payload: product,
        });
    }, []);
    const [quantity, setQuantity] = useState<number>(1);

    const onChange = (e: any): void => {
        const valueReceived = e?.target?.value;
        if (valueReceived === "") {
            setQuantity(0);
            return;
        }
        const quantity = parseInt(e?.target?.value);
        if (quantity == NaN) {
            setQuantity(0);
        }
        setQuantity(quantity);
    };
    const onSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        console.log(product);
        const cartItem: ICartItem = {
            id: product?.id,
            name: product?.title,
            imageUrl: product?.imageUrl,
            price: product?.salePrice
                ? product?.salePrice
                : product?.price,
            quantity,
        };
        dispatch({
            type: "ADD_CART_ITEM",
            payload: cartItem,
        });
        addCartItem(cartItem);
    };

    const addOneToCart = () => {
        setQuantity((quantity) => quantity + 1);
    };

    const subtractFromCart = () => {
        if (quantity === 1) {
            return;
        }
        setQuantity((quantity) => quantity - 1);
    };

    return (
        <Fragment>
            <Container>
                <ProductFullContainer>
                    <ProductImage
                        url={product?.imageUrl}
                    ></ProductImage>
                    <ProductDetails>
                        <ProductTitle>{product?.title}</ProductTitle>
                        {product?.salePrice ? (
                            <PriceRow>
                                <OriginalPrice>
                                    ${product?.price}
                                </OriginalPrice>
                                <SalePrice>
                                    ${product?.salePrice}
                                </SalePrice>
                            </PriceRow>
                        ) : (
                            <Price>${product?.price}</Price>
                        )}

                        <form onSubmit={onSubmit}>
                            <ProductQuantity>
                                <QuantityLabel>
                                    Quantity
                                </QuantityLabel>
                                <QuantityButtons>
                                    <AddSubtractButton
                                        onClick={addOneToCart}
                                    >
                                        &#43;
                                    </AddSubtractButton>
                                    <Input
                                        type="text"
                                        name="quantity"
                                        id="quantity"
                                        width="40px"
                                        value={quantity.toString()}
                                        onChange={onChange}
                                    />
                                    <AddSubtractButton
                                        onClick={subtractFromCart}
                                    >
                                        &#8722;
                                    </AddSubtractButton>
                                </QuantityButtons>
                            </ProductQuantity>
                            <AddToCartButton type="submit">
                                Add to Cart
                            </AddToCartButton>
                        </form>
                    </ProductDetails>
                </ProductFullContainer>
            </Container>
        </Fragment>
    );
};

export default ProductFull;
