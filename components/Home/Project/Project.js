import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { BsArrowRight } from 'react-icons/bs'
import style from './../../../styles/Project.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Project = ({ project }) => {
  const { _id, picture, fullPicture, name, about, stack } = project
  return (
    <div
      className='w-full h-full bg-base-100 shadow-xl p-5 rounded-xl border'
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
      <div className='text-[#6941C6] text-sm mt-[20px]'>{stack}</div>
      <Link href={`/project/${_id}`} className=''>
        <div className='flex items-center gap-4 font-semibold text-[24px]'>
          <h1>{name}</h1>
          <MdOutlineArrowOutward className='inline-block' />
        </div>
      </Link>
      <p>{about}</p>
    </div>
  )
}

export default Project
