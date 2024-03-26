import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const ListedBooks = () => {
    const [index, setIndex] = useState(0)
    return (
        <div className="container  mx-auto">
            <Navbar></Navbar>
            <div className="bg-[#1313130D] flex justify-center py-10 rounded-xl my-10">
                <h1 className="text-3xl font-bold">Books</h1>
            </div>
            <div>
            </div>
            <div>
                <div className="flex ml-1 lg:justify-start -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">

                        <Link to="" onClick={() => setIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-b dark:border-gray-600 dark:text-gray-600 ${index === 0 ? "border border-b-0" : "border-b"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Read Books</span>
                        </Link>


                        <Link to={`wishListBooks`} onClick={() => setIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border border-b-0 rounded-t-lg dark:border-gray-600 dark:text-gray-900 ${index === 1 ? "border border-b-0" : "border-b"}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                            </svg>
                            <span>Wishlist Books</span>
                        </Link>
                </div>

                {/* <div>
                    <Tabs>
                        <TabList>
                            <Tab>Read Books</Tab>
                            <Tab>Wishlist Books</Tab>
                        </TabList>

                        <TabPanel>
                            <Link to="">
                                
                            </Link>
                        </TabPanel>
                        <TabPanel>
                            <Link to={`wishListBooks`}>

                            </Link>
                        </TabPanel>
                    </Tabs>
                </div> */}

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;