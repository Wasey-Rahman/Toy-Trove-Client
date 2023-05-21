import React, { useEffect, useState } from 'react';

const Gallery = () => {
    const [gallerys,setGallery]=useState([]);

    useEffect(()=>{
       fetch('https://toy-trove-server-nu.vercel.app/gallery')
       .then(res=>res.json())
       .then(data=>setGallery(data))
       .catch(error=>console.log(error))
    },[])
    return (
        <div>
           
           <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8 text-blue-600 mt-20">Gallery View</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-20">
        {gallerys.map((gallery) => (
          <div key={gallery.id} className="rounded-lg overflow-hidden shadow-xl">
            <img src={gallery.imageLink} alt="Shoes" className="w-full" />
          </div>
        ))}
      </div>
</div>
</div>
    );
};

export default Gallery;