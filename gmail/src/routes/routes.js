
import { lazy } from "react";
const Main = lazy(()=>import("../pages/Main"))
const Email = lazy(()=>import("../component/Email"))
const ViewEmail = lazy(()=>import("../component/ViewEmail"))
const  routes ={
    main:{
        path:"/",
        element : Main
    },
    emails:{
        path:"/emails",
        element:Email

    },
    view:{
        path:"/view",
        element:ViewEmail,
    },
    invalid:{
        path:"/*",
        element:Email
    },
   
}


export {routes};