import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const AboutUs = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>

            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 my-5 rounded-3xl mx-4 lg:mx-0">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">About Book Vibe</h1>
                    <p className="text-lg text-gray-800 leading-relaxed mb-8">
                        Book Vibe is your go-to platform for discovering new books and connecting with fellow book
                        enthusiasts. Our mission is to provide an immersive reading experience that inspires and
                        empowers readers.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed mb-8">
                        Our vision is to cultivate a community where literature thrives, and readers are
                        encouraged to explore diverse stories and perspectives.
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        For inquiries or feedback, please email us at <a href="" className="text-blue-600 hover:underline">contact@bookvibe.com</a>.
                    </p>
                    <Link to="/">
                        <button className="bg-[#6DB0DB] mt-5 text-lg font-bold hover:bg-transparent px-5 py-4 border-2 border-[#6DB0DB] text-white hover:text-black rounded-xl">Return Home</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;