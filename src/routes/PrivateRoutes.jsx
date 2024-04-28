import { useContext } from "react";
import { AuthContext } from "../provider/AuthProviders";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <span className="loading loading-spinner loading-lg text-primary_text_color mx-auto flex justify-center border mt-20"></span>
    }

    if (user) {
        return children
    }

    return (<Navigate to="/login"></Navigate>);
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}