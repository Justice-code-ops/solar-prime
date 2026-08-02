import { useState } from "react"
import faqs from "../data/faqs"
import FAQItem from "./FAQItem"

function FAQ() {

  const [isOpen, setIsOpen] = useState(null)

  const open = (id) => {
    setIsOpen(isOpen === id ? null : id)
  }

  return (
    <section className="py-24 space-y-6">
        <div className="text-center mb-16">
            <h2 className="text-green-600 font-semibold text-xl uppercase tracking-widest">
                Frequently Asked Questions
            </h2>

            <p className='text-4xl font-bold mt-4 text-slate-900'>
                Everything you need to know before switching to solar
            </p>
        </div>
        <div>
            {
                faqs.map((faq) => (
                    <FAQItem 
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={isOpen === faq.id}
                        onClick={() => open(faq.id)}
                    />
                ))
            }
        </div>
    </section>
  )
}

export default FAQ
