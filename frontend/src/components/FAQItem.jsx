import { LucideChevronDown } from 'lucide-react'
import React from 'react'

function FAQItem( {question, answer, isOpen} ) {
  return (
    <div className='p-6 rounded-lg shadow-sm mx-10 border'>
      <div className='flex justify-between bg-slate-300 py-6 px-2 rounded-md font-semibold'>
        <p> {question} </p>
        <LucideChevronDown />
      </div>
      {
        isOpen && (
            <p className='bg-white py-6 px-2 rounded-md'> {answer} </p>
        )
      }
    </div>
  )
}

export default FAQItem
