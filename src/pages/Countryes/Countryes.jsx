import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProviders";

const Countryes = () => {

    const { countryes } = useContext(AuthContext);

    return (
        <div className="md:w-4/6 mx-auto px-3 md:px-0">
            <h1 className="font-semibold text-center pt-20 text-4xl">Countries Section</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    countryes.map(country => <div key={country._id}>

                        <div className="card shadow-lg h-full bg-primary_card_color items-center mt-8">
                            <div className="py-5">
                                <img className="w-full h-64 rounded-xl" src={country.photo} alt="image" />
                            </div>
                            <div className="p-5">
                                <h1 className="text-3xl font-semibold text-primary_text_color">{country.countryName}</h1>
                                <h3 className="text-primary_text_color mt-2 text-lg">{country.description}</h3>
                                <div className="mt-5">
                                    <button className="btn rounded-none bg-primary_text_color text-white px-12">View Details</button>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Countryes;