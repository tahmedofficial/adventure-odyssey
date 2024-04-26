import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProviders";
import { updateProfile } from "firebase/auth";


const Register = () => {

    const { registerUser, toastMessage, errorMessage } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        registerUser(email, password)
            .then(data => {
                const user = data.user;
                updateProfile(user, {
                    displayName: name,
                    photoURL: photo,
                })
                    .then(() => {
                        toastMessage("Successfully Register")
                        navigate("/")
                    })
                    .catch(error => {
                        console.log(error);
                        errorMessage("Something Wrong try Again")
                    })
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(errorMessage);
            })
    }


    return (
        <div>

            <h1 className="font-semibold text-center text-primary_text_color py-20 text-4xl">Register Now</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-5 bg-primary_bg_color mx-3  p-10 md:w-4/6 md:mx-auto md:px-28 md:py-20 lg:px-44 rounded-2xl">
                <div>
                    <h3 className="mb-2 font-medium text-primary_text_color">Name</h3>
                    <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="name" placeholder="Enter Your Name" required />
                </div>
                <div>
                    <h3 className="mb-2 font-medium text-primary_text_color">Email</h3>
                    <input className="h-10 w-full outline-none pl-3 rounded-lg" type="email" name="email" placeholder="Enter Your Email" required />
                </div>
                <div>
                    <h3 className="mb-2 font-medium text-primary_text_color">Photo</h3>
                    <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="photo" placeholder="Enter Your Photo Url" required />
                </div>
                <div>
                    <h3 className="mb-2 font-medium text-primary_text_color">Password</h3>
                    <input className="h-10 w-full outline-none pl-3 rounded-lg" type="password" name="password" placeholder="Enter Your Password" required />
                </div>
                <button className="btn bg-primary_text_color text-white text-lg">Register</button>
                <div className="flex items-center font-medium mx-auto">
                    <h3>Already Register</h3>
                    <Link to="/login">
                        <h3 className=" btn btn-link">Login</h3>
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Register;