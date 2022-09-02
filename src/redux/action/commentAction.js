import { httpComments } from "../../services/postServices";

export const getComments = () => {
    return async dispatch => {
        const {data} = await httpComments();
        dispatch({type:"GET_COMMENTS", payload: data});
    }
}