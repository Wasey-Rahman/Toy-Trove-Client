import React from 'react';

const NewCollection = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-20 text-center font-bold text-4xl text-blue-600">Toy New Collection</h1>
      <div className="mockup-phone mt-8">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1 text-center">
            <p className="mb-4">You have no toys. Are you ready to grow? Come and shop with us!</p>
            <p>
              Price From: <span className="font-bold">$25</span>
            </p>
            <button className="btn mt-4">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;