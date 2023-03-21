import { FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from "../actionTypes/actionTypes"

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