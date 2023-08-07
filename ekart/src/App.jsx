import Header from "./Components/Header";
import Textbox from "./Components/Textbox";

export const App = () => {
    //logical section

    //rendering section
    let companyDetails ={
        id:1,
        name:"Optum",
        location:'Hyderabad'
    }
    const mainPage="Electronics";
    const handleChange =(data)=>{
        console.log(data);
    };
    const firstName = {
        displayText:'First Name',
        id:'txtFirstName',
        name:'firstName',
        placeholder:'Enter FirstName',
        type:"text",
        value:"",
        onChange:handleChange
    }
    const lastName = {
        displayText:'Last Name',
        id:'txtLastName',
        name:'lastName',
        placeholder:'Enter Last Name',
        type:"text",
        value:"",
        onChange:handleChange
    }
    return (
        <div class="container-fluid">
           <Header appName={companyDetails} 
           defaultPage={mainPage}/>
           <div class="row">
             <Textbox config ={firstName}/>
             <Textbox config ={lastName}/>
           </div>
           
        </div>
    );
}


