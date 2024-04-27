import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { Bounce, toast } from "react-toastify";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);


const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [touristPlaces, setTouristPlaces] = useState([]);
    const [countryes, setCountryse] = useState([]);

    const toastMessage = (message) => toast.success(message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
    });

    const errorMessage = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const sweetMessage = (message) => {
        Swal.fire({
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500
        });
    }


    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = () => {

    }
    const loginWithFacebook = () => {

    }

    const logoutUser = () => {
        setLoading(true);
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    useEffect(() => {
        fetch("https://adventure-odyssey-server.vercel.app/travel")
            .then(res => res.json())
            .then(data => {
                setTouristPlaces(data);
            })
    }, [])

    useEffect(() => {
        fetch("https://adventure-odyssey-server.vercel.app/country")
            .then(res => res.json())
            .then(data => {
                setCountryse(data);
            })
    }, [])

    const authInfo = {
        user,
        loading,
        touristPlaces,
        countryes,
        setUser,
        toastMessage,
        sweetMessage,
        errorMessage,
        registerUser,
        loginUser,
        loginWithGoogle,
        loginWithFacebook,
        logoutUser,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}