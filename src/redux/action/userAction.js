export const setUser = (username, email) => {
    return async dispatch => {
         const user = {username, email};
         await dispatch({type: "SET_USER", payload: user});
    }
}

export const clearUser = () => {
    return dispatch => {
        dispatch({type: "CLEAR_USER"})
    };
}