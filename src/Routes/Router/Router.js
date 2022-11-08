import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Service from "../../Pages/Home/Services/Service/Service";
import Main from "../Main/Main";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Service></Service>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])