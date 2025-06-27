import React from 'react';
import Cards from './Cards';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Genre() {
    const [book, setBook] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState('all');
    const [cart, setCart] = useState(() => {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    });
    const navigate = useNavigate();

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
                const res = await axios.get("https://bookstoreapp-backend1.onrender.com/book", {
                  params: selectedGenre === 'all' ? {} : { genre: selectedGenre }
                });
                const allBooks = res.data;
                setBook(allBooks);
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

    const handleAddToCart = (bookItem) => {
      const updatedCart = [...cart, bookItem];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      navigate('/cart');
    };

    // If no books, use mock data for genres
    const mockBooks = [
      { _id: '1', name: 'Brave New World', title: 'Aldous Huxley', price: 499, genre: 'fiction', image: 'civilization.jpg' },
      { _id: '2', name: 'The Great Gatsby', title: 'F. Scott Fitzgerald', price: 399, genre: 'fiction', image: 'Catch.jpg' },
      { _id: '3', name: 'To Kill a Mockingbird', title: 'Harper Lee', price: 450, genre: 'novel', image: 'maladies.jpg' },
      { _id: '4', name: '1984', title: 'George Orwell', price: 499, genre: 'fiction', image: 'Marie.jpg' },
      { _id: '5', name: 'Gone With The Wind', title: 'Margaret Mitchell', price: 550, genre: 'romance', image: 'Norewegian.jpg' },
      { _id: '6', name: 'Dune', title: 'Frank Herbert', price: 650, genre: 'science', image: 'sense.jpg' },
      { _id: '7', name: 'Foundation', title: 'Isaac Asimov', price: 520, genre: 'science', image: 'smart.jpg' },
      { _id: '8', name: 'Hyperbole and a Half', title: 'Allie Brosh', price: 510, genre: 'comedy', image: 'Thousand.jpg' },
      { _id: '9', name: 'A Confederacy of Dunces', title: 'John Kennedy Toole', price: 550, genre: 'comedy', image: 'Three.jpg' },
      { _id: '10', name: 'Me Before You', title: 'Jojo Moyes', price: 300, genre: 'romance', image: 'Forty Rules.jpg' },
      { _id: '11', name: 'Snowcrash', title: 'Neal Stephenson', price: 530, genre: 'technology', image: 'SVG.svg' },
      { _id: '12', name: 'Ender\'s Game', title: 'Orson Scott Card', price: 480, genre: 'technology', image: 'default-book-cover.jpg' },
    ];

    const displayBooks = book.length === 0 ? mockBooks : book;

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
                    ) : displayBooks.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500">
                            {selectedGenre === 'all' 
                                ? 'No books available in the library' 
                                : `No books found in ${genres.find(g => g.id === selectedGenre)?.name} category`
                            }
                        </div>
                    ) : (
                        displayBooks.map((item) => (
                            <Cards key={item._id} daily={item} onAddToCart={handleAddToCart} />
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


