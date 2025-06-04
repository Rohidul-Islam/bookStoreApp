import React from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Genre() {
    const [book, setBook] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState('all');

    const genres = [
        { id: 'all', name: 'All Books' },
        { id: 'fiction', name: 'Fiction' },
        { id: 'novel', name: 'Novel' },
        { id: 'non-fiction', name: 'Non-Fiction' },
        { id: 'mystery', name: 'Mystery' },
        { id: 'romance', name: 'Romance' },
        { id: 'science', name: 'Science' },
        { id: 'technology', name: 'Technology' }
    ];

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("https://bookstoreapp-backend1.onrender.com/book");
                const allBooks = res.data;
                console.log('All books from API:', allBooks);

                if (!Array.isArray(allBooks)) {
                    throw new Error('Invalid data format received from API');
                }

                // Apply genre filter
                const filteredBooks = selectedGenre === 'all'
                    ? allBooks
                    : allBooks.filter(book => {
                        if (!book.genre) {
                            console.log(`Book ${book.name} has no genre`);
                            return false;
                        }
                        const bookGenre = book.genre.toLowerCase().trim();
                        const selectedGenreLower = selectedGenre.toLowerCase().trim();
                        console.log(`Comparing book genre "${bookGenre}" with selected genre "${selectedGenreLower}"`);
                        return bookGenre === selectedGenreLower;
                    });

                console.log(`Found ${filteredBooks.length} books for genre "${selectedGenre}"`);
                setBook(filteredBooks);
                setError(null);
            } catch (error) {
                console.error('Error fetching books:', error);
                setError(error.message || 'Failed to load books. Please try again later.');
                setBook([]);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [selectedGenre]);

    const handleGenreClick = (genreId) => {
        console.log('Selected genre:', genreId);
        setSelectedGenre(genreId);
        setLoading(true); // Show loading state while filtering
    };

    if (loading) {
        return <div className="text-center mt-16 md:mt-20">Loading books...</div>;
    }

    return (
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
            <div className='mt-16 md:mt-20 items-center justify-center text-center'>
                <h1 className='text-2xl font-bold md:text-4xl'>
                    Browse Books by Genre {""}
                    <span className='text-pink-500'>:)</span>
                </h1>
                
                {/* Genre Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mt-8">
                    {genres.map((genre) => (
                        <button
                            key={genre.id}
                            onClick={() => handleGenreClick(genre.id)}
                            className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                                selectedGenre === genre.id
                                    ? 'bg-pink-500 text-black'
                                    : 'bg-gray-500 hover:bg-pink-400'
                            }`}
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>

                <p className='mt-6 text-gray-600 px-4'>
                    Looking for something new? Browse by genre to uncover hidden gems and bestsellers across a variety of categories.
                    Your next favorite book could be just a click away.
                </p>

                <Link to="/">
                    <button className='mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>BACK</button>
                </Link>

                <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {error ? (
                        <div className="col-span-full text-center text-red-500">
                            {error}
                        </div>
                    ) : book.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500">
                            {selectedGenre === 'all' 
                                ? 'No books available in the library' 
                                : `No books found in ${genres.find(g => g.id === selectedGenre)?.name} category`
                            }
                        </div>
                    ) : (
                        book.map((item) => (
                            <Cards key={item._id} daily={item} />
                        ))
                    )}
                </div>

                {/* Debug Information
                {process.env.NODE_ENV === 'development' && (
                    <div className="mt-8 text-left text-sm text-gray-500 border-t pt-4">
                        <p>Selected Genre: {selectedGenre}</p>
                        <p>Total Books: {book.length}</p>
                        <p>Available Genres: {genres.map(g => g.id).join(', ')}</p>
                    </div>
                )} */}
            </div>
        </div>
    );
}

export default Genre;


