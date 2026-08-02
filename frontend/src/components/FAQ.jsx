import { useState } from "react"
import faqs from "../data/FAQ"
import FAQItem from "./FAQItem"

function FAQ() {

  const [isOpen, setIsOpen] = useState(null)

  const open = (id) => {
    isOpen === null ? setIsOpen(id) : setIsOpen(null)
  }

  return (
    <section className="py-24 space-y-6">
        {
            faqs.map((faq) => (
                <div
                    key={faq.id}
                    onClick={() => open(faq.id)}
                    >
                    <FAQItem 
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
