import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import france from "../../assets/images/france.jpg";
import spain from "../../assets/images/spain.jfif";
import italy from "../../assets/images/colosseum.jpg";
import { Fade } from 'react-awesome-reveal';

const Banner = () => {

    return (
        <div className="carousel w-full py-10 bg-primary_bg_color">

            {/* Slider-1 */}
            <div id="slide1" className="carousel-item relative w-full group">
                <div className="grid md:grid-cols-3 w-full md:w-5/6 mx-auto items-center">
                    <div className="md:col-span-2 px-4 md:flex flex-col justify-center">
                        <Fade cascade damping={0.1}>
                            <h1 className="text-4xl lg:text-5xl font-semibold text-primary_text_color">
                                Eiffel Tower, Paris
                            </h1>
                            <h3 className="py-5 text-lg my-4 text-primary_text_color">
                                Embark on a journey like no other as you discover the captivating allure of Paris, a land brimming with diverse landscapes, vibrant cultures, and immersive experiences. Nestled in the heart of the continent, Spin beckons travelers with its blend of ancient traditions and modern marvels.
                            </h3>
                            <div>
                                <button className="btn text-white bg-primary_text_color rounded-none px-10">Visite</button>
                            </div>
                        </Fade>
                    </div>
                    <div className="md:col-span-1 p-4 pt-10">
                        <img src={france} className="h-96 w-full rounded-xl" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle invisible group-hover:visible bg-primary_text_color border-0 text-lg text-white"><FaChevronLeft /></a>
                    <a href="#slide2" className="btn btn-circle invisible group-hover:visible bg-primary_text_color border-0 text-lg text-white"><FaChevronRight /></a>
                </div>
            </div>

            {/* Slider-2 */}
            <div id="slide2" className="carousel-item relative w-full group">
                <div className="grid md:grid-cols-3 w-full md:w-5/6 mx-auto items-center">
                    <div className="md:col-span-2 px-4 md:flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-5xl font-semibold text-primary_text_color">
                            Sagrada Família, Barcelona, Spain
                        </h1>
                        <h3 className="py-5 text-lg my-4 text-primary_text_color">
                            Prepare to be captivated by the allure of Barcelona, a country steeped in history, adorned with breathtaking landscapes, and enriched by a vibrant tapestry of culture. Embark on a journey of discovery as you traverse this gem of Southeast Asia, where ancient traditions blend harmoniously with modern-day marvels.
                        </h3>
                        <div>
                            <button className="btn text-white bg-primary_text_color rounded-none px-10">Visite</button>
                        </div>                    </div>
                    <div className="md:col-span-1 p-4 pt-10">
                        <img src={spain} className="h-96 w-full rounded-xl" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle invisible group-hover:visible bg-primary_text_color border-0 text-lg text-white"><FaChevronLeft /></a>
                    <a href="#slide3" className="btn btn-circle invisible group-hover:visible bg-primary_text_color border-0 text-lg text-white"><FaChevronRight /></a>
                </div>
            </div>

            {/* Slider-3 */}
            <div id="slide3" className="carousel-item relative w-full group">
                <div className="grid md:grid-cols-3 w-full md:w-5/6 mx-auto items-center">
                    <div className="md:col-span-2 px-4 md:flex flex-col justify-center">
                        <h1 className="text-4xl lg:text-5xl font-semibold text-primary_text_color">
                            The ancient world in Rome, the Colosseum.
                        </h1>
                        <h3 className="py-4 text-lg my-4 text-primary_text_color">
                            Welcome to Rome, where paradise awaits at every turn. With its vast archipelago comprising over 17,000 islands, Indonesia beckons travelers with its stunning natural beauty, rich cultural tapestry, and endless adventures.
                        </h3>
                        <div>
                            <button className="btn text-white bg-primary_text_color rounded-none px-10">Visite</button>
                        </div>
                    </div>
                    <div className="md:col-span-1 p-4">
                        <img src={italy} className="h-96 w-full rounded-xl" />
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle invisible group-hover:visible bg-primary_text_color border-0 text-lg text-white"><FaChevronLeft /></a>
                    <a href="#slide1" className="btn btn-circle invisible group-hover:visible bg-primary_text_color border-0 text-lg text-white"><FaChevronRight /></a>
                </div>
            </div>

        </div>
    );
};

export default Banner;