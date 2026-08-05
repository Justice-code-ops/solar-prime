import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import FeaturedProducts from "../components/FeaturedProducts"
import Services from "../components/Services"
import WhyChooseUs from "../components/WhyChooseUs"
import Testimonials from "../components/Testimonials"
import FAQ from "../components/FAQ"
import Footer from "../components/Footer"
import Quote from "./Quote"


function Home() {
  return (
    <>
        <Navbar />
        <Hero />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <FeaturedProducts />
        <FAQ />

    </>
  )
}

export default Home