import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"


function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <FeaturedProducts />

    </>
  )
}

export default Home