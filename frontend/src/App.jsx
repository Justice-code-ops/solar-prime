import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Services from './components/Services'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Quote from './pages/Quote'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/products/:id"
          element={<ProductDetails />}
        />
        <Route 
          path='/services'
          element={<Services />}
        />
        <Route 
          path='/quote'
          element={<Quote />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
