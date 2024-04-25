import { Link, NavLink } from "react-router-dom";



const Navbar = () => {


    const navItems = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-slate-800 font-medium px-3 pb-2 border-slate-800" : "font-medium"}>Home</NavLink></li>
        <li><NavLink to="/login" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-slate-800 font-medium px-3 pb-2 border-slate-800" : "font-medium"}>Update Profile</NavLink></li>
        <li><NavLink to="/register" className={({ isActive }) => isActive ? "border-b-2 duration-300 text-slate-800 font-medium px-3 pb-2 border-slate-800" : "font-medium"}>Location</NavLink></li>
    </>





    return (
        <div className="pb-5 pt-7 bg-secondry_color">
            <div className="navbar md:w-5/6 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-slate-800 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="flex flex-col text-slate-800 bg-secondry_color gap-3 dropdown-content mt-3 z-[1] p-6 shadow rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <button className=" btn hover:bg-secondry_color duration-500 rounded-full px-8 bg-primary_color text-white font-semibold border-0 text-lg">Odyssey</button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-6 text-slate-800 text-lg">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <div className="btn btn-circle tooltip">
                        <img className="w-full h-full rounded-full bg-cyan-500" src="" alt="Profile" />
                    </div>
                    <Link to="/register">
                        <button className="btn bg-primary_color hover:bg-secondry_color duration-500 hover:text-black border-0 text-lg text-white">Log In</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;