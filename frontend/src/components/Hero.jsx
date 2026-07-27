function Hero() {
  return (
    <section className="bg-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-20">
            <div className="flex items-center justify-between">
                {/* left side */}
                <div className="max-w-xl">
                    <p className="text-green-600 font-bold">
                        Reliable Solar Solutions
                    </p>
                    <h1 className="text-5xl text-slate-900 font-bold mt-4">
                        Power Your Home With Clean Energy
                    </h1>
                    <p className="text-slate-600 mt-6">
                        Solar prime supplies premium solar panels, lithium batteries, inverters and professional installation services for your homes and businesses.
                    </p>
                    <div className="flex gap-4 mt-8">
                        <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                            Book Installation
                        </button>
                        <button className="border border-slate-900 rounded-lg px-6 py-3 hover:bg-slate-900 hover:text-white transition-all duration-300 font-semibold">
                            Explore Products
                        </button>
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