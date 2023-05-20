import React from 'react';
import { Link } from 'react-router-dom';

const Not_Found = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <img src="https://photodune.img.customer.envatousercontent.com/files/394742767/Error+404+pal+color+power+plug.jpg?w=900&fit=max&mark=https%3A%2F%2Fassets.shopfront.envato-static.com%2Fimages%2Fwatermarks-19012018.png&markalign=top%2Cleft&markpad=0&markfit=crop&fm=pjpg&q=40&s=50a7874cfb9395a870f133ff119ab479" alt="404 Error" className="mb-8" />
      <Link to="/" className="px-4 py-2 text-white bg-gray-600 rounded hover:bg-black">
        Back to Home
      </Link>
    </div>
    );
};

export default Not_Found;