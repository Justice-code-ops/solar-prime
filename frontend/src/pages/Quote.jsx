import InputField from "../components/InputField"

function Quote() {
  return (
    <section className='min-h-screen py-20'>
      <div className='grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-4 mt-6'>
        <div>
          <div className="text-center space-y-3">
            <h1 className="text-2xl text-slate-900 uppercase font-semibold ">Power your future with Solar</h1>
            <p>
              Tell us a little about your home or business and we'll design a solar system tailored to your needs
            </p>
          </div>

          <form action="">
            <InputField
              label="Full Name"
              placeholder="John Doe"
              required
            />

            <InputField 
              label={"Email Address"}
              type="email"
              placeholder={"example@gmail.com"}
              required
            />

            <InputField 
              label={"Phone Number"}
              type="tel"
              placeholder={"+234 812 345 6789"}
            />

            <InputField 
              label={"Address"}
              placeholder={"Enter your Address"}
              required
            />

            <InputField 
              label={"Estimated budget"}
              placeholder={"Enter your budget"}
            />

            <button type="submit" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg w-full my-10">
              Request Quote
            </button>
          </form>
        </div>

        <div className='bg-slate-200 rounded-2xl h-[500] flex flex-col gap-8 items-center justify-center'>
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
