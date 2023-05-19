import React, { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {signIn} = useContext(AuthContext);
  const navigate=useNavigate();



  const handleLogin = () => {
   
    // Implement login logic here
    // Validate email and password
    if (email === '') {
      setErrorMessage('Please enter your email.');
    } else if (password === '') {
      setErrorMessage('Please enter your password.');
    } else {
      // Perform login action
      // ...
    }
    console.log(name,email,password)

    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      navigate('/')

      
    })
   
    
    .catch(error=>console.log(error))
  };

  const handleGoogleSignIn = () => {
    // Implement Google Sign-in logic here
    // This function will be triggered when the user clicks on the Google Sign-in button
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-1">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className="text-error mt-2">{errorMessage}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
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