import { Link } from "react-router-dom"

function ProductCard( {image, name, description, price, id} ) {
  return (
    <Link to={`/products/${id}`} className="block">
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <img 
            src={image} 
                alt={name} 
                className="w-full h-58 object-cover"
            />
            <div className="p-5">
                <h3 className="text-xl font-bold text-slate-900">
                    {name}
                </h3>
                <p className="text-slate-600 mt-2">
                    {description}
                </p>
                <p className="text-2xl font-semibold text-slate-600">
                    {price}
                </p>
                <button className=" w-full mt-5 bg-green-600 hover:bg-green-700 text-white px-5 py-3 font-semibold rounded-lg transition-all duration-300">
                    Request Quote
                </button>
            </div>
        </div>
    </Link>
  )
}

export default ProductCard