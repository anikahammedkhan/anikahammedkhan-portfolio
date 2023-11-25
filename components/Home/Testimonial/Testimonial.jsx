import animation from '../../../Assets/animations/testimonial.json'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css' // Import Swiper styles
import 'swiper/css/navigation' // Import Swiper navigation styles
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import React, { useEffect, useRef, useState } from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import dynamic from 'next/dynamic'

// make Lottie dynamic
const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

// Explicitly install Swiper modules
SwiperCore.use([Navigation, Autoplay])

const Testimonial = () => {
  const swiperRef = useRef(null)
  const [swiper, setSwiper] = useState(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      setSwiper(swiperRef.current.swiper)
    }
  }, [])

  const slidePrev = () => {
    if (swiper) {
      swiper.slidePrev()
    }
  }

  const slideNext = () => {
    if (swiper) {
      swiper.slideNext()
    }
  }

  return (
    <div className='px-10 mb-20'>
      <div className='flex justify-between items-center'>
        <div className='lg:text-[36px] text-[30px] font-bold'>
          Feedback from <br /> Happy Clients
        </div>
        <div className='bg-[#0752cb] hover:bg-[#0a0ab9] text-white font-bold py-2 lg:py-3 px-4 lg:px-8 rounded-full mr-2'>
          View All
        </div>
      </div>
      <p className='text-[20px] font-medium'>
        Hear directly from our satisfied clients about their journey with us
      </p>
      <div className='lg:flex items-center'>
        <div className='lg:w-1/2 relative mx-5'>
          <Swiper
            ref={swiperRef}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            autoplay={{
              delay: 3000, // Change the delay time as needed
              disableOnInteraction: false,
            }}
            loop={true}
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
            <SwiperSlide>
              <Card />
            </SwiperSlide>
          </Swiper>
          <div className='flex items-center absolute 2xl:left-[800px] xl:left-[600px] lg:left-[400px] md:left-[250px] left-[200px]'>
            <div
              className='swiper-button-prev-custom p-3 border-2 rounded-full mr-5'
              onClick={slidePrev}
            >
              <MdArrowBackIosNew />
            </div>
            <div
              className='swiper-button-next-custom p-3 border-2 rounded-full'
              onClick={slideNext}
            >
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
        <div className='lg:w-1/2 flex justify-center items-center md:mt-0 mt-20'>
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
