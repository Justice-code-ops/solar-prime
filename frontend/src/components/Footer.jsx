import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { links } from '../data/links';

function Footer() {
  return (
    <section className='flex flex-col bg-slate-900 text-green-800 p-8'>
      <div className='flex flex-col lg:flex-row gap-8 py-3'>
        <div className='flex flex-col gap-5'>
            <h1 className='font-semibold text-2xl'>Solar Prime</h1>
            <p className='text-sm max-w-xs'>
                Solar Prime is a trusted provider of custom residential and commercial solar solutions. From upfront energy audits to professional installation and ongoing support, we build dependable power systems tailored to your exact needs.
            </p>
            <div className='flex gap-3 text-2xl'>
                <a href='#'><FaWhatsapp /></a>
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
            </div>
        </div>
        <div className='flex flex-1 items-start justify-between'>
          <div className='flex flex-col gap-8'>
            <h1 className='text-[18px] font-bold'>Quick Links</h1>
            <div className='space-y-1'>
              {
                links.map((link) => (
                  <Link
                    to={link.path} 
                    key={link.path} 
                    className='flex flex-col hover:translate-x-1 transition-all duration-300'
                  >
                    {link.name}
                  </Link>
                ))
              }
            </div>
          </div>
          <div>
            <h1 className='text-[18px] font-bold mb-3'>Our Services</h1>
            <div className='space-y-1'>
              <p>Residential Solar installation</p>
              <p>Commercial Solar installation</p>
              <p>Industrial Solar installation</p>
              <p>maintenance</p>
            </div>
          </div>
          <div>
            <h1 className='text-[18px] font-bold mb-3'>Contact</h1>
            <div className='space-y-1'>
              <p>07058981653</p>
              <p>nwazuokejustice57@gmail.com</p>
              <p>62/65 Osusu Rd. Aba, Abia State</p>
              <p>We're Open 24/7</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-2 items-center border-t justify-center border-t-green-800 border-dotted text-sm'>
        <p>&copy; 2026 <span className='font-semibold text-[20px] pr-4'>Solar Prime.</span> All Rights Reserved.</p>
        <p className='text-green-900 border-l border-l-green-700 pl-4'>Clean Energy, Reliable Solutions</p>
      </div>
    </section>
  )
}

export default Footer
