import { Link, NavLink } from "react-router-dom";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 hidden lg:flex">
                <div className="navbar-start">
                    <Link to="/" id="bookVide" className="text-3xl font-bold">Book Vibe</Link>
                </div>
                <div className="navbar-center">
                    <div className="flex gap-6 justify-center items-center">
                        <NavLink to="/" id="hoverStyle" className={({ isActive }) => isActive ? "px-5 py-3 border-2 border-[#23BE0A] rounded-xl text-lg font-semibold" : ""}>Home</NavLink>
                        <NavLink to="/listedBooks" id="hoverStyle" className={({ isActive }) => isActive ? "px-5 py-3 border-2 border-[#23BE0A] rounded-xl text-lg font-semibold" : ""}>Listed Books</NavLink>
                        <NavLink to="/pagesToRead" id="hoverStyle" className={({ isActive }) => isActive ? "px-5 py-3 border-2 border-[#23BE0A] rounded-xl text-lg font-semibold" : ""}>Pages to Read</NavLink>
                        <NavLink to="/aboutUs" id="hoverStyle" className={({ isActive }) => isActive ? "px-5 py-3 border-2 border-[#23BE0A] rounded-xl text-lg font-semibold" : ""}>About Us</NavLink>
                        <NavLink to="/contactUs" id="hoverStyle" className={({ isActive }) => isActive ? "px-5 py-3 border-2 border-[#23BE0A] rounded-xl text-lg font-semibold" : ""}>Contact Us</NavLink>
                    </div>
                </div>
                <div className="navbar-end">
                    <div>
                        <Link to="/signInPage"><button className="py-4 px-5 rounded-xl bg-[#23BE0A] text-lg text-white font-semibold mr-4">Sign In</button></Link>
                        <Link to="/signUpPage"><button className="py-4 px-5 rounded-xl bg-[#59C6D2] text-lg text-white font-semibold">Sign Up</button></Link>
                    </div>
                </div>
            </div>

            {/* for responsive  */}

            <div className="flex justify-between items-center lg:hidden mx-4">
                <div>
                    <details className="dropdown">
                        <summary className="m-1 btn"><HiOutlineMenuAlt1 /></summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a><NavLink to="/" >Home</NavLink></a></li>
                            <li><a><NavLink to="/listedBooks">Listed Books</NavLink></a></li>
                            <li><a><NavLink to="/pagesToRead">Pages to Read</NavLink></a></li>
                            <li><a><NavLink to="/aboutUs">About Us</NavLink></a></li>
                            <li><a><NavLink to="/contactUs">Contact Us</NavLink></a></li>
                        </ul>
                    </details>
                </div>
                <div>
                    <Link to="/" id="bookVide" className="text-2xl font-bold">Book Vibe</Link>
                </div>
                <div>
                    <Link to="/signInPage"><button className="py-2 px-3 rounded-xl bg-[#23BE0A] text-base text-white font-medium mr-4">Sign In</button></Link>
                    <Link to="/signUpPage"><button className="py-2 px-3 rounded-xl bg-[#59C6D2] text-base text-white font-medium">Sign Up</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;