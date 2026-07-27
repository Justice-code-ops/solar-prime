import products from "../data/products";
import ProductCard from "./ProductCard";
import { useState } from "react";

function FeaturedProducts() {

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", ...new Set(products.map((product) => product.category))]

  const filteredProducts = products.filter((product) =>{
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <section className="bg-slate-100 py-20">
        <div className="max-w-xl mx-auto mb-10">
            <input 
                type="text"
                value={searchTerm}
                placeholder="Search Product..."
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border border-slate-300 py-3 px-4 outline-none focus:border-green-600 rounded-lg"
            />
        </div>
        <div className="flex fle-wrap justify-center mb-12 gap-3">
            {
                categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                            selectedCategory === category ? "bg-green-600 text-white border-green-600" : "bg-white text-slate-700 border-slate-300 hover:border-green-300 hover:text-green-600"
                        }`}
                    >
                        {category}
                    </button>
                ))
            }
        </div>
        <div className="max-w-7xl mx-auto px-8">
            <div className="text-center mb-12">
                <p className="text-green-600 font-semibold uppercase tracking-widest">
                    Solar Prime
                </p>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3">
                    Featured Products
                </h2>

                <p className="text-slate-600 max-w-2xl mt-t mx-auto">
                    Explore quality solar products carefully selected for reliable, efficient and long-lasting power solutions
                </p>
            </div>
            <div className="flex justify-center">
                {
                    filteredProducts.length === 0 && (
                        <p className="text-slate-600 mt-10ntext-center text-2xl font-bold capitalize">
                            No product Found!
                        </p>
                    )
                }
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {
                    filteredProducts.map((product) => (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            image={product.images[0]}
                            description={product.description}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default FeaturedProducts