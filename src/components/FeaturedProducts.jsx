import products from "../data/products";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section className="bg-slate-100 py-20">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {
                    products.map((product) => (
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