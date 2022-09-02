
const initialState = {
    comments: []
}

export const commentReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_COMMENTS":
            return {...state, comments: action.payload}
        default:
                return state;
    }
}