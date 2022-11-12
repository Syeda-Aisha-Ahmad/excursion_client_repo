import React from 'react';
import useTitle from '../../../../Hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import SingleService from '../SingleService/SingleService';

const Service = ({ data }) => {
    console.log(data);

    return (
        <div className='grid lg:grid-cols-3'>

            {
                data.map(service => (<SingleService service={service} />))
            }


        </div>
    );
};

export default Service;