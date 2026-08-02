import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"


function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FeaturedProducts />

    </>
  )
}

export default Home