import '../styles/globals.css'
import '../styles/blog.css'
import 'aos/dist/aos.css'
import '../components/Navbar/Navbar.css'
import 'react-photo-view/dist/react-photo-view.css'
import 'swiper/css'
import 'swiper/css/navigation'

import AOS from 'aos'
import { useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <>
      <Toaster />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
