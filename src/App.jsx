import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import("./Pages/Home"));
const CategorySection = lazy(() => import("./Pages/CategorySection"));
const CardPage = lazy(() => import("./Pages/CardPage"));
const CartPage = lazy(() => import("./Pages/CartPage"));
const SignInUp = lazy(() => import("./Pages/SignInUp"));
const MainComponent = lazy(() => import("./Pages/MainComponent"));
const ContactUs = lazy(() => import("./Pages/ContactUs"));
const Faqs = lazy(() => import("./Pages/Faqs"));

function App() {

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h3 className='text-center text-[30px] mt-[20%]'>Loading...</h3>}>
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
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
