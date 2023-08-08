import { useContext, useState } from "react";
import Textbox from "../Components/Textbox";
import { apiPost, useApiPost } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import LoginContext from "../Context/LoginProvider";

const Login =()=>{
    const [signin,setLogin] = useState({username:'kminchelle',password:'0lelplR'});
    const [error,setError] = useState(false);
    const {login} = useContext(LoginContext)
    const navigate = useNavigate();
    const handleChange = (e) => {
        setLogin({ ...signin, [e.name]: e.value });
    };
    const userNameConfig = {
        displayText: 'UserName',
        id: 'txtUsername',
        name: 'username',
        placeholder: 'Enter User Name',
        type: "text",
        value: signin.username,
        onChange: handleChange
    };
    const passwordConfig = {
        displayText: 'Password',
        id: 'txtPassword',
        name: 'password',
        placeholder: 'Enter Password',
        type: "password",
        value: signin.password,
        onChange: handleChange
    };
    const handleLogin =async()=>{
       const data = await apiPost('https://dummyjson.com/auth/login',signin);
       console.log(data);
       if(data.status=='200'){
       
        localStorage.setItem('token',data.result.token);
        login();
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