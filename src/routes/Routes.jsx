import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristSpots from "../pages/AllTouristSpots/AllTouristSpots";
import MyList from "../pages/MyList/MyList";
import PrivateRoutes from "../routes/PrivateRoutes";
import UpdateTouristPlace from "../pages/UpdateTouristPlace/UpdateTouristPlace";
import ViewDetails from "../pages/ViewDetails/ViewDetails";
import CountryDetails from "../pages/CountryDetails/CountryDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/allTouristSpot",
                element: <AllTouristSpots></AllTouristSpots>,
                loader: () => fetch("https://adventure-odyssey-server.vercel.app/travel")
            },
            {
                path: "/viewDetails/:id",
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://adventure-odyssey-server.vercel.app/travel/${params.id}`)
            },
            {
                path: "/addTouristsSpot",
                element: <PrivateRoutes><AddTouristsSpot></AddTouristsSpot></PrivateRoutes>
            },
            {
                path: "/myList",
                element: <PrivateRoutes><MyList></MyList></PrivateRoutes>
            },
            {
                path: "/updateTouristPlace/:id",
                element: <UpdateTouristPlace></UpdateTouristPlace>,
                loader: ({ params }) => fetch(`https://adventure-odyssey-server.vercel.app/travel/${params.id}`)
            },
            {
                path: "/countryDetails/:name",
                element: <CountryDetails></CountryDetails>
            }
        ]
    },
]);

export default router;