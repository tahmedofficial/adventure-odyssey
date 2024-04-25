


const Register = () => {


    return (
        <div>
            <form className="flex flex-col gap-4">
                <input className="bg-gray-200 h-10 outline-none pl-3 rounded-lg" type="text" name="name" placeholder="Enter Your Name" />
                <input type="email" name="email" placeholder="Enter Your Email" />
                <input type="text" name="photo" placeholder="Enter Your Photo Url" />
                <input type="password" name="password" placeholder="Enter Your Password" />
            </form>
        </div>
    );
};

export default Register;