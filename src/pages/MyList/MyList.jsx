import { useContext} from "react";
import { AuthContext } from "../../provider/AuthProviders";
import MyListCard from "../MyListCard/MyListCard";



const MyList = () => {

    const { user, touristPlaces } = useContext(AuthContext);
    if (!user) {
        return <span className="loading loading-spinner loading-lg text-primary_text_color mx-auto flex justify-center border mt-20"></span>
    }

    const myTouristPlaces = touristPlaces.filter(touristPlace => touristPlace.email === user.email);

    return (

        <div className="overflow-x-auto md:w-4/6 mx-auto px-3 md:px-0">
            <h1 className="font-semibold text-center py-16 text-4xl">My Added Places</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Photo</th>
                        <th>Country Name</th>
                        <th>Tourists Spot</th>
                        <th>Location</th>
                        <th>Average Cost</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myTouristPlaces.map((tourist, index) => <MyListCard key={tourist._id} tourist={tourist} index={index}></MyListCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyList;