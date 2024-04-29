import travelImg from "../../assets/images/europeTravel.jpg";
import { FaWifi } from "react-icons/fa";
import { GiKitchenScale } from "react-icons/gi";
import { LiaShowerSolid } from "react-icons/lia";
import { MdLocalLaundryService } from "react-icons/md";
import { PiCoffeeBold, PiLockersBold } from "react-icons/pi";
import { TbAirConditioning, TbIroning3 } from "react-icons/tb";


const About = () => {

    return (
        <div className="md:w-5/6 mx-auto">
            <h1 className="font-semibold text-center pt-24 pb-10 text-primary_text_color text-4xl">About Us</h1>

            <div className="lg:grid grid-cols-2 px-2 gap-12">
                <div className="col-span-1">
                    <img className="rounded-xl" src={travelImg} alt="" />
                    <h1 className="text-4xl md:text-5xl mt-6">The most recommended vacation rental</h1>
                    <h3 className="text-lg mt-4">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</h3>
                </div>

                <div className="col-span-1 mt-14 lg:mt-0">
                    <h1 className="text-4xl text-center md:text-5xl font-medium">What we offer</h1>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-10 lg:mt-16">
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="btn btn-lg btn-circle text-5xl h-20 w-20 bg-primary_text_color text-white">
                                <PiCoffeeBold />
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium">Tea Coffee</h1>
                                <h3>
                                    A small river named Duden flows by their place and supplies it with the necessary
                                </h3>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="btn btn-lg btn-circle text-5xl h-20 w-20 bg-primary_text_color text-white">
                                <LiaShowerSolid />
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium">Hot Showers</h1>
                                <h3>
                                    A small river named Duden flows by their place and supplies it with the necessary
                                </h3>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="btn btn-lg btn-circle text-5xl h-20 w-20 bg-primary_text_color text-white">
                                <MdLocalLaundryService />
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium">Laundry</h1>
                                <h3>
                                    A small river named Duden flows by their place and supplies it with the necessary
                                </h3>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="btn btn-lg btn-circle text-5xl h-20 w-20 bg-primary_text_color text-white">
                                <TbAirConditioning />
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium">Air Conditioning</h1>
                                <h3>
                                    A small river named Duden flows by their place and supplies it with the necessary
                                </h3>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="btn btn-lg btn-circle text-5xl h-20 w-20 bg-primary_text_color text-white">
                                <FaWifi />
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium">Free Wifi</h1>
                                <h3>
                                    A small river named Duden flows by their place and supplies it with the necessary
                                </h3>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="btn btn-lg btn-circle text-5xl h-20 w-20 bg-primary_text_color text-white">
                                <GiKitchenScale />
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium">Kitchen</h1>
                                <h3>
                                    A small river named Duden flows by their place and supplies it with the necessary
                                </h3>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="btn btn-lg btn-circle text-5xl h-20 w-20 bg-primary_text_color text-white">
                                <TbIroning3 />
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium">Ironing</h1>
                                <h3>
                                    A small river named Duden flows by their place and supplies it with the necessary
                                </h3>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <div className="btn btn-lg btn-circle text-5xl h-20 w-20 bg-primary_text_color text-white">
                                <PiLockersBold />
                            </div>
                            <div>
                                <h1 className="text-2xl font-medium">Lockers</h1>
                                <h3>
                                    A small river named Duden flows by their place and supplies it with the necessary
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;