import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from "../actionTypes/actionTypes"

export const initialState = {
    loading: false,
    posts: [],
    error: "",
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                loading: true,
            }
        case FETCHING_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
            }
        case FETCHING_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}