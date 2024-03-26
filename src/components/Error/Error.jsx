import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="space-y-4 flex flex-col justify-center items-center h-screen">
            <h1 className="text-9xl font-bold">404</h1>
            <h1 className="text-3xl font-bold">Opps! Page Not Found</h1>
            <p className="text-xl">Sorry, the page you are looking or does not exist.</p>
            <Link to="/">
                <button className="bg-[#6DB0DB] text-lg font-bold hover:bg-transparent px-5 py-4 border-2 border-[#6DB0DB] text-white hover:text-black rounded-xl">Return Home</button>
            </Link>
        </div>
    );
};

export default Error;
