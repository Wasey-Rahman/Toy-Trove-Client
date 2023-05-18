import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Toy-Trove.png';

const NavigationBar = () => {
  // Sample login state and user data
  const [isLoggedIn, setIsLoggedIn] = React.useState(true); // Update this based on your login logic
  const username = 'John Doe';
  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear user session, update login state, etc.
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li tabIndex={0}>
              <a className="justify-between">All Toys</a>
            </li>
            <li><a>Blogs</a></li>
          </ul>
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
        {isLoggedIn ? (
          <div className="dropdown">
            <div className="avatar">
              <img src="user-profile-picture.jpg" alt="User Profile" />
            </div>
            <label tabIndex={0} className="btn btn-ghost">
              {username}
            </label>
            <ul tabIndex={0} className="menu dropdown-content shadow bg-base-100 rounded-box">
              <li>
                <Link to="/add-toy">Add A Toy</Link>
              </li>
              <li>
                <Link to="/my-toys">My Toys</Link>
              </li>
              <li>
                <button className="btn" onClick={handleLogout}>
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