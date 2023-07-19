import {React, useState} from 'react'
import { GetUsers, login } from "./redux/api";
import { Button } from "@mui/material";
import { Form, FormContainer, FormInput, ImgContainer, LoginBtn, LoginContainer, MainContainer } from "./Styled/Styles";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state => state.login.data)
  return (
    <MainContainer>
      <FormContainer>
        <h1>Login</h1>
        <Form>
        <FormInput type='text' placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <FormInput type='password' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <LoginBtn to={`/UserDashboard`} onClick={() => {dispatch(GetUsers(username, password))}}>Login</LoginBtn>        
      </Form>
      </FormContainer>
      <ImgContainer>Welcome Back!</ImgContainer>
    </MainContainer>
  )
}

export default Login