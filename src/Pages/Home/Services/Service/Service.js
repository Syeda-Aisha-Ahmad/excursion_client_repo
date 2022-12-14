import React from 'react';
import useTitle from '../../../../Hooks/useTitle';
import 'react-photo-view/dist/react-photo-view.css';
import SingleService from '../SingleService/SingleService';

const Service = ({ data }) => {

    return (
        <div className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>

            {
                data.map(service => (<SingleService service={service} />))
            }


        </div>
    );
};

export default Service;