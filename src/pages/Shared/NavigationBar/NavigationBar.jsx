import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './Toy-Trove.png';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Helmet } from 'react-helmet';

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);// Added state for dropdown visibility
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  

  useEffect(() => {
    // Scroll to the top of the page on route change
    window.scrollTo(0, 0);
  }, [location]);

  // Get the page name from the current route path
  const getPageName = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/AllToys':
        return 'All Toys';
      case '/Blogs':
      return 'Blogs';
      case '/Add_A_toy':
      return 'Add A Toy';
      case '/my-toys':
      return 'My Toys';
      case '/single toy details':
      return 'Single Toy Details';
      default:
      return '';
    }
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
          <li><Link to="/" ><span>Home</span></Link></li>
          <li><Link to="/AllToys">All Toys</Link></li>
          <li><Link to="/Blogs">Blogs</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex items-center">
            <div className="avatar w-16 me-4">
              <img src={user.photoURL || '/default-profile-image.jpg'} alt="User Profile"   />
            </div>
            <label tabIndex={0} className="btn btn-ghost mx-2">
              {user.displayName}
            </label>
            <ul className="menu dropdown-content shadow bg-base-100 rounded-box">
              <li>
                <Link to="/Add_A_toy">Add A Toy</Link>
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
      <Helmet>
      <title>Toy-Trove | {getPageName()}</title>
        </Helmet>
    </div>
  );
};


export default NavigationBar;