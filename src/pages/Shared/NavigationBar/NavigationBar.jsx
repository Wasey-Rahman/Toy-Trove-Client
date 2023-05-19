import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './Toy-Trove.png';
import { AuthContext } from '../../../Providers/AuthProvider';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Added state for dropdown visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          {isDropdownOpen && (
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/"><span>Home</span></Link></li>
            <li tabIndex={0}>
             <Link to="/AllToys"className="justify-between">All Toys</Link>
            </li>
            <li><Link to="/Blogs">Blogs</Link></li>
          </ul>
          )}
        </div>
        <Link to="/" className="normal-case text-xl">
          <img className="w-16 me-4" src={logo} alt="" />
        </Link>
        <h2 className="font-extrabold text-3xl">Toy-Trove</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/"><span>Home</span></Link></li>
          <li><Link to="/AllToys">All Toys</Link></li>
          <li><Link to="/Blogs">Blogs</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div className="avatar">
              <img src={user.photoURL || '/default-profile-image.jpg'} alt="User Profile" />
            </div>
            <label tabIndex={0} className="btn btn-ghost mx-2">
              {user.displayName}
            </label>
            <ul className="menu dropdown-content shadow bg-base-100 rounded-box">
              <li>
                <Link to="/add-toy">Add A Toy</Link>
              </li>
              <li>
                <Link to="/my-toys">My Toys</Link>
              </li>
              <li>
                <button className="btn" onClick={logOut}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn">
            LogIn
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;