import { createContext, useState } from "react";

const LoginContext = createContext({isLoggedIn:false,login:()=>{},logout:()=>{}});

export default LoginContext;