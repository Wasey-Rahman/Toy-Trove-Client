// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Single_Toy_Details = () => {
//     const Toy_S=useLoaderData();
//     const{Picture,ToyName,SellerName,SellerEmail,Price,Rating,AvailableQuantity,Description}=Toy_S;
//     return (
//         <div  className="text-center">
//         <h1 className='text-3xl font-bold text-blue-600 mb-20'>Details</h1>
//         <img src={Picture} alt="" className="mx-auto" /><br />
//         <h1 className='text-2xl font-bold text-gray-600'>{ToyName}</h1><br />
//         <h2>SellerName:{SellerName}</h2><br />
//         <h2>SellerEmail:{SellerEmail}</h2><br />
//         <h2>Price:{Price}</h2><br />
//         <h2>Rating:{Rating}</h2><br />
//         <h2>AvailableQuantity:{AvailableQuantity}</h2><br />
//         <p>{Description}</p>

//     </div>
//     );
// };

// export default Single_Toy_Details;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Single_Toy_Details = () => {
  const [toyDetails, setToyDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    const fetchToyDetails = async () => {
      try {
        const response = await fetch(`https://toy-trove-server-nu.vercel.app/Toy_S/${params._id}`);
        const data = await response.json();
        setToyDetails(data);
      } catch (error) {
        console.error('Error fetching toy details:', error);
      }
    };

    fetchToyDetails();
  }, [params._id]);

  const { Picture, ToyName, SellerName, SellerEmail, Price, Rating, AvailableQuantity, Description } = toyDetails;

  return (
    <div className="text-center">
      <h1 className='text-3xl font-bold text-blue-600 mb-20'>Single Toy Details</h1>
      <img src={Picture} alt="" className="mx-auto" /><br />
      <h1 className='text-2xl font-bold text-gray-600'>{ToyName}</h1><br />
      <h2>SellerName: {SellerName}</h2><br />
      <h2>SellerEmail: {SellerEmail}</h2><br />
      <h2>Price: {Price}</h2><br />
      <h2>Rating: {Rating}</h2><br />
      <h2>AvailableQuantity: {AvailableQuantity}</h2><br />
      <p className='mb-5'>Description:{Description}</p>
    </div>
  );
};

export default Single_Toy_Details;


