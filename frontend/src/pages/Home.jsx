import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/FAQ"


function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <FeaturedProducts />

    </>
  )
}

export default Home