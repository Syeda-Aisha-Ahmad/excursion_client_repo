import React from 'react';
import useTitle from '../../Hooks/useTitle';
import SingleServiceData from './SingleServiceData';

const AllServiceDetails = ({ data }) => {
    useTitle('AllServiceDetails')
    return (
        <div>
            {
                data.map(dt => <SingleServiceData data={dt}></SingleServiceData>)
            }
        </div>
    );
};

export default AllServiceDetails;