function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-extrabold tracking-wide">
                <span className="text-green-500">☀️</span> Solar Prime
            </h1>

            <div className="flex items-center gap-8">
                <ul className="flex gap-6">
                    <li className="hover:text-green-400 cursor-pointer transition-colors duration-300">
                        Home
                    </li>
                    <li className="hover:text-green-400 cursor-pointer transition-colors duration-300">
                        Services
                    </li>
                    <li className="hover:text-green-400 cursor-pointer transition-colors duration-300">
                        Product
                    </li>
                    <li className="hover:text-green-400 cursor-pointer transition-colors duration-300">
                        Projects
                    </li>
                    <li className="hover:text-green-400 cursor-pointer transition-colors duration-300">
                        About
                    </li>
                    <li className="hover:text-green-400 cursor-pointer transition-colors duration-300">
                        Contact
                    </li>
                </ul>

                <button className="bg-green-600 px-5 py-2 rounded-lg font-semibold hover:bg-green-700">
                    Get a free Quote
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar