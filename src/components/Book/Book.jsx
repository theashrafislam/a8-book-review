import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const Book = ({ book }) => {
    // console.log(book)
    const { author, bookId, bookName, image, tags, rating, category } = book;
    return (
        <div>
            {
                <Link to={`/bookDetails/${bookId}`}>
                    <div className="space-y-4 border-2 rounded-xl p-4">
                        <div className="bg-[#F3F3F3] px-14 py-16 rounded-xl flex justify-center items-center"><img src={image} alt="" /></div>
                        <div className="flex items-center">
                            <p className="text-[#23BE0A] px-4 py-2 rounded-3xl bg-[#23BE0A0D] font-medium text-base mr-4">{tags[0]}</p>
                            <p className="text-[#23BE0A] px-4 py-2 rounded-3xl bg-[#23BE0A0D] font-medium text-base">{tags[1]}</p>
                        </div>
                        <h1 className="text-2xl font-bold">{bookName}</h1>
                        <p className="text-[#131313CC] text-base pb-4 border-dashed border-b-2 font-medium">By: {author}</p>
                        <div className="flex justify-between items-center mt-5">
                            <p className="text-base font-medium">{category}</p>
                            <div className="flex gap-4 items-center">
                                <p className="text-base font-medium">{rating}</p>
                                <p><FaRegStar className="text-lg" /></p>
                            </div>
                        </div>
                    </div>
                </Link>
            }
        </div>
    );
};
Book.propTypes = {
    book: PropTypes.object,
}

export default Book;