import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../pexels-suzy-hazelwood-1629236.jpg"

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 50%;
    height: 100vh;
    border-right: 2px solid rgb(238,238,238);
`


export const ImgContainer = styled.div`
    display: flex;
    background-image: url(${img});
    width: 50%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    color: white;
    align-items: center;
    justify-content: center;
    font-size: 80px
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    padding: 30px;
    
`

export const FormInput = styled.input`
    height: 20px;
    width: 300px;
    border: 1px solid; 
    border-radius: 5px;
    padding: 10px;
    
`

export const DashboardContainer = styled.div`
    background-color: rgb(238,238,238);

`

export const Dashboard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
`

export const ProfileContainer = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    border: 1px solid rgb(238,238,238);
    border-radius: 10px;
    padding: 20px;
    background-color: white
`


export const NameContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
    text-transform: capitalize;
`


export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid rgb(238,238,238);
    border-radius: 10px;
    padding: 20px;
    background-color: white
`

export const InfoHeading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InfoContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`

export const InfoEntry = styled.div`
    display: flex;
    flex-direction: column;
    text-transform: capitalize;

`

export const LoginBtn = styled(Link)`
    background-color: #0D47A1;
    width: 60px;
    padding: 10px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    text-decoration: none;
    color: white
`

export const LogoutBtn = styled(Link)`
    background-color: #0D47A1;
    width: 60px;
    padding: 10px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    text-decoration: none;
    color: white
`

export const TryagainBtn = styled(Link)`
    background-color: #0D47A1;
    width: 100px;
    height: 20px;
    padding: 10px;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    text-decoration: none;
    color: white
`

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`