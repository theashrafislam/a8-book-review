import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="container mx-auto mb-24">
            <div className="flex flex-col md:flex-row justify-around items-center bg-[#1313130D] rounded-2xl py-20 mt-12 mx-4">
                <div className="order-2 md:order-1 lg:flex-none flex flex-col items-center lg:items-start">
                    <h1 className="lg:w-[526px] text-2xl md:text-6xl font-bold text-center lg:text-left" id="banner-title">Books to freshen up your bookshelf</h1>
                    <Link to="/listedBooks"><button className="lg:py-5 py-3 px-4 lg:px-7 bg-[#23BE0A] rounded-xl mt-12 lg:text-xl text-lg text-white font-bold">View The List</button></Link>
                </div>
                <div className="order-1 md:order-2">
                    <img src="https://i.ibb.co/7rS0Bsc/pngwing-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;