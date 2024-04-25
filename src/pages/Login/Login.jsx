import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>

            <h1 className="font-semibold text-center py-20 text-4xl">Login Now</h1>

            <form className="flex flex-col gap-5 bg-primary_bg_color mx-3  p-10 md:w-4/6 md:mx-auto md:px-28 md:py-20 lg:px-44 rounded-2xl">
                <div>
                    <h3 className="mb-2 font-medium text-primary_text_color">Email</h3>
                    <input className="h-10 w-full outline-none pl-3 rounded-lg" type="email" name="email" placeholder="Enter Your Email" required />
                </div>
                <div>
                    <h3 className="mb-2 font-medium text-primary_text_color">Password</h3>
                    <input className="h-10 w-full outline-none pl-3 rounded-lg" type="password" name="password" placeholder="Enter Your Password" required />
                </div>
                <button className="btn bg-primary_text_color text-white text-lg">Login</button>
                <div className="flex items-center font-medium mx-auto">
                    <h3>Do not have account?</h3>
                    <Link to="/register">
                        <h3 className=" btn btn-link">Register</h3>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;