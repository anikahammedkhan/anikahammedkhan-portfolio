import React from 'react'
import Logo from './../../Assets/images/logo.png'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='footer p-10 bg-[#eeebeb] rounded-lg shadow-lg justify-items-center'>
      <div>
        <Image src={Logo} alt='' className='w-full h-12' />
        <p>
          anikkhan1105@gmail.com
          <br />
          Providing reliable support since 2018
        </p>
      </div>
      <div>
        <span className='footer-title'>Social</span>
        <div className='grid grid-flow-col gap-4'>
          <a
            href='https://github.com/anikahammedkhan'
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-ghost btn-sm rounded-btn text-3xl'
          >
            <FaGithub></FaGithub>
          </a>
          <a
            href='https://www.linkedin.com/in/anikahammedkhan/'
            className='btn btn-ghost btn-sm rounded-btn text-3xl'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='text-[#0077b5]'></FaLinkedin>
          </a>
          <a
            href='https://www.facebook.com/anikahammedkhan.99'
            className='btn btn-ghost btn-sm rounded-btn text-3xl'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaFacebook className='text-[#3b5998]'></FaFacebook>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
