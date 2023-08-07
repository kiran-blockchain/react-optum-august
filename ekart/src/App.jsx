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
    return (
        <div class="container-fluid">
           <Header appName={companyDetails} 
           defaultPage={mainPage}/>

           <div class="row">
             <Textbox/>
           </div>
        </div>
    );
}


