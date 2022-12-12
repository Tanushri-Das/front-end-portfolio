import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/BlogPage/Blog";
import HomePage from "../Components/HomePage/HomePage";
import SingleProject from "../Components/SingleProject/SingleProject";
import Main from "../Layouts/Main";
import Projects from '../Components/Projects/Projects'
import MyProjects from "../Components/MyProjects/MyProjects";
import SecondProject from "../SecondProject/SecondProject";
import ThirdProject from "../Components/ThirdProject/ThirdProject";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<HomePage></HomePage>,
               
            },
            {
                path:'/project/01',
                element:<SingleProject></SingleProject>
            },
            {
                path:'/project/02',
                element:<SecondProject></SecondProject>
               
            },
            {
                path:'/project/03',
                element:<ThirdProject></ThirdProject>
               
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])