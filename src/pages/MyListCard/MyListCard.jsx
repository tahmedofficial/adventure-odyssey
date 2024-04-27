import PropTypes from "prop-types";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProviders";
import { Link } from "react-router-dom";

const MyListCard = ({ tourist }) => {

    const { sweetMessage } = useContext(AuthContext);
    const { _id, photo, touristsSpot, description } = tourist;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/travel/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            sweetMessage("Successfully Deleted")
                        }
                    })
            }
        });
    }

    return (
        <div className="card md:grid grid-cols-3 shadow-xl bg-primary_card_color items-center mt-10">
            <div className="col-span-1 p-5">
                <img className="w-full h-64 rounded-xl" src={photo} alt="Movie" />
            </div>
            <div className="col-span-2 p-5">
                <h1 className="text-2xl font-medium text-primary_text_color">{touristsSpot}</h1>
                <h3 className="text-primary_text_color text-lg">{description}</h3>
                <div className="mt-5">
                    <button className="btn rounded-none bg-primary_text_color text-white px-12">View Details</button>
                    <Link to={`/updateTouristPlace/${_id}`}>
                        <button className="btn rounded-none bg-primary_text_color text-white px-12">Update</button>
                    </Link>
                    <button onClick={handleDelete} className="btn rounded-none bg-primary_text_color text-white px-12">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyListCard;

MyListCard.propTypes = {
    tourist: PropTypes.object.isRequired
}