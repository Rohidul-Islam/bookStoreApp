import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from 'axios';
import Cards from "./Cards";
import { useState } from 'react';
import { useEffect } from 'react';
import { data } from 'react-router-dom';


function Freebook() {
    const [book, setBook]=useState([])
        useEffect(() =>{
            const getBook=async() =>{
                try {
               const res = await  axios.get("https://bookstoreapp-backend-15hd.onrender.com")
               
               setBook(res.data.filter((data) => data.category === "Free"))
               console.log(data)
                } catch (error) {
                    console.log(error)
                }
            }
            getBook();
        },[])

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
    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16">
                <div>
                    <h1 className="font-semibold text-xl pb-2">Recommended Books</h1>
                    <p className="text-gray-500">Our Recommended Books section features carefully selected titles based on popularity, ratings, and reader reviews. Whether you're new to reading or a seasoned bookworm, these selections are sure to spark your interest.</p>
                </div>

                <div className="mt-8">
                    <Slider {...settings}>
                        {book.map((item) => (
                            <Cards daily={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freebook;
