export interface IProductCategory {
    id: number;
    title: string;
}

export interface IProduct {
    id: number;
    title: string;
    categories?: IProductCategory[];
    imageUrl: string;
    salePrice?: number;
    price: number;
}

export interface ICategory {
    id: number;
    title: string;
    products?: IProduct[];
}

export interface ICartItem {
    id: number;
    name: string;
    ingredientIds: number[];
    image: string;
    quantity: number;
    price: number;
}

export interface IState {
    products: IProduct[];
    cartItems: ICartItem[];
    hideCart: boolean;
    categories: ICategory[];
}

export interface IAction {
    type: string;
    payload?: any;
}
