import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProviders";

const UpdateTouristPlace = () => {

    const touristPlace = useLoaderData();
    const { sweetMessage } = useContext(AuthContext);
    const id = touristPlace._id;

    const handleUpdateTouristPlace = (event) => {
        event.preventDefault();
        const form = event.target;
        const photo = form.photo.value;
        const touristsSpot = form.touristsSpot.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totaVisitors = form.totaVisitors.value;
        const data = { photo, touristsSpot, countryName, location, description, averageCost, seasonality, travelTime, totaVisitors }

        fetch(`http://localhost:5000/travel/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    form.reset()
                    sweetMessage("Successfully Updated")
                }
            })
    }

    return (
        <div>
            <h1 className="font-semibold text-center py-16 text-4xl">Update Tourists Spot Info</h1>

            <form onSubmit={handleUpdateTouristPlace} className="flex flex-col gap-5 bg-primary_bg_color mx-3  p-10 md:w-4/6 md:mx-auto md:px-28 md:py-20 lg:px-44 rounded-2xl">
                <div>
                    <h3 className="mb-2 font-medium text-primary_text_color">Photo</h3>
                    <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="photo" defaultValue={touristPlace.photo} required />
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Tourists Spot Name</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="touristsSpot" defaultValue={touristPlace.touristsSpot} required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Country Name</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="countryName" defaultValue={touristPlace.countryName} required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Location</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="location" defaultValue={touristPlace.location} required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Short Description</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="description" defaultValue={touristPlace.description} required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Average Cost</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="averageCost" defaultValue={touristPlace.averageCost} required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Seasonality</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="seasonality" defaultValue={touristPlace.seasonality} required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Travel Time</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="travelTime" defaultValue={touristPlace.travelTime} required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Tota Visitors Per Year</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="totaVisitors" defaultValue={touristPlace.totaVisitors} required />
                    </div>
                </div>
                <button className="btn bg-primary_text_color text-white text-lg mt-8">Update</button>
            </form>

        </div>
    );
};

export default UpdateTouristPlace;