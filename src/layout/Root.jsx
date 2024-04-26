import { Outlet } from "react-router-dom";
import Navbar from "../pages/Navbar/Navbar";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../pages/Footer/Footer";

const Root = () => {
    return (
        <div className="font-raleway">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;