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
        {
            faqs.map((faq) => (
                <div
                onClick={() => open(faq.id)}
                >
                    <FAQItem 
                        key={faq.id}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={isOpen === faq.id}
                        className="transition-all duration-300"
                    />
                </div>
            ))
        }
    </section>
  )
}

export default FAQ
