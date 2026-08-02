import React from 'react'
import { Icon } from 'lucide-react'


function TestimonialCard( {name, role, message, rating: Icon} ) {
  return (
    <div className='bg-gray-100 p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300'>
      <h2 className='text-2xl font-bold tracking-widest'>
        {name} 
      </h2>   

      <h3 className='font-semibold text-sm tracking-widest text-slate-500'>
        {role}  
      </h3>

      <p className='text-slate-600 leading-7 mt-4'>
        {message}
      </p>   
      
      <Icon 
        size={16}
        className='text-yellow-600 fill-current'
      />
    </div>
  )
}

export default TestimonialCard
