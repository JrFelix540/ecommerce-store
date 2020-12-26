export const fetchCategoriesIds = async () => {
    const res = await fetch(
        `https://raw.githubusercontent.com/JrFelix540/ecommerce-pictures/master/categories.json`,
    );
    const data = await res.json();

    return data;
};
