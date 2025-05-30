import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
      <div id="my_modal_1" className="border-[4px] border-black-500 shadow-md p-8 rounded-md">
                <div className="">
                    {/* <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form> */}
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                    <h3 className="font-bold text-lg text-center">SignUp</h3>
                    <div className='mt-4 space-y-3'>
                        <span className='text-lg'>Name</span>
                        <br />
                        <input type="text" placeholder="Enter your Fullname" className='w-100 px-5 py-1 border rounded-md outline-none' 
                        {...register("text", { required: true })}
                        />
                        <br />
                        {errors.text && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-3'>
                        <span className='text-lg'>Email</span>
                        <br />
                        <input type="email" placeholder="Enter your Email" className='w-100 px-5 py-1 border rounded-md outline-none' 
                        {...register("email", { required: true })}
                        />
                        <br />
                        {errors.email && <span className='text-red-500'>This field is required</span>}
                    </div>
                    <div className='mt-4 space-y-3'>
                        <span className='text-lg'>Password</span>
                        <br />
                        <input type="password" placeholder="Enter your Password" className='w-100 px-5 py-1 border rounded-md outline-none' 
                        {...register("password", { required: true })}
                        />
                        <br />
                        {errors.password && <span className='text-red-500'>This field is required</span>}
                    </div>
                    {/* Login Button and Signup*/}
                    <div className='flex justify-around mt-5'>
                        <button className='bg-pink-500 text-white px-3 py-1 rounded-md hover:bg-green-500 duration-300 cursor-pointer'>SignUp</button>
                        <p className='px-3 py-1 cursor-pointer'>
                            Have Account?{''} <Link to="/" className='text-blue-500 cursor-pointer '
                            >
                                Login Now</Link>{''}
                        </p>
                    </div>
                    <div className="modal-action">
        {/* if there is a button in form, it will close the modal */}
        <Link to="/" className="btn">Close</Link>
    </div>
      </form>
                </div>
            </div>
    </div>
    </>
  )
}
