import React from 'react';
import Banner from '../Banner/Banner';
import NewCollection from '../NewCollection/NewCollection';
import PrimeToyRetail from '../PrimeToyRetail/PrimeToyRetail';
import Gallery from '../Gallery/Gallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <NewCollection></NewCollection>
            <PrimeToyRetail></PrimeToyRetail>
        </div>
    );
};

export default Home;