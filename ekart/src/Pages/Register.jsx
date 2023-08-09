import { useState } from "react";
import Textbox from "../Components/Textbox";
import Checkbox from "../Components/Checkbox";
import Select from "../Components/SelectBox";
import { useApiGet } from "../hooks/useApi";
import SignIn from "../Components/SignIn";

const Register = () => {
    const countries = useApiGet("https://restcountries.com/v2/all");
    const [signup, setSignup] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        password: '',
        email: '',
        agreeTerms: false
    });
    const handleChange = (e) => {
        setSignup({ ...signup, [e.name]: e.value });
    };
    const handleCheck = (e) => {
        setSignup({ ...signup, [e.name]: e.checked });
    }
    const firstNameConfig = {
        displayText: 'First Name',
        id: 'txtFirstName',
        name: 'firstName',
        placeholder: 'Enter FirstName',
        type: "text",
        value: signup.firstName,
        onChange: handleChange
    };
    const lastNameConfig = {
        displayText: 'Last Name',
        id: 'txtLastName',
        name: 'lastName',
        placeholder: 'Enter LastName',
        type: "text",
        value: signup.lastName,
        onChange: handleChange
    };

    const agreeTermsConfig = {
        displayText: 'I Agree Terms',
        id: 'chkAgreeTerms',
        name: 'agreeTerms',
        type: "checkbox",
        value: '',
        onChange: handleCheck
    }
    const selectBoxConfig = {
        data:countries.data.map(x => {
            return {
                key: x.alpha2Code,
                name: x.name
            }
        }),
    }

    return (
        <SignIn/>
        // <form>
        //     <Textbox config={firstNameConfig} />
        //     <Textbox config={lastNameConfig} />
        //     <Select config={selectBoxConfig} />
        //     <Checkbox config={agreeTermsConfig} />
        //     <button type="submit" class="btn btn-primary">Sign in</button>
        //     {JSON.stringify(signup)}
        // </form>
    )
}

export default Register;