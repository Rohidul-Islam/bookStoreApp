import React from 'react'
import { useState, useEffect } from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import UserProfile from './UserProfile';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Check for user data in localStorage on component mount
    const userData = localStorage.getItem("Users");
    if (userData && !authUser?.user) {
      setAuthUser({
        ...authUser,
        user: JSON.parse(userData)
      });
    }
  }, []);

  useEffect(() => {
    // Update localStorage and document theme when theme changes
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const navItems = (<>
    <li><a href="/">Home</a></li>
    <li><a href="/genre">Genre</a></li>
    <li><a href="/contact">Contact</a></li>
    <li><a href="/about">About</a></li>
  </>)

  return (
    <>
      <div className="fixed top-0 left-0 right-0 glass backdrop-blur-md border-b border-primary/20 shadow-glass z-50 transition-all duration-300">
        <div className="container mx-auto px-0 sm:px-4 lg:px-20">
          <div className="navbar p-0 sm:p-4 flex items-center justify-between">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content glass backdrop-blur-md border border-primary/10 rounded-box z-[1] mt-3 w-52 p-2 shadow-glass">
                  {navItems}
                </ul>
              </div>
              <Link to={"/"} className="font-poppins font-bold text-2xl sm:text-3xl cursor-pointer text-primary drop-shadow-glow">
                Granthalaya
              </Link>
            </div>

            {/* Center section - visible only on large screens */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-lg font-semibold">
                {navItems}
              </ul>
            </div>

            {/* End section with responsive spacing */}
            <div className="navbar-end flex items-center gap-2 sm:gap-3 md:gap-4">
              {/* Search - visible only on large screens */}
              <div className="hidden lg:flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-2 py-1 border-2 border-primary-light rounded-lg input-success w-full max-w-xs outline-none"
                />
              </div>

              {/* Theme toggle */}
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  checked={theme === 'dark'}
                  onChange={handleThemeSwitch}
                  className="theme-controller"
                />
                <svg
                  className="swap-off h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>
                <svg
                  className="swap-on h-6 w-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>

              {/* Cart Icon */}
              <Link to="/cart" className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 hover:text-primary duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-accent text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              </Link>

              {/* User Profile/Login */}
              {authUser?.user ? (
                <>
                  <button 
                    className="p-2 hover:bg-primary/10 rounded-full transition duration-300"
                    onClick={() => {
                      const modal = document.getElementById('user_profile_modal');
                      if (modal) {
                        modal.showModal();
                      }
                    }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 text-primary" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                      />
                    </svg>
                  </button>
                  <UserProfile />
                </>
              ) : (
                <div>
                  <a 
                    className="bg-primary text-white px-2 py-1 rounded-full hover:bg-primary-dark duration-300 cursor-pointer"
                    onClick={() => document.getElementById('my_modal_1').showModal()}
                  >
                    Login
                  </a>
                  <Login />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
