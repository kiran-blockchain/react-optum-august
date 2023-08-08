import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Textbox from "./Components/Textbox";
import Products from "./Pages/Products";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { useState } from "react";
import Protected from "./Components/Protected";
import LoginContext from "./Context/LoginProvider";

export const App = () => {
    const [isSignedIn, setSignedIn] = useState(true);

    //rendering section
    let companyDetails = {
        id: 1,
        name: "Optum",
        location: 'Hyderabad'
    }
    const mainPage = "Electronics";

    const signin = () => {
        if (localStorage.getItem('token') != '') {
            setSignedIn(true);
        } else {
            setSignedIn(false);
        }
    }
    const logout = ()=>{
        localStorage.clear();
        setSignedIn(false);
    }


    return (
        <LoginContext.Provider value={{isLoggedIn:isSignedIn,logout:logout,login:signin}}>
            <div class="container-fluid">
                <Header appName={companyDetails}
                    defaultPage={mainPage} />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    <Route path="/products" element={<Protected isSignedIn={isSignedIn}>
                        <Products />
                    </Protected>}>
                    </Route>
                </Routes>
            </div>
        </LoginContext.Provider>
    );
}


