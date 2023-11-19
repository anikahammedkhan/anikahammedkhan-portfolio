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
    <div className='px-10'>
      <div className='flex justify-between items-center'>
        <div className='text-[36px] font-bold'>Feedback from Happy Clients</div>
        <div className='px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'>
          View All
        </div>
      </div>
      <p className='text-[20px] font-medium'>
        Hear directly from our satisfied clients about their journey with us
      </p>
      <div className='flex items-center'>
        <div className='w-1/2 mx-5 relative'>
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
          <div className='flex items-center absolute left-[600px]'>
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
        <div className='w-1/2 flex justify-center items-center'>
          <Lottie animationData={animation} />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
