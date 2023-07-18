import axios from "axios";
import * as actions from "../actionType"


export default function logout(state = {}, action){
    switch(action.type){
        case actions.LOGOUT: return (state= {...state, data: null, error: null, loading: false})
        default: return state
    }
}

