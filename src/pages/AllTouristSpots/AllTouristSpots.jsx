import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProviders";

const AllTouristSpots = () => {

    const touristPlaces = useLoaderData();
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <span className="loading loading-spinner loading-lg text-primary_text_color mx-auto flex justify-center border mt-20"></span>
    }

    return (
        <div className="md:w-4/6 mx-auto px-3 md:px-0">
            <h1 className="font-semibold text-center py-16 text-4xl">Total Places {touristPlaces.length}</h1>

            {
                touristPlaces.map(tourist => <div key={tourist._id}>

                    <div className="card md:grid grid-cols-3 shadow-lg bg-primary_card_color items-center mt-6">
                        <div className="col-span-1 p-5 w-full">
                            <img className="w-full h-64 rounded-xl" src={tourist.photo} alt="image" />
                        </div>
                        <div className="col-span-2 p-5">
                            <h1 className="text-2xl font-medium text-primary_text_color">{tourist.touristsSpot}</h1>
                            <h3 className="text-primary_text_color text-lg">{tourist.description}</h3>
                            <div className="mt-5">
                                <Link to={`/viewDetails/${tourist._id}`}>
                                    <button className="btn rounded-none bg-primary_text_color text-white px-12">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default AllTouristSpots;