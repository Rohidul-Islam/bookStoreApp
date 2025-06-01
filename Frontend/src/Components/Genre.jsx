import React from 'react';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import Book from '../../../Backend/model/book.model';
function Genre() {
    const [book, setBook]=useState([])
    useEffect(() =>{
        const getBook=async() =>{
            try {
           const res = await  axios.get("https://bookstoreapp-backend-15hd.onrender.com/book")
           console.log(res.data)
           setBook(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])
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
                From thrilling mysteries to inspiring biographies and tech guides, there’s something for everyone.


                </p>
                <Link to="/">
                <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>BACK</button>
                </Link>
            </div>
            <div className='mt-12 grid grid cols-1 md:grid-cols-4'>
                {
                book.map((item)=>(
                    <Cards key={item.id} daily={item}/>
                 ))
                }
            </div>
        </div>
    );
}

export default Genre;


