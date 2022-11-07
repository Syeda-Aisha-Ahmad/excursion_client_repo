import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Banner from './Banner/Banner';

const Home = () => {
    //Title
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;