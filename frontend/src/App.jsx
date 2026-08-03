import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Services from './components/Services'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


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
      </Routes>
      <Footer />
    </>
  )
}

export default App
