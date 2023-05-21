import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';



const Add_A_Toy = () => {
  const { user } = useContext(AuthContext);

  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const pictureURL = form.pictureURL.value;
    const name=form.name.value;
    const sellerName = user?.displayName ;
    const sellerEmail=user?.email
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const availableQuantity = form.availableQuantity.value;
    const description = form.description.value;
    

    const Add={
    
        pictureURL,name,sellerName,sellerEmail,subCategory ,price,rating ,availableQuantity,description
    }

    // Perform submission logic here, e.g., send form data to the server

    // Clear form fields after submission
    form.reset();
    
   console.log(Add)

   fetch('https://toy-trove-server-nu.vercel.app/Add_A_Toy',{
     method:'POST',
     headers:{
          'content-type':'application/json'
     },
     body:JSON.stringify(Add)
   })
   .then(res=>res.json())
   .then(data=>{
    console.log(data);
    if(data.insertId){
      Swal.fire({
        title:'Success',
        text:' Added Successfully',
        icon:'success',
        confirmation:'cool'
      })
      
    }
   })
   .catch((error) => {
    console.error('Error:', error);
  });
   

   
  

  };

  return (
    
 
    <form onSubmit={handleAddAToy}>
   <h1 className='text-3xl font-bold text-blue-600 mb-3 text-center'>Add A Toy</h1>
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-1">
         <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  placeholder="photo URL"
                  className="input input-bordered"
                  name="pictureURL"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">SellerName</span>
                </label>
                <input
                  type="text"
                  placeholder="sellerName"
                  className="input input-bordered"
                  name="sellerName"
                  defaultValue={user?.displayName}
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">SellerEmail</span>
                </label>
                <input
                  type="text"
                  placeholder="sellerEmail"
                  className="input input-bordered"
                  name="sellerEmail"
                  defaultValue={user?.email}
                  />
                  
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">SubCategory</span>
                </label>
                <input
                  type="text"
                  placeholder="subCategory"
                  className="input input-bordered"
                  name="subCategory"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  placeholder="price"
                  className="input input-bordered"
                  name="price"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  type="text"
                  placeholder="rating"
                  className="input
                   input-bordered"
                  name="rating"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">AvailableQuantity</span>
                </label>
                <input
                  type="text"
                  placeholder="availableQuantity"
                  className="input input-bordered"
                  name="availableQuantity"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  placeholder="description"
                  className="input input-bordered"
                  name="description"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-neutral" type="submit">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
    
   
  );
};

export default Add_A_Toy;