import Image from 'next/image'
import React, { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import emailjs from '@emailjs/browser'
import { toast } from 'react-hot-toast'
import ReCAPTCHA from 'react-google-recaptcha'
import recaptcha from './4n1k.jsx'
import animation from '../../../Assets/animations/contact.json'
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

const Contact = () => {
  const [verified, setVerified] = useState(false)
  function onChange(value) {
    if (value) {
      setVerified(true)
    }
    setTimeout(() => {
      setVerified(false)
    }, 15000)
  }
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_c3w26o9',
        'template_5ynl8wi',
        form.current,
        'ZrkOjG8LANSneaqyb',
      )
      .then(
        (result) => {
          toast.success('Message Sent Successfully!')
          form.current.reset()
        },
        (error) => {
          toast.error('Message Sending Failed !! Try Again Later !!')
          console.log(error.text)
        },
      )
  }
  return (
    <div className='px-10'>
      <div className='grid grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32'>
        <div className='flex flex-col justify-between lg:w-[480px] mx-auto'>
          <div className='space-y-2'>
            <div className='mb-[20px]'>
              <h1 className='text-[36px]'>Contact Me</h1>
              <p className='text-[20px] text-[#475467]'>
                I would love to here from you.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className='flex w-full gap-3 mb-[24px]'>
                <div className='w-1/2'>
                  <label htmlFor='firstName'>First Name</label>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    className='block w-full px-4 py-3 bg-white border border-[#D0D5DD] rounded-md shadow-sm focus:border-[#a1a3a7]'
                    placeholder='First Name'
                    required
                  />
                </div>
                <div className='w-1/2'>
                  <label htmlFor='lastName'>Last Name</label>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    className='block w-full px-4 py-3 bg-white border border-[#D0D5DD] rounded-md shadow-sm focus:border-[#a1a3a7]'
                    placeholder='Last Name'
                    required
                  />
                </div>
              </div>
              <div className='mb-[24px]'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='block w-full px-4 py-3 bg-white border border-[#D0D5DD] rounded-md shadow-sm focus:border-[#a1a3a7]'
                  placeholder='Email'
                  required
                />
              </div>
              <div className='mb-[24px]'>
                <label htmlFor='phone'>Phone</label>
                <input
                  type='number'
                  name='phone'
                  id='phone'
                  className='block w-full px-4 py-3 bg-white border border-[#D0D5DD] rounded-md shadow-sm focus:border-[#a1a3a7]'
                  placeholder='Phone'
                  required
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
                  required
                ></textarea>
              </div>
              <ReCAPTCHA sitekey={recaptcha} onChange={onChange} />
              <div className='flex justify-center'>
                <button
                  type='submit'
                  value='Send'
                  className='bg-[#0752cb] hover:bg-[#0a0ab9] text-white font-bold py-3 px-8 rounded-full mr-2 w-full'
                  disabled={!verified}
                >
                  {!verified ? 'Verify Recaptcha' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className='lg:w-[480px] mx-auto flex items-center'>
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  )
}

export default Contact
