import React, { Fragment } from "react";
import { Products } from "..";
import { ICategory } from "../../context/types";
import { CategoryTitle } from "./Category.styles";
interface CategoryProps {
    category: ICategory;
}
const Category: React.FC<CategoryProps> = ({ category }) => {
    if (!category.products) {
        return <>{category.title} has no products</>;
    }

    return (
        <Fragment>
            <CategoryTitle>{category.title}</CategoryTitle>
            <Products
                products={category.products}
                isCategory={true}
                categoryId={category.id}
            />
        </Fragment>
    );
};

export default Category;
