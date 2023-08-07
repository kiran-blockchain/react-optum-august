import { useState } from "react";
import Textbox from "../Components/Textbox";

const Register = () => {
    const [signup, setSignup] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        password: '',
        email: '',
        agreeTerms: false
    });
    const handleChange = (e)=>{
        setSignup({...signup,[e.name]:e.value});
    };
    const firstNameConfig = {
        displayText:'First Name',
        id:'txtFirstName',
        name:'firstName',
        placeholder:'Enter FirstName',
        type:"text",
        value:signup.firstName,
        onChange:handleChange
    };
    const lastNameConfig = {
        displayText:'Last Name',
        id:'txtLastName',
        name:'lastName',
        placeholder:'Enter LastName',
        type:"text",
        value:signup.lastName,
        onChange:handleChange
    };
    

    return (
        <form>
            <Textbox config={firstNameConfig}/>
            <Textbox config={lastNameConfig}/>
            
            <button type="submit" class="btn btn-primary">Sign in</button>
            {JSON.stringify(signup)}
        </form>
    )
}

export default Register;