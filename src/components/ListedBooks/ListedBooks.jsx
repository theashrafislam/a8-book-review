
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishListBooks from "../WishListBooks/WishListBooks";

const ListedBooks = () => {
    const [index, setIndex] = useState(0);
    const [sort, setSort] = useState("");
    

    const handleRating = (data) =>{
        setSort(data);
    }
    const handlePagesNumber = (data) =>{
        setSort(data);
    }
    const handleYear = (data) =>{
        setSort(data);
    }

    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="bg-[#1313130D] flex justify-center py-10 rounded-xl my-10 mx-4 lg:mx-0">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>

            <div className="flex justify-center items-center my-5">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white hover:text-black font-bold">Sort By <FaChevronDown className="font-bold" /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li onClick={() => {handleRating('rating')}}><a>Rating</a></li>
                        <li onClick={() => {handlePagesNumber('totalPages')}}><a>Number of Pages</a></li>
                        <li onClick={() => {handleYear('publishedYear')}}><a>Published Year</a></li>
                    </ul>
                </details>
            </div>

            <div className="mx-4 lg:mx-0">
                <div className="flex mx-1 lg:justify-start overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800 border-b-2">

                    <button to="/listedBooks" onClick={() => setIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600 ${index == 0 ? "border border-b-0" : "border-b"}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </button>


                    <button onClick={() => setIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2  dark:border-gray-600 dark:text-gray-900 ${index == 1 ? "border border-b-0" : "border-b "}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </button>
                </div>

            </div>
            {
                index === 0 ? (<ReadBooks sort={sort}></ReadBooks>) : (<WishListBooks sort={sort}></WishListBooks>)
            }
        </div>
    );
};

export default ListedBooks;