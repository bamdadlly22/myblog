import { httpTags } from "../../services/postServices";

export const getTags = () => {
    return async dispatch => {
        const {data} = await httpTags();
        dispatch({type:"GET_TAGS", payload: data});
    }
}