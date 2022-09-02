import { combineReducers } from "redux";
import { categoryReducer } from "./categoryReducer";
import { commentReducer } from "./commentReducer";
import postReducer from "./postReducer";
import { tagReducer } from "./tagReducer";
import userReducer from "./userReducer";


const reducers = combineReducers({
    posts: postReducer,
    user: userReducer,
    categories: categoryReducer,
    comments: commentReducer,
    tags: tagReducer
})

export default reducers;
