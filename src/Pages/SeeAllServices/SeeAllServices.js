import React, { useEffect, useState } from 'react';
import Service from '../Home/Services/Service/Service';

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
            })
            .catch(error => console.log('error', error));

    }, [])
    return (
        <div>
            <Service data={data} ></Service>
        </div >
    );
};

export default SeeAllServices;