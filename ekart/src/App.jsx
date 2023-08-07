import Header from "./Components/Header";

export const App = () => {
    //logical section

    //rendering section
    const companyName ="Optum"
    return (
        <div class="container-fluid">
           <Header appName={companyName}/>
        </div>
    );
}


