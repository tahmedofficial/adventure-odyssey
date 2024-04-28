import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProviders";


const AddTouristsSpot = () => {

    const { user, sweetMessage, control, setControl } = useContext(AuthContext);


    const handleAddTouristsSpot = (e) => {
        e.preventDefault()
        const form = e.target;
        const photo = form.photo.value;
        const touristsSpot = form.touristsSpot.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totaVisitors = form.totaVisitors.value;
        const email = form.email.value;
        const name = form.name.value;
        const data = { photo, touristsSpot, countryName, location, description, averageCost, seasonality, travelTime, totaVisitors, email, name }
        console.log(data);

        fetch("https://adventure-odyssey-server.vercel.app/travel", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    form.reset()
                    sweetMessage("Successfully added to the server")
                    setControl(!control)
                }
            })
    }

    return (
        <div>
            <h1 className="font-semibold text-center py-16 text-4xl">Add Tourists Spot Info</h1>

            <form onSubmit={handleAddTouristsSpot} className="flex flex-col gap-5 bg-primary_bg_color mx-3  p-10 md:w-4/6 md:mx-auto md:px-28 md:py-20 lg:px-44 rounded-2xl">
                <div>
                    <h3 className="mb-2 font-medium text-primary_text_color">Photo</h3>
                    <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="photo" placeholder="Enter Photo Url" required />
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Tourists Spot Name</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="touristsSpot" placeholder="Enter Tourists Spot Name" required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Country Name</h3>
                        <select className="h-10 w-full outline-none pl-3 rounded-lg" name="countryName" required>
                            <option>France</option>
                            <option>Italy</option>
                            <option>Spain</option>
                            <option>England</option>
                            <option>Netherlands</option>
                            <option>Switzerland</option>
                        </select>
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Location</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="location" placeholder="Enter Location" required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Short Description</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="description" placeholder="Enter Short Description" required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Average Cost</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="averageCost" placeholder="Enter Average Cost" required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Seasonality</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="seasonality" placeholder="Like Summer or Winter" required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Travel Time</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="travelTime" placeholder="Enter Travel Time" required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Tota Visitors Per Year</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="totaVisitors" placeholder="Enter Tota Visitors Per Year" required />
                    </div>
                </div>
                <div className="lg:flex gap-5">
                    <div className="w-full">
                        <h3 className="mb-2 font-medium text-primary_text_color">Your Email</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="email" name="email" defaultValue={user.email} required />
                    </div>
                    <div className="w-full mt-5 lg:mt-0">
                        <h3 className="mb-2 font-medium text-primary_text_color">Your Name</h3>
                        <input className="h-10 w-full outline-none pl-3 rounded-lg" type="text" name="name" defaultValue={user.displayName} required />
                    </div>
                </div>
                <button className="btn bg-primary_text_color text-white text-lg mt-8">Add</button>
            </form>

        </div>
    );
};

export default AddTouristsSpot;