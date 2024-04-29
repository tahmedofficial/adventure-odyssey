import { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProviders";

const AllTouristSpots = () => {

    const touristPlaces = useLoaderData();
    const { loading } = useContext(AuthContext);
    const [sortedPlaces, setSortedPlaces] = useState(touristPlaces);

    if (loading) {
        return <span className="loading loading-spinner loading-lg text-primary_text_color mx-auto flex justify-center border mt-20"></span>
    }

    const handleSort = (value) => {
        if (value === "ascending") {
            const coppyPlaces = [...touristPlaces]
            coppyPlaces.sort((cost1, cost2) => cost1.averageCost - cost2.averageCost)
            setSortedPlaces(coppyPlaces);
            console.log(coppyPlaces);
        }
        else {
            const coppyPlaces = [...touristPlaces]
            coppyPlaces.sort((cost1, cost2) => cost2.averageCost - cost1.averageCost)
            setSortedPlaces(coppyPlaces);
            console.log("its Descending");
        }
    }

    return (
        <div className="md:w-4/6 mx-auto px-3 md:px-0">
            <h1 className="font-semibold text-center py-16 text-4xl">Total Places {touristPlaces.length}</h1>

            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn bg-primary_text_color text-white text-lg px-10 m-1">Sort</div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onClick={() => handleSort("ascending")} className="text-primary_text_color font-medium"><a>Ascending</a></li>
                    <li onClick={() => handleSort("descending")} className="text-primary_text_color font-medium"><a>Descending</a></li>
                </ul>
            </div>

            {
                sortedPlaces.map(tourist => <div key={tourist._id}>

                    <div className="card md:grid grid-cols-3 shadow-lg bg-primary_card_color items-center mt-6">
                        <div className="col-span-1 p-5 w-full">
                            <img className="w-full h-64 rounded-xl" src={tourist.photo} alt="image" />
                        </div>
                        <div className="col-span-2 p-5">
                            <h1 className="text-2xl font-medium text-primary_text_color">{tourist.touristsSpot}</h1>
                            <h3 className="text-primary_text_coor text-lg">{tourist.description}</h3>
                            <div className="flex flex-col md:flex-row gap-2 md:gap-6 mt-5">
                                <h3 className="text-primary_text_coor text-lg"><span className="text-lg font-semibold">Average Cost: </span>{tourist.averageCost}</h3>
                                <h3 className="text-primary_text_coor text-lg"><span className="text-lg font-semibold">Travel Time: </span>{tourist.travelTime}</h3>
                            </div>
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