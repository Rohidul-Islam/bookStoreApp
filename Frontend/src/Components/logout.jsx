import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
function Logout() {
    const [authUser, setAuthUser]= useAuth()
    const handleLogout =() => {
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout SuccessFully")
                      setTimeout(() =>{
                         window.location.reload();
                      }
                      ,3000)
        } catch (error) {
            toast.error("Error" +error.message)
            setTimeout(() => {}, 2000)
        }
    }
  return (
    <div>
        <Link to="/" className="px-2 py-1 bg-red-600 text-white rounded-md cursour-pointer"
        onClick={handleLogout}>
            Logout
        </Link>
    </div>
  )
}

export default Logout;