import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import authReducer from "./reducer/authReducer";


export const store = createStore(authReducer, applyMiddleware(thunk));

// api handle redux have middlewares
//  redux thunk, redux saga
