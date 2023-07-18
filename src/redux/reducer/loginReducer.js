import axios from "axios";
import * as actions from "../actionType"

const initialState = {
    data: null, 
    loading: false,
    error: null
}

export default function login(state = initialState, action){
    switch(action.type){
        case actions.GET_USERS_REQUEST: return {...state, loading: action.payload.loading}
        case actions.GET_USERS_SUCCESS: return {...state, data: action.payload.data, loading: action.payload.loading}
        case actions.GET_USERS_FAILURE: return {...state, error: action.payload.data}
        default: return state
    }
}

