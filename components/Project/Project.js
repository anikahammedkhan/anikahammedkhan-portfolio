import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import { BsArrowRight } from "react-icons/bs";
import "./Project.css"

const Project = ({ project }) => {
    const { _id, picture, fullPicture, name, about, stack } = project;
    return (
        <div className="card w-full h-full bg-base-100 shadow-xl" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-duration="1500" class="aos-init aos-animate">
            <figure className='other-pro-img'>
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img className='w-full' src={fullPicture} alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{stack}</div>
                </h2>
                <p>{about}</p>
                <div className="card-actions justify-end">
                    <Link to={`/project/${_id}`} className='btn btn-info text-white hover:btn-success hover:text-white'>See Details   <BsArrowRight className='ml-3' /></Link>
                </div>
            </div>
        </div>
    );
};

export default Project;