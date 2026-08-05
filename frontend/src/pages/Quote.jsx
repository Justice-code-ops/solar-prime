import React from 'react'

function Quote() {
  return (
    <section className='min-h-screen py-20'>
      <div className='grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4'>
        <div>
          <h1>Power your future with Solar</h1>
          <p>Tell us a little about your home or business and we'll design a solar system tailored to your needs</p>
          <form action=""></form>
        </div>

        <div className='bg-slate-200 rounded-2xl h-[500] flex items-center justify-center'>
          Solar Image
        </div>
      </div>
    </section>
  )
}

export default Quote
