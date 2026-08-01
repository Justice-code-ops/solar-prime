import React from 'react'

function FeatureCard( {icon: Icon, title, description} ) {
  return (
    <div className='bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
      <Icon 
        size={48}
        className="text-green-600 mb-5"
      />

      <h3 className='text-xl font-bold text-slate-900 mb-4'> {title} </h3>

      <p className='text-slate-600 leading-7'> {description} </p>
    </div>
  )
}

export default FeatureCard
