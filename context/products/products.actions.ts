import { ICategory, IProduct, IProductCategory } from "../types";
import { products, categories } from "./shop.data";

export const fetchProducts = (): IProduct[] => {
    const productsRemap: IProduct[] = [];

    products.map((product) => {
        let categoriesRemap: IProductCategory[] = [];
        product.categoryIds.map((categoryId) => {
            const category = categories.find(
                (cat) => cat.id === categoryId,
            );
            if (!category) {
                return;
            }
            categoriesRemap.push({
                id: category.id,
                title: category.title,
            });
        });

        productsRemap.push({
            ...product,
            categories: categoriesRemap,
        });
    });

    return productsRemap;
};

export const fetchCategories = (): ICategory[] => {
    const categoriesRemap: ICategory[] = [];

    categories.map((category) => {
        const productsRemap: IProduct[] = [];
        category.productIds.map((productId) => {
            const product = products.find(
                (product) => product.id === productId,
            );

            if (!product) {
                return;
            }

            productsRemap.push(product);
        });
        categoriesRemap.push({
            id: category.id,
            title: category.title,
            products: productsRemap,
        });
    });
    return categoriesRemap;
};

export const fetchProductsIds = (): number[] => {
    const productsIds: number[] = [];

    products.map((product) => {
        productsIds.push(product.id);
    });

    return productsIds;
};

export const fetchCategoryIds = (): number[] => {
    const categoriesIds: number[] = [];

    categories.map((category) => {
        categoriesIds.push(category.id);
    });

    return categoriesIds;
};
