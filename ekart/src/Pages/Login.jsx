import { useState } from "react";
import Textbox from "../Components/Textbox";
import { apiPost, useApiPost } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";

const Login =()=>{
    const [login,setLogin] = useState({username:'kminchelle',password:'0lelplR'});
    const [error,setError] = useState(false);
    const navigate = useNavigate();
    const handleChange = (e) => {
        setLogin({ ...login, [e.name]: e.value });
    };
    const userNameConfig = {
        displayText: 'UserName',
        id: 'txtUsername',
        name: 'username',
        placeholder: 'Enter User Name',
        type: "text",
        value: login.username,
        onChange: handleChange
    };
    const passwordConfig = {
        displayText: 'Password',
        id: 'txtPassword',
        name: 'password',
        placeholder: 'Enter Password',
        type: "password",
        value: login.password,
        onChange: handleChange
    };
    const handleLogin =async()=>{
       const data =await apiPost('https://dummyjson.com/auth/login',login);
       console.log(data);
       if(data.status=='200'){
        navigate("/products");
       }
       else{
        setError(true);
       }
       
    }
    const showError =()=>{
        return <div class="alert alert-danger alert-dismissible fade show" role="alert">
        Invalid Credentials
      </div>
    }

    return(<div>
        <Textbox config ={userNameConfig}/>
        <Textbox config ={passwordConfig}/>
        <button class='btn btn-primary' onClick={handleLogin}>Login</button>
        {error?showError():''}
    </div>)
}

export default Login;