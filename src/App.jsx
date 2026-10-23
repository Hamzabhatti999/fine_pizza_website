import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Deals from './components/Deals'
import Menu from './components/Menu'
import MenuGallery from './components/MenuGallery'
import Branches from './components/Branches'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import FloatingCart from './components/FloatingCart'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Deals />
        <Menu />
        <MenuGallery />
        <Branches />
      </main>
      <Footer />
      <CartDrawer />
      <FloatingCart />
    </>
  )
}
