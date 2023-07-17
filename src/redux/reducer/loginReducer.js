import axios from "axios";
import * as actions from "../actionType"

const initialState = []

export default function login(state = initialState, action){
    switch(action.type){
        case actions.LOGIN: (initialState?.filter(user => {if(user.login.username === action.payload.username){
            console.log(user.name.first)}}));
        default: return state
    }
}

