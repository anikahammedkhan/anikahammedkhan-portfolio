import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { BsArrowRight } from 'react-icons/bs'
import style from './../../../styles/Project.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({ project }) => {
  const { _id, picture, fullPicture, name, about, stack } = project
  return (
    <div
      className='card w-full h-full bg-base-100 shadow-xl'
      data-aos='fade-up'
      data-aos-anchor-placement='top-bottom'
      data-aos-duration='1500'
      class='aos-init aos-animate'
      data-theme='light'
    >
      <figure className={`${style.otherProImg}`}>
        <PhotoProvider>
          <PhotoView src={picture}>
            <Image
              width={500}
              height={100}
              className='w-full'
              src={fullPicture}
              alt='Shoes'
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {name}
          <div className='badge badge-secondary'>{stack}</div>
        </h2>
        <p>{about}</p>
        <div className='card-actions justify-end'>
          <Link
            href={`/project/${_id}`}
            className='btn btn-info text-white hover:btn-success hover:text-white'
          >
            See Details
            <BsArrowRight className='ml-3' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
