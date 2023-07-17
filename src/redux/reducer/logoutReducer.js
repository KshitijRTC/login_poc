import axios from "axios";
import * as actions from "../actionType"

const initialState = []

export default function logout(state = initialState, action){
    switch(action.type){
        case actions.LOGOUT: (initialState = [])
        default: return state
    }
}

