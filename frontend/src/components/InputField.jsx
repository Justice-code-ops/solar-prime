import React from 'react'

function InputField( { label, ...inputProps } ) {
  return (
    <div className='flex flex-col gap-2 my-2'>
      <label className='font-medium text-slate-700'>
        {label}
      </label>

      <input 
        {...inputProps}
        className='border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md'
      />
    </div>
  )
}

export default InputField
