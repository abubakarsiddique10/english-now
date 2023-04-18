import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS, UPDATE_COMMENT, UPDATE_POST } from "../actionTypes/actionTypes"

export const fetchStart = (data) => {
    return {
        type: FETCHING_START
    }
}
export const fetchSuccess = (data) => {
    return {
        type: FETCHING_SUCCESS, payload: data
    }
}
export const fetchError = (data) => {
    return {
        type: FETCHING_ERROR, payload: data
    }
}
export const updatePost = (post) => {
    return {
        type: UPDATE_POST,
        payload: post
    }
}

export const updateComment = (data) => {
    return {
        type: UPDATE_COMMENT,
        payload: data
    }
}