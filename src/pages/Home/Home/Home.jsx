import React from 'react';
import Banner from '../Banner/Banner';
import NewCollection from '../NewCollection/NewCollection';
import PrimeToyRetail from '../PrimeToyRetail/PrimeToyRetail';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewCollection></NewCollection>
            <PrimeToyRetail></PrimeToyRetail>
        </div>
    );
};

export default Home;