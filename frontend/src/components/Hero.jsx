function Hero() {
  return (
    <section className="bg-slate-200 mt-12">
        <div className="max-w-7xl mx-auto px-8 py-20">
            <div className="flex items-center justify-between">
                {/* left side */}
                <div className="max-w-xl">
                    <p className="text-green-600 font-bold">
                        Reliable Solar Solutions
                    </p>
                    <h1 className="text-5xl text-slate-900 font-bold mt-4">
                        Power Your Homes & Businesses With Reliable Solar Energy
                    </h1>
                    <p className="text-slate-600 mt-6">
                        We design, supply, and install reliable solar energy systems that reduce electricity costs and keep your home or business powered every day.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                            Book Installation
                        </button>
                        <button className="border border-slate-900 rounded-lg px-6 py-3 hover:bg-slate-900 hover:text-white transition-all duration-300 font-semibold">
                            Explore Products
                        </button>
                    </div>
                    <div className="flex gap-6 mt-8 text-sm font-medium text-slate-700">
                        <span>✅Professional Installations</span>
                        <span>✅Premium Equipments</span>
                        <span>✅After Sales Support</span>
                    </div>
                </div>

                {/* right side  */}

                {/* <div>
                    <img 
                        src="./public/favicon.svg" 
                        alt="Solar installation" 
                        className="w-125"
                    />
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Hero