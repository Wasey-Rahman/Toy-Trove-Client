import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToys = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [toys, setToys] = useState([]);

  useEffect(() => {
    // Fetch toy data from API and update the state
    fetch('https://toy-trove-server-nu.vercel.app/toy')
      .then((response) => response.json())
      .then((data) => setToys(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredToys = toys.filter((toy) =>
    toy.ToyName && toy.ToyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">All Toys</h1>

      <div className="mb-4">
        <label htmlFor="search" className="mr-2">
          Search by Toy Name:
        </label>
        <input
          type="text"
          id="search"
          name="search"
          value={searchTerm}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Seller</th>
            <th className="px-4 py-2">Toy Name</th>
            <th className="px-4 py-2">Sub-category</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Available Quantity</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {filteredToys.slice(0, 20).map((toy) => (
            <tr key={toy._id}>
              <td className="border px-4 py-2">{toy.Seller}</td>
              <td className="border px-4 py-2">{toy.ToyName}</td>
              <td className="border px-4 py-2">{toy.SubCategory}</td>
              <td className="border px-4 py-2">${toy.Price}</td>
              <td className="border px-4 py-2">{toy.AvailableQuantity}</td>
              <td className="border px-4 py-2">
                <Link to={`/toy/${toy._id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  View Details
                </button>
                </Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;