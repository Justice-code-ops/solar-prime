import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { links } from '../data/links';

function Footer() {
  return (
    <section className='flex flex-col bg-slate-900 text-green-800 p-8'>
      <div className='flex gap-8 py-3'>
        <div className='flex flex-col gap-5'>
            <h1 className='font-semibold text-2xl'>Solar Prime</h1>
            <p className='text-sm max-w-xs'>
                Solar Prime is a trusted provider of custom residential and commercial solar solutions. From upfront energy audits to professional installation and ongoing support, we build dependable power systems tailored to your exact needs.
            </p>
            <div className='flex gap-3 text-2xl'>
                <FaWhatsapp />
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>
        </div>
        <div className='flex flex-1 items-start justify-between'>
          <div className='flex-flex-col gap-8'>
            <h1 className='text-[18px] font-bold mb-3'>Quick Links</h1>
            <div className='space-y-1'>
              {
                links.map((link) => (
                  <Link to={link.path} key={link.path}>
                    <h1 className='hover:scale-105 transition-all duration-300'> {link.name} </h1>
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
              <p>Phone</p>
              <p>Email</p>
              <p>Address</p>
              <p>Business Hours</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-2 items-center border-t border-t-green-800 border-dotted'>
        <p>&copy;</p>
        <p> 2026 </p>
        <p className='font-semibold text-[20px]'>Solar Prime.</p>
        <p>All Rights Reserved.</p>
      </div>
    </section>
  )
}

export default Footer
