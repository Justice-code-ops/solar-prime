import { useState } from "react"
import InputField from "../components/InputField"

function Quote() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    budget: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = (event) => {
    event.preventDefault()

    setIsSubmitted(true)

    console.log(isSubmitted)
  }

  return (
    <section className='min-h-screen py-20'>
      <div className='grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 mt-6'>
        <div>
          <div className="text-center space-y-3">
            <h1 className="text-2xl text-slate-900 uppercase font-bold ">Power your future with Solar</h1>
            <p>
              Tell us a little about your home or business and we'll design a solar system tailored to your needs
            </p>
          </div>

          {
            !isSubmitted ? (

              <form onSubmit={handleSubmit}>
                <InputField
                  label="Full Name"
                  placeholder="John Doe"
                  name="name"
                  required
                  onChange={handleChange}
                />

                <InputField 
                  label={"Email Address"}
                  type="email"
                  placeholder={"example@gmail.com"}
                  name={"email"}
                  required
                  onChange={handleChange}
                />

                <InputField 
                  label={"Phone Number"}
                  type="tel"
                  name={"phone"}
                  placeholder={"+234 812 345 6789"}
                  onChange={handleChange}
                />

                <InputField 
                  label={"Address"}
                  placeholder={"Enter your Address"}
                  name={"address"}
                  required
                  onChange={handleChange}
                />

                <InputField 
                  label={"Estimated budget"}
                  type="number"
                  placeholder={"Enter your budget"}
                  name="budget"
                  min='1000'
                  step='1000'
                  required
                  onChange={handleChange}
                />

                <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg w-full my-10">
                  Request Quote
                </button>
              </form>
            ) : (
              <div className="animate-fade-in-up flex flex-col items-center justify-center text-center min-h-100 px-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">✅</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Quote Request Recieved
                </h2>

                <p className="mt-4 text-slate-600 leading-7 max-w-md">
                  Thankyou for choosing Solar Prime, we'll review your request and get back to you immediately.
                </p>
              </div>
            )
          }

        </div>

        <div className='bg-slate-200 rounded-2xl h-125 flex flex-col gap-8 items-center justify-center'>
          <div className='rounded-2xl overflow-hidden'>
            <img 
              src="https://www.sepco-solarlighting.com/hubfs/Blog_Pics/Solar_on_Roof.jpeg" 
              alt="Solar Installation" 
            />
          </div>
          <h2>Benefits</h2>
        </div>
      </div>
    </section>
  )
}

export default Quote
