import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProviders";



const Navbar = () => {

    const { user } = useContext(AuthContext);

    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-primary_text_color font-medium px-3 pb-2 border-primary_text_color" : "font-medium"}>Home</NavLink></li>
        <li><NavLink to="/addTouristsSpot" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-primary_text_color font-medium px-3 pb-2 border-primary_text_color" : "font-medium"}>Add Tourists Spot</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-primary_text_color font-medium px-3 pb-2 border-primary_text_color" : "font-medium"}>Location</NavLink></li>
    </>

    return (
        <div className="pb-5 pt-7 bg-third_color px-2">
            <div className="navbar md:w-5/6 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-primary_text_color lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="flex flex-col bg-white text-primary_text_color gap-3 dropdown-content mt-3 z-[1] p-6 shadow rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <button className="font-bold text-3xl text-primary_text_color">Odyssey</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 text-primary_text_color text-lg">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className="btn btn-circle">
                        <img className="w-full h-full rounded-full" src={ user?.photoURL} alt="Profile" />
                    </div>
                    <Link to="/login">
                        <button className="btn border-0 text-white text-lg bg-primary_text_color">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;