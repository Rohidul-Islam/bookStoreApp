import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit =async (data) => {
        const userInfo={
                    email:data.email,
                    password:data.password
                }
              await  axios.post("http://localhost:4000/user/login", userInfo)
                .then((res) =>{
                    console.log(res.data)
                    if (res.data) {
                      toast.success("Loggedin Successfully")
                       document.getElementById('my_modal_1').close()
                      setTimeout(() =>{
                       
                      window.location.reload();
                    localStorage.setItem("Users", JSON.stringify(res.data.user));
                      },1000)
                    } 
                })
                .catch((err) =>{
                    if (err.response) {
                        console.log(err);
                    toast.error("Error:" +err.response.data.message)
                    setTimeout(() =>{},2000)
                    }
                })
    }
    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    <h3 className="font-bold text-lg text-center">Login</h3>
                    <div className='mt-4 space-y-3'>
                        <span className='text-lg'>Email</span>
                        <br />
                        <input type="email" placeholder="Enter your Email" className='w-85 px-5 py-1 border rounded-md outline-none'
                            {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-3'>
                        <span className='text-lg'>Password</span>
                        <br />
                        <input type="password" placeholder="Enter your Password" className='w-85 px-5 py-1 border rounded-md outline-none'
                            {...register("password", { required: true })}
                        />
                        <br />
                        {errors.password && <span className='text-red-500'>This field is required</span>}
                    </div>
                    {/* Login Button and Signup*/}
                    <div className='flex justify-around mt-4'>

                        <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-green-500 duration-300 cursor-pointer'>Login</button>
                        <p className='px-3 py-1 cursor-pointer'>
                            Not Registered? <Link to="/signup" className='text-blue-500 cursor-pointer'>SIGNUP NOW</Link>
                        </p>

                    </div>
                    <div className="modal-action">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn" 
                            onClick={() => document.getElementById('my_modal_1').close()}
                            >Close</button>
                            
                    </div>
                        </form>
                </div>
            </dialog>
        </div>
    )
}
