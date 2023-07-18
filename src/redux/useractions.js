import * as actions from "./actionType"


export const getUserRequest = () => {
    return {
        type: actions.GET_USERS_REQUEST,
        payload: {
            loading: true
        }
    }
}


export const getUserSuccess = (data) => {
    return {
        type: actions.GET_USERS_SUCCESS,
        payload: {
            loading: false,
            data: data
        }
    }
}


export const getUsersFailure = (error) => {
    return {
        type: actions.GET_USERS_FAILURE,
        payload: {
            loading: false,
            data: error
        }
    }
}