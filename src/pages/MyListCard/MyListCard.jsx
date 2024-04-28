import PropTypes from "prop-types";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProviders";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";

const MyListCard = ({ tourist, index }) => {

    const { sweetMessage, control, setControl } = useContext(AuthContext);
    const { _id, photo, touristsSpot, countryName, location, averageCost } = tourist;

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
                fetch(`https://adventure-odyssey-server.vercel.app/travel/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            sweetMessage("Successfully Deleted")
                            setControl(!control)
                        }
                    })
            }
        });
    }

    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={photo} alt="Photo" />
                    </div>
                </div>
            </td>
            <td>{countryName}</td>
            <td>{touristsSpot}</td>
            <td>{location}</td>
            <td>{averageCost}</td>
            <td className="flex flex-col gap-2">
                <Link to={`/updateTouristPlace/${_id}`}>
                    <button className="p-2 rounded-lg hover:bg-slate-400 duration-300 bg-primary_text_color text-lg text-white"><MdEdit /></button>
                </Link>
                <div>
                    <button onClick={handleDelete} className="p-2 rounded-lg hover:bg-slate-400 duration-300 bg-red-500 text-lg text-white"><MdDelete /></button>
                </div>
            </td>
        </tr>
    );
};

export default MyListCard;

MyListCard.propTypes = {
    tourist: PropTypes.object.isRequired,
    index: PropTypes.number
}