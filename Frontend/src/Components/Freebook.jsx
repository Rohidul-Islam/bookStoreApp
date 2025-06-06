import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState, useEffect } from 'react';
import Cards from "./Cards";
import axios from 'axios';

function Freebook() {
    const [book, setBook] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const res = await axios.get("https://bookstoreapp-backend1.onrender.com/book");
                setBook(res.data.filter((data) => data.category === "Free"));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching books:', error);
                setError(error.response?.data?.message || error.message || 'Failed to load books. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        
        fetchBooks();
    }, []);

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    if (loading) {
        return <div className="text-center mt-16">Loading free books...</div>;
    }

    if (error) {
        return <div className="text-center mt-16 text-red-500">{error}</div>;
    }

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Recommended Books</h1>
                    <p className="text-gray-500">Our Recommended Books section features carefully selected titles based on popularity, ratings, and reader reviews. Whether you're new to reading or a seasoned bookworm, these selections are sure to spark your interest.</p>
                </div>

                <div className="mt-8">
                    {book.length === 0 ? (
                        <div className="text-center text-gray-500">No free books available</div>
                    ) : (
                        <Slider {...settings}>
                            {book.map((item) => (
                                <Cards daily={item} key={item._id} />
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </>
    );
}

export default Freebook;

