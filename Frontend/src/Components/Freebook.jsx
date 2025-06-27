import React, { useState, useEffect } from 'react';
import Cards from "./Cards";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

// Mock books from genre for fallback
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

function Freebook() {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cart, setCart] = useState(() => {
      const stored = localStorage.getItem('cart');
      return stored ? JSON.parse(stored) : [];
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("https://bookstoreapp-backend1.onrender.com/book");
                const freeBooks = res.data.filter((data) => data.category === "Free");
                // If not enough free books, fill with mockBooks
                setBook(freeBooks.length >= 8 ? freeBooks : [...freeBooks, ...mockBooks.slice(0, 8 - freeBooks.length)]);
                setLoading(false);
            } catch (error) {
                setBook(mockBooks.slice(0, 8));
                setError(error.response?.data?.message || error.message || 'Failed to load books. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchBooks();
    }, []);

    const handleAddToCart = (bookItem) => {
      const updatedCart = [...cart, bookItem];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      navigate('/cart');
    };

    if (loading) {
        return <div className="text-center mt-16">Loading free books...</div>;
    }

    if (error) {
        return <div className="text-center mt-16 text-red-500">{error}</div>;
    }

    return (
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16">
            <div>
                <h1 className="font-semibold text-xl pb-2">Recommended Books</h1>
                <p className="text-gray-500">Our Recommended Books section features carefully selected titles based on popularity, ratings, and reader reviews. Whether you're new to reading or a seasoned bookworm, these selections are sure to spark your interest.</p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {book.map((item) => (
                    <Cards daily={item} key={item._id} onAddToCart={handleAddToCart} />
                ))}
            </div>
            <div className="flex justify-center mt-8">
                <Link to="/genre">
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-300 shadow-lg">See All</button>
                </Link>
            </div>
        </div>
    );
}

export default Freebook;

