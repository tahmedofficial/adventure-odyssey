import { Link } from "react-router-dom";
import erroeImg from "../../assets/images/404.jpg";


const ErrorPage = () => {
    return (
        <div>
            <div className="mt-28">
                <img className="mx-auto" src={erroeImg} alt="" />
            </div>
            <div className="text-center">
                <Link to="/">
                    <button className="btn bg-primary_text_color text-lg px-10 text-white rounded-none">Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;