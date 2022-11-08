import React from 'react';
import useTitle from '../../Hooks/useTitle';
import About from './About/About';
import Banner from './Banner/Banner';
import Destination from './Destination/Destination';
import AllService from './Services/AllService/AllService';

const Home = () => {
    //Title
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AllService></AllService>
            <Destination></Destination>
        </div>
    );
};

export default Home;