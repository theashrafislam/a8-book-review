import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { saveReadBooks, saveWishList } from "../../Utility/localStorage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookDetails = () => {
    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    // console.log(books, idInt)
    const book = books.find(book => book.bookId === idInt);
    // console.log(books);
    if (!book) {
        return '';
    }
    // console.log(book);
    // console.log(id);
    const {bookId,  bookName, image, author, category, review, tags, totalPages, rating, publisher, yearOfPublishing } = book;

    const handleRead = (id) => {
        saveReadBooks(id);
    }
    const handleWish = (id) => {
        
        saveWishList(id);
    }

    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-10 my-10 mx-4 lg:mx-0">
                <div className="bg-[#1313130D] flex justify-center items-center rounded-xl">
                    <img src={image} className="w-80 py-20" alt="" />
                </div>
                <div className="space-y-4">
                    <h1 className="font-bold text-3xl lg:text-4xl">{bookName}</h1>
                    <p className="font-medium">By: {author}</p>
                    <p className="py-3 border-t-2 border-b-2 font-medium">{category}</p>
                    <p><span className="font-bold">Review:</span> {review}</p>
                    <div className="flex gap-4 items-center pb-4 border-b-2">
                        <div>
                            <p className="font-bold">Tag: </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[#23BE0A] px-4 py-2 rounded-3xl bg-[#23BE0A0D] font-medium text-base"># {tags[0]}</span>
                            <span className="text-[#23BE0A] px-4 py-2 rounded-3xl bg-[#23BE0A0D] font-medium text-base"># {tags[1]}</span>
                        </div>
                    </div>
                    <p className="font-bold flex gap-10"><span className="font-normal">Number of Pages:</span> {totalPages}</p>
                    <p className="font-bold flex gap-24"><span className="font-normal">Publisher:</span> {publisher}</p>
                    <p className="font-bold flex gap-8"><span className="font-normal">Year of Publishing:</span> {yearOfPublishing}</p>
                    <p className="font-bold flex gap-28"><span className="font-normal">Rating:</span> {rating}</p>
                    <div className="flex items-center gap-5">
                        <Link onClick={() => handleRead(bookId)}>
                            <button className="px-7 py-4 rounded-xl border-2 font-bold text-lg hover:bg-[#50B1C9] hover:text-white hover:border-none">Read</button>
                        </Link>
                        <ToastContainer />
                        <Link onClick={() => handleWish(bookId)}>
                            <button className="px-7 py-4 rounded-xl bg-[#50B1C9] font-bold text-lg text-white hover:text-black hover:bg-transparent hover:border-2">Wishlist</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;