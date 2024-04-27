import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProviders";
import profileImg from "../../assets/images/profileImg.webp";



const Navbar = () => {

    const { user, logoutUser, toastMessage } = useContext(AuthContext);

    const [theme, setTheme] = useState("light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme)
    }, [theme])

    const handleTheme = (event) => {

        if (event.target.checked) {
            setTheme("night")
        }
        else {
            setTheme("light")
        }
    }

    const handleLogout = () => {
        logoutUser()
            .then(() => {
                toastMessage("Successfully Logout")
            })
            .catch(erroe => {
                console.log(erroe);
            })

    }

    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-primary_text_color font-medium px-3 pb-2 border-primary_text_color" : "font-medium"}>Home</NavLink></li>
        <li><NavLink to="/allTouristSpot" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-primary_text_color font-medium px-3 pb-2 border-primary_text_color" : "font-medium"}>All Tourist Spot</NavLink></li>
        <li><NavLink to="/addTouristsSpot" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-primary_text_color font-medium px-3 pb-2 border-primary_text_color" : "font-medium"}>Add Tourists Spot</NavLink></li>
        <li><NavLink to="/myList" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-primary_text_color font-medium px-3 pb-2 border-primary_text_color" : "font-medium"}>My List</NavLink></li>
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
                    <div>
                        <label className="cursor-pointer grid place-items-center">
                            <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                            <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip" data-tip={user?.displayName}>
                            <img className="w-full h-full rounded-full" src={user?.photoURL || profileImg} alt="Profile" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                user ? <button onClick={handleLogout} className="btn btn-sm border-0 text-white text-lg bg-primary_text_color">Logout</button>
                                    : <Link to="/login">
                                        <button className="btn btn-sm border-0 w-full text-white text-lg bg-primary_text_color">Login</button>
                                    </Link>
                            }
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;