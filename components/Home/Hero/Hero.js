import React from 'react'
import Typewriter from 'typewriter-effect'
import OrbitComponent from './OrbitComponent'
import { HiOutlineDownload } from 'react-icons/hi'
import style from './../../../styles/Hero.module.css'

const Hero = () => {
  const downloadResume = () => {
    fetch('md-anik-ahammed-khan-resume.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'md-anik-ahammed-khan-resume.pdf'
        alink.click()
      })
    })
  }
  return (
    <div>
      <div
        id='hero'
        className='flex p-5 md:p-28 items-center justify-between flex-col-reverse lg:flex-row'
      >
        <div className='lg:w-1/2' data-aos='fade-right'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl py-2 font-color'>
            Hi👋,
          </h1>
          <h1 className='text-2xl md:text-4xl lg:text-4xl py-2 font-color'>
            My Name is
          </h1>
          <h1
            className={`text-2xl md:text-4xl lg:text-5xl py-2 font-semibold ${style.textGardient}`}
          >
            Md Anik Ahammed Khan
          </h1>
          <div className='flex'>
            <h1 className='text-2xl md:text-4xl lg:text-4xl py-2 font-color mr-3'>
              I&apos;m a
            </h1>
            <h1
              className={`text-2xl md:text-4xl lg:text-4xl py-2 font-semibold ${style.textGardient}`}
            >
              <Typewriter
                options={{
                  strings: [
                    'Front-End Developer',
                    'ReactJs Developer',
                    'React Native Developer',
                    'Freelancer',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <p className='md:text-lg lg:text-2xl py-2 font-color'>
            Based in Dhaka, Bangladesh specializing in building (and
            occasionally designing) exceptional websites, applications, and
            everything in between.
          </p>
          <div className='flex flex-row justify-center md:justify-start mt-10'>
            <button
              onClick={downloadResume}
              className='bg-[#0752cb] hover:bg-[#0a0ab9] text-white font-bold py-3 px-8 rounded-full mr-2'
            >
              Download Resume
              <HiOutlineDownload className='inline-block ml-2 text-2xl' />
            </button>
          </div>
        </div>
        <div className='lg:w-1/2' data-aos='fade-left'>
          <OrbitComponent />
        </div>
      </div>
    </div>
  )
}

export default Hero
