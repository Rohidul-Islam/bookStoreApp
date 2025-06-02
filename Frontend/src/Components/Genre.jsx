import React from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Genre() {
    const [book, setBook] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
           const res = await  axios.get("https://bookstoreapp-backend1.onrender.com/book")
           console.log(res.data)
           setBook(res.data)
            } catch (error) {
                console.error('Error fetching books:', error);
                setError('Failed to load books. Please try again later.');
                setLoading(false);
            }
        };

        fetchBooks();
    }, []);

    if (loading) {
        return <div className="text-center mt-28">Loading books...</div>;
    }

    if (error) {
        return <div className="text-center mt-28 text-red-500">{error}</div>;
    }

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className='text-2xl font-bold md:text-4xl'>
                    HAPPY TO HAVE YOU HERE {""}
                    <span className='text-pink-500'>HERE! :)</span>
                </h1>
                <p className='mt-12'>
                    Looking for something new? Browse by genre to uncover hidden gems and bestsellers across a variety of categories. Your next favorite book could be just a click away.
                    Explore our wide range of genres to discover books tailored to your preferences. Whether you're into fiction, romance, science, self-help, or technology — our categorized collection makes it easy to find what you love.
                    From thrilling mysteries to inspiring biographies and tech guides, there's something for everyone.
                </p>
                <Link to="/">
                    <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>BACK</button>
                </Link>

                <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {book.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500">No books found</div>
                    ) : (
                        book.map((item) => (
                            <Cards key={item._id} daily={item} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Genre;


