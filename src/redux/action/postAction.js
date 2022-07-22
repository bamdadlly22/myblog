import axios from "axios"
import { useDispatch } from "react-redux"
import { httpPosts } from "../../services/postServices"

export const getPosts = () => {
    return async (dispatch) => {
        const {data} = await httpPosts();
        await dispatch({type:"GET_POSTS", payload: data})
    }
}