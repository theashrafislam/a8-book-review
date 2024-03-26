import { Link, NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <Link to="/" id="bookVide" className="text-3xl font-bold">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="flex gap-10 justify-center items-center">
                        <NavLink to="/" id="hoverStyle" className={({isActive}) => isActive ? "px-5 py-3 border-2 border-[#23BE0A] rounded-xl text-lg font-semibold" : ""}>Home</NavLink>
                        <NavLink to="/listedBooks" id="hoverStyle" className={({isActive}) => isActive ? "px-5 py-3 border-2 border-[#23BE0A] rounded-xl text-lg font-semibold" : ""}>Listed Books</NavLink>
                        <NavLink to="/pagesToRead" id="hoverStyle" className={({isActive}) => isActive ? "px-5 py-3 border-2 border-[#23BE0A] rounded-xl text-lg font-semibold" : ""}>Pages to Read</NavLink>
                    </div>
                </div>
                <div className="navbar-end">
                    <div>
                        <Link to="/signInPage"><button className="py-4 px-5 rounded-xl bg-[#23BE0A] text-lg text-white font-semibold mr-4">Sign In</button></Link>
                        <Link to="/signUpPage"><button className="py-4 px-5 rounded-xl bg-[#59C6D2] text-lg text-white font-semibold">Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;