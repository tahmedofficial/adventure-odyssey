import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import TouristSpots from "../TouristSpots/TouristSpots";
import Countryes from "../Countryes/Countryes";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h3 className="text-4xl md:text-5xl font-semibold text-primary_text_color pt-20 text-center">Tourists Spots</h3>
            <TouristSpots></TouristSpots>
            <div className="text-center mt-12">
                <Link to="/allTouristSpot">
                    <button className="btn rounded-none text-lg bg-primary_text_color text-white px-12">See All Tourist Spot</button>
                </Link>
            </div>
            <Countryes></Countryes>
        </div>
    );
};

export default Home;