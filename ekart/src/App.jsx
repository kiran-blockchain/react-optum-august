import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Textbox from "./Components/Textbox";
import Products from "./Pages/Products";
import Register from "./Pages/Register";
import Login from "./Pages/Login";

export const App = () => {
    //logical section

    //rendering section
    let companyDetails = {
        id: 1,
        name: "Optum",
        location: 'Hyderabad'
    }
    const mainPage = "Electronics";


    return (
        <div class="container-fluid">
            <Header appName={companyDetails}
                defaultPage={mainPage} />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/products" element={<Products />} />
            </Routes>


        </div>
    );
}


