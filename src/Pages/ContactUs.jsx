import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const ContactUs = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>

            <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 my-5 rounded-3xl mx-4 lg:mx-0">
                <div className="max-w-3xl mx-auto">
                    <h1 className="lg:text-4xl text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
                    <p className="text-lg text-gray-800 leading-relaxed mb-8">
                        If you have any questions, comments, or suggestions, please feel free to get in touch with us.
                        You can contact us at the following address:
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Email: <a href="" className="text-blue-600 hover:underline">contact@bookvibe.com</a>
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Phone: <span className="text-blue-600">+1 (123) 456-7890</span>
                    </p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                        Address: Book Vibe, 123 Road, City, Canada
                    </p>
                    <Link to="/">
                        <button className="bg-[#6DB0DB] mt-5 text-lg font-bold hover:bg-transparent px-5 py-4 border-2 border-[#6DB0DB] text-white hover:text-black rounded-xl">Return Home</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;