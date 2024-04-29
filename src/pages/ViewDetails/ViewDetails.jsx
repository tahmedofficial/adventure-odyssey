import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProviders";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { Helmet } from "react-helmet";
import { Fade } from "react-awesome-reveal";


const ViewDetails = () => {

    const touristPlace = useLoaderData();

    const { photo, touristsSpot, countryName, location, description, averageCost, seasonality, travelTime, totaVisitors } = touristPlace;
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg text-primary_text_color mx-auto flex justify-center border mt-20"></span>
    }

    return (
        <div>
            <Helmet>
                <title>Details Information</title>
            </Helmet>
            <h1 className="font-semibold text-primary_text_color text-center pt-12 pb-16 text-4xl">Details Information </h1>

            <div className="md:grid grid-cols-3 gap-8 md:w-5/6 md:mx-auto p-4 mx-3 rounded-xl shadow-lg bg-primary_card_color md:p-5">

                <div className="col-span-1">
                    <img className="lg:h-96 rounded-xl" src={photo} alt="" />
                </div>
                <div className="col-span-2">
                    <Fade cascade damping={0.1}>
                        <h3 className="text-primary_text_color text-3xl font-semibold mt-6 md:mt-0"><span className="font-semibold">Country:</span> {countryName}</h3>
                        <h3 className="text-primary_text_color text-lg mt-3"><span className="font-semibold">Description:</span> {description}</h3>
                        <div className="flex flex-col lg:flex-row gap-5 mt-3">
                            <div className="rounded-full px-5 bg-primary_text_color text-white text-lg flex items-center gap-3 h-9">
                                <h3 className="font-semibold flex items-center">
                                    <FaLocationDot />
                                    <span>Location:</span>
                                </h3>
                                <h3>
                                    {location}
                                </h3>
                            </div>
                            <div className="rounded-full px-5 bg-primary_text_color text-white text-lg flex items-center gap-3 h-9">
                                <h3 className="font-semibold flex items-center">
                                    <HiMiniCurrencyDollar />
                                    <span>Average Cost:</span>
                                </h3>
                                <h3>
                                    {averageCost}
                                </h3>
                            </div>
                        </div>
                        <h3 className="text-primary_text_color text-lg mt-3"><span className="font-semibold">Tourists Spot:</span> {touristsSpot}</h3>
                        <h3 className="text-primary_text_color text-lg mt-2"><span className="font-semibold">Seasonality:</span> {seasonality}</h3>
                        <h3 className="text-primary_text_color text-lg my-2"><span className="font-semibold">TravelTime:</span> {travelTime}</h3>
                        <h3 className="text-primary_text_color text-lg"><span className="font-semibold">Tota Visitors Per Year:</span> {totaVisitors}</h3>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;