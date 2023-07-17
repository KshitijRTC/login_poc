import axios from "axios";
import * as actions from "./actionType";

export function login(username, password){
    return {
        type: actions.LOGIN,
        payload: {
            username: username,
            password: password
        }
    }
}


export const login  = (username, password)=>{
  
    // Thunk Function
    return async (dispatch,getState)=>{
  
        // Fetching results from an API : asynchronous action
        const response = await axios.get(
            'http://localhost:8000/users');
        const users = await response.data;
  
        // Dispatching the action when async
        // action has completed.
        dispatch({
            type : 'ADD_DATA',
            payload : users
        });
    }
}