export interface ICategoryData {
    id: number;
    title: string;
    productIds: number[];
}
export const categories: ICategoryData[] = [
    {
        id: 1,
        title: "Accessories",
        productIds: [1, 2, 3, 4, 5],
    },
    {
        id: 2,
        title: "Women",
        productIds: [7, 9, 14, 15, 16],
    },
    {
        id: 3,
        title: "Sneakers",
        productIds: [6, 7, 8, 9, 10],
    },
    {
        id: 4,
        title: "Men",
        productIds: [6, 8, 10],
    },
    {
        id: 5,
        title: "Jackets",
        productIds: [11, 12, 13],
    },
];

export const collection = [
    {
        id: 1,
        title: "Summer Collection",
        productIds: [3, 12, 13, 14, 15, 15],
        imageUrl: ``,
    },
    {
        id: 2,
        title: "Winter Collection",
        productIds: [1, 2],
        imageUrl: ``,
    },
];
interface IProductInfo {
    id: number;
    title: string;
    imageUrl: string;
    collectionIds: number[];
    categoryIds: number[];
    price: number;
    salePrice?: number;
}
export const products: IProductInfo[] = [
    {
        id: 1,
        title: "Beenie",
        categoryIds: [1],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/beenie.jpg`,
        collectionIds: [2],
        price: 10,
        salePrice: 8,
    },
    {
        id: 2,
        title: "Beenie",
        categoryIds: [1],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/beenie-1.jpg`,
        collectionIds: [2],
        price: 12,
        salePrice: 10,
    },
    {
        id: 3,
        title: "Blue Brim Hat",
        categoryIds: [1],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/hat-1.jpg`,
        collectionIds: [1],
        price: 40,
        salePrice: 35,
    },
    {
        id: 4,
        title: `Gray Cap`,
        categoryIds: [1],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/hat-3.jpg`,
        collectionIds: [],
        price: 30,
        salePrice: 27,
    },
    {
        id: 5,
        title: `Gray Cap`,
        categoryIds: [1],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/hat-2.jpg`,
        collectionIds: [],
        price: 30,
        salePrice: 25,
    },
    {
        id: 6,
        title: `Air Jordans 1`,
        categoryIds: [3, 4],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/jordan1.jpg`,
        collectionIds: [],
        price: 300,
    },
    {
        id: 7,
        title: `Air Force 1`,
        categoryIds: [3, 2],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/airforce-1-ladies.jpg`,
        collectionIds: [],
        price: 150,
    },
    {
        id: 8,
        title: `Converse All Star`,
        categoryIds: [3, 4],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/chuck-tailors.jpg`,
        collectionIds: [],
        price: 125,
    },
    {
        id: 9,
        title: `Vans`,
        categoryIds: [3, 2],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/vans.jpg`,
        collectionIds: [],
        price: 70,
    },
    {
        id: 10,
        title: `New Balance`,
        categoryIds: [3, 4],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/new-balance.jpg`,
        collectionIds: [],
        price: 50,
    },
    {
        id: 11,
        title: `Leather Jacket`,
        categoryIds: [5],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/leather-jacket.jpg`,
        collectionIds: [],
        price: 250,
    },
    {
        id: 12,
        title: `Denim Jacket`,
        categoryIds: [5],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/denimjacket.jpg`,
        collectionIds: [1],
        price: 175,
    },
    {
        id: 13,
        title: `Winter Coat`,
        categoryIds: [5],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/winter-coat.jpg`,
        collectionIds: [1],
        price: 300,
    },
    {
        id: 14,
        title: `Shirts`,
        categoryIds: [4],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/mens-shirts.jpg`,
        collectionIds: [],
        price: 425,
    },
    {
        id: 15,
        title: `Floral Blouse`,
        categoryIds: [2],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/floral-blouse.jpg`,
        collectionIds: [1],
        price: 50,
    },
    {
        id: 16,
        title: `Floral Blouse`,
        categoryIds: [2],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/floral-blouse.png`,
        collectionIds: [1],
        price: 70,
    },
    {
        id: 17,
        title: `Floral Dress`,
        categoryIds: [2],
        imageUrl: `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/img/floral-dress.png`,
        collectionIds: [1],
        price: 90,
    },
];
