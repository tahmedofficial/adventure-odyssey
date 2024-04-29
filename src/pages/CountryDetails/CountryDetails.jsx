import { useContext } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProviders";
import { Helmet } from "react-helmet";

const CountryDetails = () => {

    const { name } = useParams();
    const { touristPlaces } = useContext(AuthContext);
    const countryes = touristPlaces.filter(touristPlace => touristPlace.countryName === name)

    return (
        <div className="md:w-4/6 mx-auto">
            <Helmet>
                <title>Country</title>
            </Helmet>
            <h1 className="font-semibold text-primary_text_color text-center pt-12 pb-16 text-4xl">{name}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    countryes.map(country => <div key={country._id}>
                        <div className="card shadow-lg h-full bg-primary_card_color items-center mt-8">
                            <div className="py-5 w-full px-5">
                                <img className="w-full h-64 rounded-xl" src={country.photo} alt="image" />
                            </div>
                            <div className="p-5">
                                <h1 className="text-3xl font-semibold text-primary_text_color">{country.countryName}</h1>
                                <h3 className="text-primary_text_color mt-2 text-lg"><span className="font-semibold">Description: </span>{country.description}</h3>
                                <h3 className="text-primary_text_color mt-2 text-lg"><span className="font-semibold">Tourists Spot: </span>{country.touristsSpot}</h3>
                                <h3 className="text-primary_text_color mt-2 text-lg"><span className="font-semibold">location: </span>{country.location}</h3>
                                <h3 className="text-primary_text_color mt-2 text-lg"><span className="font-semibold">Average Cost: </span>{country.averageCost}</h3>
                                <h3 className="text-primary_text_color mt-2 text-lg"><span className="font-semibold">Seasonality: </span>{country.seasonality}</h3>
                                <Link to={`/viewDetails/${country._id}`}>
                                    <button className="btn rounded-none bg-primary_text_color mt-8 text-white px-12">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default CountryDetails;