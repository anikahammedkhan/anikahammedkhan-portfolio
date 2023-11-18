import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const data = useLoaderData()
    const { about, clientRepo, date, fullPicture, functionality, liveLink, name, picture, serverRepo, stack, status, technology } = data;
    return (
        <div>
            <h1 className='font-color text-3xl font-bold text-center py-4 px-3'>Project Details : <span className='text-amber-500'>{name}</span></h1>
            <div className='grid grid-cols-3'>
                <div className='col-span-2'>
                    <div className='grid grid-cols-3'>
                        <div>
                            <img src={picture} alt />
                        </div>
                        <div className='col-span-2'>
                            <img src={fullPicture} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-color text-2xl font-bold text-center py-4 px-3'>Project Details</h1>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;