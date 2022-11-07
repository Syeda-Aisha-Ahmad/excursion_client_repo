import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    //Title
    useTitle('Home')
    return (
        <div>
            This is home page
        </div>
    );
};

export default Home;