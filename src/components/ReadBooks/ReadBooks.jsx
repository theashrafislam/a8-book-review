import { useLoaderData } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import { SiPowerpages } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";

const ReadBooks = () => {
    const saveLocalStorage = localStorage.getItem('read-books')
    // console.log(saveLocalStorage)
    const books = useLoaderData()
    // console.log(books)
    const book = books.find(book => book.bookId == JSON.parse(saveLocalStorage));
    console.log(book, books, saveLocalStorage)
    return (
        <div className="my-16">
            <div className="flex gap-4 border-2 rounded-xl p-4">
                <div className="bg-[#1313130D] p-4 rounded-xl">
                    <img src='https://i.ibb.co/hCR1P8V/pngwing-1.png' alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold">Title</h2>
                    <p><span className="text-base font-medium">By: ashrful</span></p>
                    <div className="flex gap-4 items-center">
                        <p className="font-bold">Tag:</p>
                        <div className="flex items-center gap-3">
                            <span className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-1 rounded-3xl"># ashr</span>
                            <span className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-1 rounded-3xl"># ashr</span>
                            <span className="flex items-center gap-1"><IoLocationOutline /> <span>Year Of Publishing:</span> </span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <p className="flex gap-1 items-center"><IoPeopleOutline /> <span>Publisher: 2</span></p>
                        <p className="flex gap-1 items-center"><SiPowerpages /> <span>Page: 2</span></p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <h3>Category: ge</h3>
                        <h3>Rating: 85</h3>
                        <button>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBooks;