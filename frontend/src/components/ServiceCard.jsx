import React from 'react'

function ServiceCard( {icon, title, description} ) {
  return (
    <div className='bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
      <div className='text-5xl mb-6'>
        {icon}
      </div>

      <h3 className='text-2xl font-bold text-slate-900 mb-4'>
        {title}
      </h3>

      <p className='text-slate-600 leading-7'>
        {description}
      </p>
    </div>
  )
}

export default ServiceCard
