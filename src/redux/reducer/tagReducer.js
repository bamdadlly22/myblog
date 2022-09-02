
const initialState = {
    tags: []
}

export const tagReducer = (state=initialState, action) => {
    switch (action.type) {
        case "GET_TAGS":
            return {...state, tags: action.payload}
        default:
                return state;
    }
}