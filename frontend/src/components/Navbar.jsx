function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white px-8 py-4">
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">
                ☀️Solar Prime
            </h1>

            <div className="flex items-center gap-8">
                <ul className="flex gap-6">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>

                <button className="bg-green-600 px-5 py-2 rounded-lg font-semibold hover:bg-green-700">
                    Book installation
                </button>
            </div>
        </div>
    </nav>
  )
}

export default Navbar