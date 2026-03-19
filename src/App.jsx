import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import CardPage from './Pages/CardPage'


import CategoryBar from "../src/Components/CategoryBar"
import CopyRightFooter from "../src/Components/CopyRightFooter"
import FooterContact from "../src/Components/FooterContact"
import FooterSearch from "../src/Components/FooterSearch"
import Navbar from "../src/Components/Navbar"
import NavContact from "../src/Components/NavContact"
import CategorySection from './Pages/CategorySection'
import WhatsApp from './Pages/WhatsApp'
import CartPage from './Pages/CartPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <NavContact />
        <Navbar />
        <CategoryBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cardPage/:id/:color' element={<CardPage />} />
          <Route path='/categorySection/:cateName' element={<CategorySection />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
        <WhatsApp />
        <FooterSearch />
        <FooterContact />
        <CopyRightFooter />
      </BrowserRouter>
    </>
  )
}

export default App
