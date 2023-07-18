import {React, useState} from 'react'
import { GetUsers, login } from "./redux/api";
import { Button } from "@mui/material";
import { Form, FormInput } from "./Styled/Styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state => state.login.data)
  return (
    <div>
        <h1>Login</h1>
        <Form>
        <FormInput placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <FormInput placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Link to={`/UserDashboard`} onClick={() => {dispatch(GetUsers(username, password))}}>Login</Link>        
      </Form>
    </div>
  )
}

export default Login