import React, { Fragment, useContext, useEffect } from "react";
import { Category } from "..";
import { Store } from "../../context/store";

const AllCategories: React.FC = () => {
    const { state, dispatch } = useContext(Store);

    useEffect(() => {
        dispatch({
            type: "FETCH_CATEGORIES",
        });
        dispatch({
            type: "FETCH_CATEGORIES_IDS",
        });
    }, []);

    return (
        <Fragment>
            {console.log(state)}
            {state.categories.map((cat) => (
                <Category category={cat} key={cat.id} />
            ))}
        </Fragment>
    );
};

export default AllCategories;
