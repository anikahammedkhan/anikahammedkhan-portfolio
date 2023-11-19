import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatar from './../Assets/images/profile.png'

export default function MainLayout({ children }) {
  const avatarUrl = avatar
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
      <FloatingWhatsApp
        phoneNumber={'+8801704952699'}
        accountName={'Md Anik Ahammed Khan'}
        avatar={avatarUrl}
        statusMessage={'Typically replies within 15 minutes'}
        chatMessage={'Hello! 👋🏼 \n\nHow can I help you?'}
        allowClickAway={true}
      />
    </section>
  )
}
