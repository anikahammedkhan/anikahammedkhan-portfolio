import React from 'react'
import Blog from './Blog'

const Blogs = () => {
  return (
    <div className='px-10'>
      <div className='flex justify-between items-center'>
        <div className='text-[36px] font-bold'>Latest Blog Posts</div>
        <div className='bg-[#0752cb] hover:bg-[#0a0ab9] text-white font-bold py-3 px-8 rounded-full mr-2'>
          View All
        </div>
      </div>
      <p className='text-[20px] font-medium'>
        Tool and strategies modern teams need to help their companies grow.
      </p>
      <div className='grid grid-cols-3 gap-2'>
        <Blog />
        <Blog />
        <Blog />
      </div>
    </div>
  )
}

export default Blogs
