import Image from 'next/image'
import React from 'react'
import image from './../../../Assets/images/Blog/test1.png'
import { MdOutlineArrowOutward } from 'react-icons/md'

const Blog = () => {
  return (
    <div className='p-5'>
      <Image
        src={image}
        alt=''
        width={1000}
        height={1000}
        className='w-full bg-center bg-cover rounded-md'
      />
      <div className='text-[#6941C6] text-sm mt-[20px]'>Design</div>
      <div className='flex items-center gap-4 font-semibold text-[24px]'>
        <h1>UX Review Presentations</h1>
        <MdOutlineArrowOutward className='inline-block' />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        natus odio, officiis magnam ducimus harum tempore qui similique ipsam
        recusandae!
      </p>
      <div className='flex items-center p-2 rounded-b-lg gap-2'>
        <Image
          src='https://source.unsplash.com/50x50/?portrait?2'
          alt=''
          width={100}
          height={100}
          className='w-10 h-10 bg-center bg-cover rounded-full'
        />
        <div>
          <p className='text-lg font-semibold'>Katherine Moss</p>
          <p className='text-sm uppercase'>Project Manager, Layers</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
