import React, {
    Fragment,
    useContext,
    useEffect,
    useState,
} from "react";
import { ICartItem } from "../../context/types";
import {
    Trash,
    CaretLeftFill,
    CaretRightFill,
} from "@styled-icons/bootstrap";
import {
    CheckoutTableWrapper,
    CheckoutTableHeader,
    CheckoutTableBody,
    Item,
    ItemImage,
    ItemName,
    ItemPrice,
    ItemQuantity,
    ItemRemove,
    ItemQuantityText,
    CartTotalText,
} from "./CheckoutTable.styles";
import { Store } from "../../context/store";
import { calculateCartTotal } from "../../utils/cartOperations";

interface CheckoutTableProps {
    cartItems: ICartItem[];
}

const CheckoutTable: React.FC<CheckoutTableProps> = ({
    cartItems,
}) => {
    const { state, dispatch } = useContext(Store);
    const [cartTotal, setCartTotal] = useState<number>(0);
    useEffect(() => {
        setCartTotal(calculateCartTotal(cartItems));
    }, [cartItems]);
    return (
        <Fragment>
            <CheckoutTableWrapper>
                <CheckoutTableHeader>
                    <p>Product</p>
                    <p>Name</p>
                    <p>Quantity</p>
                    <p>Price</p>
                    <p>Remove</p>
                </CheckoutTableHeader>
                <CheckoutTableBody>
                    {cartItems.map((cartItem) => (
                        <Item key={cartItem.id}>
                            <ItemImage>
                                <img
                                    src={cartItem.imageUrl}
                                    alt={cartItem.name}
                                />
                            </ItemImage>
                            <ItemName>{cartItem.name}</ItemName>
                            <ItemQuantity>
                                <a
                                    onClick={() => {
                                        dispatch({
                                            type: "REMOVE_CART_ITEM",
                                            payload: cartItem,
                                        });
                                    }}
                                >
                                    <CaretLeftFill size="16" />
                                </a>
                                <ItemQuantityText>
                                    {cartItem.quantity}
                                </ItemQuantityText>
                                <a
                                    onClick={() => {
                                        dispatch({
                                            type: "ADD_CART_ITEM",
                                            payload: {
                                                ...cartItem,
                                                quantity: 1,
                                            },
                                        });
                                    }}
                                >
                                    <CaretRightFill size="16" />
                                </a>
                            </ItemQuantity>
                            <ItemPrice>{cartItem.price}</ItemPrice>
                            <ItemRemove>
                                <a
                                    onClick={() => {
                                        dispatch({
                                            type: "CLEAR_CART_ITEM",
                                            payload: cartItem,
                                        });
                                    }}
                                >
                                    <Trash size="16" />
                                </a>
                            </ItemRemove>
                        </Item>
                    ))}
                    <CartTotalText>Total: {cartTotal}</CartTotalText>
                </CheckoutTableBody>
            </CheckoutTableWrapper>
        </Fragment>
    );
};

export default CheckoutTable;