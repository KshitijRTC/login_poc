import axios from "axios";
import {getUserRequest, getUsersFailure, getUserSuccess} from "./useractions"

// export function login(username, password){
//     return {
//         type: actions.LOGIN,
//         payload: {
//             username: username,
//             password: password
//         }
//     }
// }


// export const login  = (username, password)=>{
  
//     // Thunk Function
//     return async (dispatch,getState)=>{
  
//         // Fetching results from an API : asynchronous action
//         const response = await axios.get(
//             'http://localhost:8000/users');
//         const users = await response.data;
  
//         // Dispatching the action when async
//         // action has completed.
//         dispatch({
//             type : 'ADD_DATA',
//             payload : users
//         });
//     }
// }

export const GetUsers = (username, password) => {
    console.log("GetUsers");

    return dispatch => {
        dispatch(getUserRequest())
        try{
            axios.get('http://localhost:8000/users').then(res => {
                const users = res.data
                users.map(user => {
                    if((user.login.username === username) && user.login.password === password){
                        dispatch(getUserSuccess(user));
                    }
                })
            })
        }
        catch(err){
            dispatch(getUsersFailure(err.message))
        }

        // axios.get(`http://localhost:8000/users`)
        // .then(res => {
        //     const persons = res.data;
            
        //     dispatch({
        //         type: actions.GET_USERS_SUCCESS,
        //         users: persons
                
        //     });
        // })
    };
};