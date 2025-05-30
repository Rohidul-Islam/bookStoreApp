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
           const res = await  axios.get("http://localhost:4001/book")
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloremque enim sunt dolores in, laboriosam libero ad cupiditate tempore ab nihil? Officiis quidem quasi laborum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, animi placeat pariatur fuga ad iste laudantium voluptas quidem. Quidem odio quia, accusamus minus odit ipsum!
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


