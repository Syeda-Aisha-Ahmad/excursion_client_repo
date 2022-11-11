import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Home/Register/Register";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails/ServiceDetails";
import LogIn from "../../Pages/LogIn/LogIn";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SeeAllServices from "../../Pages/SeeAllServices/SeeAllServices";
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
                element: <Services />
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/allservices/${params.id}`)
            },
            {
                path: '/SeeAllServices',
                element: <SeeAllServices></SeeAllServices>
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