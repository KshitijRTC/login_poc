import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { login } from "./redux/actions";
import { Button } from "@mui/material";
import { Form, FormInput } from "./Styled/Styles";
import { useDispatch, useSelector } from "react-redux";
import {store} from "./redux/Store"

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();


  
  return (
    <div className="App">
      <Form>
        <FormInput placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <FormInput placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" onClick={() => {dispatch(login(username, password))}}>Login</Button>
      </Form>
      {console.log(store.getState())}
      
    </div>
  );
}

export default App;
