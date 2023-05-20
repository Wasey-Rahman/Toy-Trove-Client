import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';




const ShopByCategory = () => {
    const [shops,setShop]=useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/gallery')
        .then(res=>res.json())
        .then(data=>setShop(data))
        .catch(error=>console.log(error))
     },[])
    return (
        
             <div>
                <h1 className="text-4xl font-bold text-center my-8 text-blue-600 mt-20">Shop By Category</h1>
                <Tabs>
    <TabList>
      <Tab>Mario</Tab>
      
      
    </TabList>

    {/* <TabPanel>
      <p>
        <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
        /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
        game franchise, owned by Nintendo and created by Japanese video game designer
        Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
        of the series, Mario has appeared in over 200 video games since his creation.
        Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
        Kingdom, his adventures generally center upon rescuing Princess Peach from the
        Koopa villain Bowser. His younger brother and sidekick is Luigi.
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/175px-Philip_Fry.png" alt="Philip J. Fry" />
      </p>
      
    </TabPanel> */}
    
    
    {shops.map((shop) => (
          <TabPanel key={shop.id}>
           
            <img src={shop.imageLink}  />
          </TabPanel>
          
        ))}
        {shops.map((shop) => (
          <TabPanel key={shop.id}>
           
            <img src={shop.imageLink}  />
          </TabPanel>
          
        ))}
        </Tabs>

</div>
                
  );
};

     

export default ShopByCategory;