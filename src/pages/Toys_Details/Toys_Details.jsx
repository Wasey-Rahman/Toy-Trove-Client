import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Toys_Details = () => {
    const toy=useLoaderData();
    const{Picture,ToyName,SellerName,SellerEmail,Price,Rating,AvailableQuantity,Description}=toy;
    return (
        <div  className="text-center">
            <h1 className='text-3xl font-bold text-blue-600 mb-20'>Details</h1>
            <img src={Picture} alt="" className="mx-auto" /><br />
            <h1 className='text-2xl font-bold text-gray-600'>{ToyName}</h1><br />
            <h2>SellerName:{SellerName}</h2><br />
            <h2>SellerEmail:{SellerEmail}</h2><br />
            <h2>Price:{Price}</h2><br />
            <h2>Rating:{Rating}</h2><br />
            <h2>AvailableQuantity:{AvailableQuantity}</h2><br />
            <p>{Description}</p>

        </div>
    );
};

export default Toys_Details;