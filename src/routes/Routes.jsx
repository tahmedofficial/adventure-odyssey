import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import AllTouristSpots from "../pages/AllTouristSpots/AllTouristSpots";


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
                path: "/addTouristsSpot",
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: "/allTouristSpot",
                element: <AllTouristSpots></AllTouristSpots>,
                loader: () => fetch("http://localhost:5000/travel")
            }
        ]
    },
]);

export default router;