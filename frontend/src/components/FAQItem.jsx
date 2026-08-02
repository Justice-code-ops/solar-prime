import { ChevronDown } from 'lucide-react'

function FAQItem( {question, answer, isOpen, onClick, id} ) {
  return (
    <div onClick={onClick} className='p-6 rounded-lg shadow-md mx-10 mb-3'>
      <div className='flex justify-between bg-slate-300 py-6 px-2 rounded-md font-semibold'>
        <p> {question} </p>
        <ChevronDown className={`${isOpen ? "rotate-180" : ""} transition-all duration-300`}/>
      </div>
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 mt-4" : "max-h-0"}`}>
        {
            isOpen && (
                <p className='bg-white py-6 px-2 rounded-md text-slate-600 leading-7'> {answer} </p>
            )
        }
      </div>
    </div>
  )
}

export default FAQItem
