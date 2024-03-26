import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="container mx-auto mb-24">
            <div className="flex justify-around items-center bg-[#1313130D] rounded-2xl py-20 mt-12">
                <div>
                    <h1 className="w-[526px] text-6xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to="/listedBooks"><button className="py-5 px-7 bg-[#23BE0A] rounded-xl mt-12 text-xl text-white font-bold">View The List</button></Link>
                </div>
                <div>
                    <img src="https://i.ibb.co/7rS0Bsc/pngwing-1.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;