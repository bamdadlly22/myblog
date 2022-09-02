import { httpCategories } from "../../services/postServices"

export const getCategories = () => {
    return async dispatch => {
        const {data} = await httpCategories();
        dispatch({type:"GET_CATS", payload: data});
    }
}