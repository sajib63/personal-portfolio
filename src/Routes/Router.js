import { createBrowserRouter } from "react-router-dom";
import Content from "../Components/Content";
import Home from "../Components/Home";
import Projects from "../Components/Projects";
import Main from "../Layout/Main";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<Content></Content>
            },
            {
                path:'/project',
                element:<Projects></Projects>
            }
        ]
    }
])