import React, { lazy } from "react";


const Features = lazy(()=> import ("./Components/Features/Features.js"));
const Pricing = lazy(()=> import ("./Components/Pricing/Pricing.js"));
const Resources= lazy(()=> import ("./Components/Resources/Resources.js"));
const Login = lazy(()=> import ("./Components/Login/Login.js"));
const SignUp = lazy(()=> import ("./Components/SignUp/SignUp.js"));


const AppRoutes = [
    {
        path: "/",
        element: <Features/>
    },
    {
        path: "/pricing",
        element: <Pricing/>
    },
    {
        path: "/resources",
        element: <Resources/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/signup",
        element: <SignUp/>
    },
    {
        path: "*",
        element: <div>Not Found</div>
    }
];

export default AppRoutes