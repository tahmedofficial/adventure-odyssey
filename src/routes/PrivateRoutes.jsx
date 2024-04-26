import { useContext } from "react";
import { AuthContext } from "../provider/AuthProviders";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div>loading</div>
    }

    if (user) {
        return children
    }

    return (<Navigate to={"/register"}></Navigate>);
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}