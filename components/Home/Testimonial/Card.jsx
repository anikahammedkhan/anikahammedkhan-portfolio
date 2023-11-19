import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'
const Card = () => {
  return (
    <div className='my-6 shadow-lg hover:shadow-xl rounded-md w-2/3 mx-auto'>
      <div className='px-4 py-12 rounded-t-lg sm:px-8 md:px-12'>
        <div className='relative px-6 py-1 text-lg italic text-center'>
          <div className='flex justify-between items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              fill='currentColor'
              className='w-8 h-8'
            >
              <path d='M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z'></path>
              <path d='M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z'></path>
            </svg>
            <div className='flex gap-1 text-[20px] text-[#ffa534]'>
              <FaStar className='' />
              <FaStar className='' />
              <FaStar className='' />
              <FaStar className='' />
              <FaStar className='' />
            </div>
          </div>
          We’ve really speed up our workflow with the help of Anik and haven’t
          looked back.
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
            fill='currentColor'
            className='absolute right-0 w-8 h-8'
          >
            <path d='M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z'></path>
            <path d='M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z'></path>
          </svg>
        </div>
      </div>
      <div className='flex items-center p-8 rounded-b-lg gap-2'>
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

export default Card
