import React, { useEffect, useState } from 'react';
import Service from '../Services/Services';

const Services = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        setLoading(true);
        fetch("http://localhost:5000/allservices", requestOptions)
            .then(response => response.json())
            .then(result => {
                setLoading(false);
                setData(result.allServices);
            })
            .catch(error => console.log('error', error));

    }, [])
    return (
        <div>
            <Service data={data} />
        </div>
    );
};

export default Services;