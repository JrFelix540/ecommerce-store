import React, { Fragment, useContext, useEffect } from "react";
import { Category } from "..";
import { Store } from "../../context/store";
import { ICategory } from "../../context/types";

const AllCategories: React.FC = () => {
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        dispatch({
            type: "FETCH_CATEGORIES",
        });
    }, []);
    return (
        <Fragment>
            {state.categories.map((cat: ICategory) => (
                <Category category={cat} key={cat.id} />
            ))}
        </Fragment>
    );
};

export default AllCategories;
