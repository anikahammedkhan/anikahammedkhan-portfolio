import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'
import animation from '../../../Assets/animations/contact.json'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const Contact = () => {
  return (
    <div className='px-10'>
      <div className='grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32'>
        <div className='flex flex-col justify-between w-[480px] mx-auto'>
          <div className='space-y-2'>
            <div className='mb-[20px]'>
              <h1 className='text-[36px]'>Contact Me</h1>
              <p className='text-[20px] text-[#475467]'>
                I would love to here from you.
              </p>
            </div>
            <form>
              <div className='flex w-full gap-3 mb-[24px]'>
                <div className='w-1/2'>
                  <label htmlFor='name'>First Name</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='block w-full px-4 py-3 bg-white border border-[#D0D5DD] rounded-md shadow-sm focus:border-[#a1a3a7]'
                    placeholder='First Name'
                  />
                </div>
                <div className='w-1/2'>
                  <label htmlFor='name'>Last Name</label>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='block w-full px-4 py-3 bg-white border border-[#D0D5DD] rounded-md shadow-sm focus:border-[#a1a3a7]'
                    placeholder='Last Name'
                  />
                </div>
              </div>
              <div className='mb-[24px]'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  name='email'
                  id='email'
                  className='block w-full px-4 py-3 bg-white border border-[#D0D5DD] rounded-md shadow-sm focus:border-[#a1a3a7]'
                  placeholder='Email'
                />
              </div>
              <div className='mb-[24px]'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='text'
                  name='phone'
                  id='phone'
                  className='block w-full px-4 py-3 bg-white border border-[#D0D5DD] rounded-md shadow-sm focus:border-[#a1a3a7]'
                  placeholder='Phone'
                />
              </div>
              <div className='mb-[24px]'>
                <label htmlFor='message'>Message</label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  className='block w-full px-4 py-3 bg-white border border-[#D0D5DD] rounded-md shadow-sm focus:border-[#a1a3a7]'
                  placeholder='Message'
                ></textarea>
              </div>
              <div className='flex justify-center'>
                <button
                  type='submit'
                  className='bg-[#0752cb] hover:bg-[#0a0ab9] text-white font-bold py-3 px-8 rounded-full mr-2 w-full'
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='w-[480px] mx-auto flex items-center'>
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  )
}

export default Contact
