import React from 'react';
import Banner from '../Banner/Banner';
import NewCollection from '../NewCollection/NewCollection';
import PrimeToyRetail from '../PrimeToyRetail/PrimeToyRetail';
import Gallery from '../Gallery/Gallery';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <NewCollection></NewCollection>
            <PrimeToyRetail></PrimeToyRetail>
        </div>
    );
};

export default Home;