import { useState } from "react"
import InputField from "../components/InputField"
import { initialFormData } from "../data/formData"

function Quote() {

  const [formData, setFormData] = useState(initialFormData)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitted(false)
    setResponseMessage('')
    setErrorMessage('')
    
    try {
      setIsLoading(true)
      const response = await fetch("http://127.0.0.1:8000/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
  
      })

      if(!response.ok){
        const data = await response.json()
        if(data?.detail?.[0]?.type === "enum" && data?.detail?.[0]?.loc?.[1] === "service_type"){
          setErrorMessage("Please select either residential or commercial service type")
        }else{
          setErrorMessage(data?.detail?.[0]?.msg ?? "We couldn't submit your form right now, Please try again in a moment...")
        }
        console.log(data)
        return
      }

      const data = await response.json()
      if (data.eligible){
        setIsSubmitted(true)
      }else{
        setResponseMessage(data.message)
      }
      console.log(formData)

    } catch (error) {
      setErrorMessage("We couldn't submit your form right now, Please try again in a moment...")
      console.error("Error submitting form:", error)
    }finally{
      setIsLoading(false)
    }

  }

  return (
    <section className='min-h-screen py-20 scroll-auto'>
      <div className='grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 mt-6'>
        <div>
          <div className="text-center space-y-3">
            <h1 className="text-2xl text-slate-900 uppercase font-bold ">Power your future with Solar</h1>
            <p>
              Tell us a little about your home or business and we'll design a solar system tailored to your needs
            </p>
          </div>
          {
            errorMessage ? (
              <div className="animate-fade-in-up flex flex-col items-center justify-center mt-10">
                <span className="text-3xl">❌</span>
                <h2 className="text-xl font-semibold text-slate-700 text-center">{errorMessage}</h2>
              </div>
            ) : responseMessage ? (
              <div className="animate-fade-in-up flex flex-col items-center justify-center text-center min-h-100 px-6">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">⏳</span>
                </div>

                <h2 className="text-3xl font-bold text-slate-900">
                  Request under review
                </h2>

                <p className="mt-4 text-slate-600 leading-7 max-w-md">
                  {responseMessage}
                </p>
              </div>
            ) : !isSubmitted ? (
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

                <label className='font-medium text-slate-700 block'>Service Type</label>
                <select
                  name="service_type"
                  onChange={handleChange}
                  required
                  value={formData.service_type}
                  className="border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-md w-full mt-3"
                >
                  <option value="" disabled>--Select a service Type--</option>

                  <option value="pizza">Residential</option>

                  <option value="commercial">Commercial</option>

                  <option value='industrial'>Industrial</option>
                </select>

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

                <button 
                  type="submit" 
                  className={`text-white font-semibold py-3 px-6 rounded-lg w-full my-10 ${isLoading ? ` disabled:bg-green-600/80 disabled:cursor-not-allowed` : `bg-green-600 hover:bg-green-700`}`}
                  disabled={isLoading}
                >
                  {!isLoading ? `Request Quote` : `Submitting...`}
                </button>
              </form>
            ) : (
              <div className="animate-fade-in-up flex flex-col items-center justify-center text-center min-h-100 px-6">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
                  <span className="text-3xl">✅</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Quote Request Received
                </h2>

                <p className="mt-4 text-slate-600 leading-7 max-w-md">
                  Thank you for choosing Solar Prime, we'll review your request and get back to you immediately.
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
