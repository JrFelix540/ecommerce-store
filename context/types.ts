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
    imageUrl: string;
    quantity: number;
    price: number;
}

export interface IState {
    products: IProduct[];
    cartItems: ICartItem[];
    hideCart: boolean;
    categories: ICategory[];
    cartTotal: number;
    collections: ICollection[];
}

export interface IAction {
    type: string;
    payload?: any;
}

export interface ICollection {
    id: number;
    title: string;
    products: IProduct[];
}
