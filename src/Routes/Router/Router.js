import { createBrowserRouter } from "react-router-dom";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Details from "../../Pages/Details.js/Details";
import Home from "../../Pages/Home/Home";
import Register from "../../Pages/Home/Register/Register";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails/ServiceDetails";
import LogIn from "../../Pages/LogIn/LogIn";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import SeeAllServices from "../../Pages/SeeAllServices/SeeAllServices";
import Main from "../Main/Main";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";

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
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://assignment-server-11-nu.vercel.app/allservices/${params.id}`)
            },
            {
                path: '/servicesDetails/:id',
                element: <Details></Details>,
                loader: ({ params }) => fetch(`https://assignment-server-11-nu.vercel.app/allservices/${params.id}`)
            },
            {
                path: '/services',
                element: <SeeAllServices></SeeAllServices>
            },
            {
                path: '/addservice',
                element: <AddService></AddService>
            },
            {
                path: '/blog',
                element: <PrivateRoutes><Blog></Blog></PrivateRoutes>
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