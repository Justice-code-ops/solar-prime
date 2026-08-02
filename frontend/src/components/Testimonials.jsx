import React from 'react'
import TestimonialCard from './TestimonialCard'
import testimonials from '../data/testimonials'

function Testimonials() {
  return (
    <section className='py-24 bg-white'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-16'>
                <p className='text-green-600 font-semi-bold tracking-widest uppercase'>
                    What Our Clients Say
                </p>

                <h2 className='text-4xl font-bold mt-4 text-slate-900'>
                    Trusted by home owners and businesses across Nigeria
                </h2>

                <p className='mt-6 max-w-3xl mx-auto text-slate-900 leading-8'>
                    Customer satisfaction is at the heart of everything we do. Here's what some of our customers have to say about working with Solar Prime.
                </p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 shadow-sm hover:shadow-xl'>
                {
                    testimonials.map((testimonial) => (
                        <TestimonialCard 
                            key={testimonial.name}
                            name={testimonial.name}
                            role={testimonial.role}
                            message={testimonial.message}
                            rating={testimonial.rating}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Testimonials
