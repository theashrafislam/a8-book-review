// import { FaRegStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
const Books = () => {
    const books = useLoaderData()
    // console.log(books)
    return (
        <div className="container mx-auto">
            <h3 className="font-bold text-4xl text-center mb-10">Books</h3>

            {/* cards  */}

            <div className="grid grid-cols-3 gap-5 justify-between items-center mb-20">

                {
                    books.map(book => <Book book={book} key={book.id}></Book>)
                }

            </div>

        </div>
    );
};

export default Books;