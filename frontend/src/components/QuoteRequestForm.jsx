import { useState } from "react"

function QuoteRequestForm( {productName} ) {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Quote Request:", {
        productName,
        ...formData
    })

    alert("Quote Request Submitted!")

    setFormData({
        name: '',
        phone: '',
        email: '',
        message: ''
    })
  }

  return (
    <div className="mt-16 bg-white p-6 md:p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-slate-900">
            Request a Quote
        </h2>

        <p className="text-slate-600 mt-2">
            Tell us what you need and leave the rest for us
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    product
                </label>
                <input 
                    type='text'
                    value={productName}
                    readOnly
                    className="w-full border border-slate-300 rounded-lg py-3 px-4 bg-slate-100 text-slate-700"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                </label>
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full border border-slate-300 rounded=lg py-3 px-4 outline-none focus:border-green-600"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Phone Number
                </label>
                <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone Number"
                    className="w-full border border-slate-300 rounded=lg py-3 px-4 outline-none focus:border-green-600"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email
                </label>
                <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your Email"
                    className="w-full border border-slate-300 rounded=lg py-3 px-4 outline-none focus:border-green-600"
                />
            </div>

            <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                </label>
                <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you need..."
                    className="w-full border border-slate-300 rounded=lg py-3 px-4 outline-none focus:border-green-600"
                ></textarea>
            </div>

            <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-allduration-300"
            >
                Submit Quote Request
            </button>
        </form>
    </div>
  )
}

export default QuoteRequestForm