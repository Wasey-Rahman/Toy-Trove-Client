import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation();
    console.log('User authorized to access private content',user);

    if(loading){
        return <div className="flex justify-center items-center h-screen">
        <div className="spinner spinner-blue"></div>
      </div>
    }

   
    if(user){
        return children;
    }
    return<Navigate state={{from :location}}to="/login"></Navigate> ;
};

export default PrivateRoute;