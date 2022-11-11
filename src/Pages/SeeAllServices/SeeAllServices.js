import React, { useEffect, useState } from 'react';
import Service from '../Home/Services/Service/Service';
import AllServiceDetails from './AllServiceDetails';

const SeeAllServices = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("http://localhost:5000/allservices", requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setData(result);
                console.log(result)
            })
            .catch(error => console.log('error', error));

    }, [])
    return (
        <div>
            <AllServiceDetails data={data} ></AllServiceDetails>
        </div >
    );
};

export default SeeAllServices;