import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

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
        <button className="px-3 py-2 bg-green-600 text-white rounded-md cursour-pointer"
        onClick={handleLogout}>
            logout
        </button>
    </div>
  )
}

export default Logout;