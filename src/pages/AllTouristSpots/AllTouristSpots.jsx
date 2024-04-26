import { useLoaderData } from "react-router-dom";

const AllTouristSpots = () => {

    const touristPlaces = useLoaderData();

    return (
        <div className="md:w-4/6 mx-auto px-3 md:px-0">
            {
                touristPlaces.map(tourist => <div key={tourist._id}>

                    <div className="card md:grid grid-cols-3 shadow-xl bg-primary_card_color items-center mt-10">
                        <div className="col-span-1 p-5">
                            <img className="w-full h-64 rounded-xl" src={tourist.photo} alt="Movie" />
                        </div>
                        <div className="col-span-2 p-5">
                            <h1 className="text-2xl font-medium text-primary_text_color">{tourist.touristsSpot}</h1>
                            <h3 className="text-primary_text_color text-lg">{tourist.description}</h3>
                            <div className="mt-5">
                                <button className="btn rounded-none bg-primary_text_color text-white px-12">View Details</button>
                            </div>
                        </div>
                    </div>

                </div>)
            }
        </div>
    );
};

export default AllTouristSpots;