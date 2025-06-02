import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';

function UserProfile() {
    const [authUser, setAuthUser] = useAuth();

    useEffect(() => {
        // Log the current user data for debugging
        console.log('Current user data:', authUser);
    }, [authUser]);

    const handleLogout = () => {
        try {
            setAuthUser({
                ...authUser,
                user: null
            });
            localStorage.removeItem("Users");
            toast.success("Logout Successfully");
            
            // Close the modal before reloading
            document.getElementById('user_profile_modal').close();
            
            setTimeout(() => {
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Error: " + error.message);
        }
    };

    return (
        <dialog id="user_profile_modal" className="modal">
            <div className="modal-box">
                <div className="flex flex-col items-center space-y-4">
                    {/* User Icon */}
                    <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </div>

                    {/* User Info */}
                    <div className="text-center">
                        <h2 className="text-xl font-bold">{authUser?.user?.fullname || 'User'}</h2>
                        <p className="text-gray-500">{authUser?.user?.email || 'No email available'}</p>
                    </div>

                    {/* Divider */}
                    <hr className="w-full border-t border-gray-200" />

                    {/* Logout Button */}
                    <button
                        onClick={handleLogout}
                        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
                    >
                        Logout
                    </button>

                    {/* Close Button */}
                    <form method="dialog" className="w-full">
                        <button className="w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition duration-300">
                            Close
                        </button>
                    </form>
                </div>
            </div>
            {/* Modal backdrop */}
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}

export default UserProfile; 