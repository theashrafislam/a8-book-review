import { Link, useLoaderData } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import { SiPowerpages } from "react-icons/si";
import { IoLocationOutline } from "react-icons/io5";
import PropTypes from 'prop-types';

const WishListBooks = ({sort}) => {
    const saveLocalStorage = localStorage.getItem('wishList');
    const bookIds = JSON.parse(saveLocalStorage) || [];
    const books = useLoaderData();
    const filteredBooks = books.filter(book => bookIds.includes(book.bookId));
    
    let displayData = [...filteredBooks];
    if(sort == "rating"){
        displayData = displayData.sort(
            (firstBook, secondBook) => secondBook.rating - firstBook.rating
          );
    }
    if(sort == "totalPages"){
        displayData = displayData.sort(
            (firstBook, secondBook) => secondBook.totalPages - firstBook.totalPages
          );
    }
    if(sort == "publishedYear"){
        displayData = displayData.sort(
            (firstBook, secondBook) => secondBook.yearOfPublishing - firstBook.yearOfPublishing
          );
    }


    return (
        <div className="my-16 space-y-5 mx-4 lg:mx-0">
            {
                displayData.length > 0 && (
                    displayData.map(book => (
                        <div key={book.bookId} className="flex gap-4 border-2 rounded-xl p-4 flex-col lg:flex-row">
                            <div className="bg-[#1313130D] p-4 rounded-xl flex justify-center items-center lg:flex-none">
                                <img className="w-36" src={book.image} alt={book.title} />
                            </div>
                            <div className="w-full">
                                <h2 className="text-2xl font-bold mb-2">{book.bookName}</h2>
                                <p><span className="text-base font-medium">By: {book.author}</span></p>
                                <div className="flex gap-4 items-center mt-2">
                                    <p className="font-bold">Tag:</p>
                                    <div className="flex items-center gap-3 flex-col lg:flex-row">
                                        {book?.tags?.map(tag => (
                                            <span key={tag} className="text-[#23BE0A] font-medium bg-[#23BE0A0D] px-4 py-1 rounded-3xl">#{tag}</span>
                                        ))}
                                        <span className="flex items-center gap-1 text-[#13131399]"><IoLocationOutline className="text-xl" /> <span>Year Of Publishing: {book.yearOfPublishing}</span></span>
                                    </div>
                                </div>
                                <div className="flex gap-4 my-2">
                                    <p className="flex gap-1 items-center text-[#13131399]"><IoPeopleOutline className="text-xl" /> <span>Publisher: {book.publisher}</span></p>
                                    <p className="flex gap-1 items-center text-[#13131399]"><SiPowerpages className="text-lg" /> <span>Page: {book.totalPages}</span></p>
                                </div>
                                <div className="flex gap-3 items-center pt-2 border-t-2">
                                    <h3 className="px-4 py-2 bg-[#328EFF26] text-[#328EFF] rounded-3xl">Category: {book.category}</h3>
                                    <h3 className="px-4 py-2 bg-[#FFAC3326] text-[#FFAC33] rounded-3xl">Rating: {book.rating}</h3>
                                    <Link to={`/bookDetails/${book.bookId}`}>
                                        <button className="px-4 py-2 bg-[#23BE0A] text-white rounded-3xl">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
};

WishListBooks.propTypes = {
    sort: PropTypes.string,
}

export default WishListBooks;