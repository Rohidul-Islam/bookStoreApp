import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider'

export default function Login() {
    const [authUser, setAuthUser] = useAuth();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        try {
            const res = await axios.post("http://localhost:4000/user/login", userInfo);
            if (res.data) {
                // Set the auth user state
                setAuthUser({
                    ...authUser,
                    user: res.data.user
                });
                
                // Store in localStorage
                localStorage.setItem("Users", JSON.stringify(res.data.user));
                
                // Show success message
                toast.success("Logged in Successfully");
                
                // Close the modal
                document.getElementById('my_modal_1').close();
                
                // Reload after a short delay
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            }
        } catch (err) {
            console.error('Login error:', err);
            toast.error("Error: " + (err.response?.data?.message || "Login failed"));
        }
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
                            <button type="submit" className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-green-500 duration-300 cursor-pointer'>Login</button>
                            <p className='px-3 py-1 cursor-pointer'>
                                Not Registered? <Link to="/signup" className='text-blue-500 cursor-pointer'>SIGNUP NOW</Link>
                            </p>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
