import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'

export default function MainLayout({ children }) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}
