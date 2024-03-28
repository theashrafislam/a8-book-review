import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const PageToRead = () => {

    const localStorageToReadData = localStorage.getItem('read-books');
    const bookIds = JSON.parse(localStorageToReadData) || [];
    // console.log(typeof bookIds)
    const books = useLoaderData();
    // console.log(books)
    const filteredBooks = books.filter(book => bookIds.includes(book.bookId));
    // console.log(filteredBooks);

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="container mx-auto">
            <Navbar></Navbar>

            <div className="bg-[#13131308] w-full rounded-xl flex justify-center">
                {
                    filteredBooks.length > 0 && (
                            // console.log(item)
                            <div className="my-12 w-full overflow-x-scroll">
                                <BarChart
                                    width={1300}
                                    height={600}
                                    data={filteredBooks}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="bookName" />
                                    <YAxis />
                                    <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                        {filteredBooks.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </div>

                    )
                }
            </div>
        </div>
    );
};

export default PageToRead;