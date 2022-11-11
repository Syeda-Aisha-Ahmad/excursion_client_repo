import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Home/Register/Register";
import Service from "../../Pages/Home/Services/Service/Service";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails/ServiceDetails";
import LogIn from "../../Pages/LogIn/LogIn";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Services from "../../Pages/Services/Services";
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
                element: <Services />,
                // loader: () => fetch('http://localhost:5000/allservices')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/reviews',
                element: <MyReviews></MyReviews>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])