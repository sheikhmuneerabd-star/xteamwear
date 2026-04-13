import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import CardPage from './Pages/CardPage'

import CategorySection from './Pages/CategorySection'
import CartPage from './Pages/CartPage'
import SignInUp from './Pages/SignInUp'
import MainComponent from './Pages/MainComponent'
import ContactUs from './Pages/ContactUs'
import Faqs from './Pages/Faqs'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainComponent />}>
              <Route path='/' element={<Home />} />
              <Route path='/cardPage/:id/:color' element={<CardPage />} />
              <Route path='/categorySection/:cateName' element={<CategorySection />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/contactUs' element={<ContactUs />} />
              <Route path='/faqs' element={<Faqs />} />
          </Route>

          <Route path='/signInUp' element={<SignInUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
