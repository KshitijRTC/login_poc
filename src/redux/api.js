import axios from "axios";
import * as actions from "./actionType";
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
  return (dispatch) => {
    dispatch({
      type: actions.GET_USERS_REQUEST,
      payload: {
        loading: true,
      },
    });
    try {
      axios.get("http://localhost:8000/users").then((res) => {
        const users = res.data;
        users.map((user) => {
          if (
            user.login.username === username &&
            user.login.password === password
          ) {
            dispatch({
              type: actions.GET_USERS_SUCCESS,
              payload: {
                loading: false,
                data: user,
              },
            });
          }
        });
      });
    } catch (err) {
      dispatch({
        type: actions.GET_USERS_FAILURE,
        payload: {
          loading: false,
          data: err.message,
        },
      });
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
