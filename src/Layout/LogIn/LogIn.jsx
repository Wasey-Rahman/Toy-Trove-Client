import React from 'react';
import { Link } from 'react-router-dom';

const LogIn = () => {
    const handleGoogleSignIn = () => {
        // Implement Google Sign-in logic here
        // This function will be triggered when the user clicks on the Google Sign-in button
      };
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className=" card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-1">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="form-control mt-4">
              <button className="btn btn-neutral" onClick={handleGoogleSignIn}>
                Google Sign-in
              </button>
            </div>
            <div className="form-control mt-4">
              <p>
                Don't have an account?{' '}
                <Link to="/registration" className="text-primary">
                  Register
                </Link>
              </p>
            </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default LogIn;