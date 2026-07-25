import { useParams } from "react-router-dom"
import products from "../data/products"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaArrowLeftLong } from "react-icons/fa6";
import QuoteRequestForm from "../components/QuoteRequestForm";

function ProductDetails() {

  const { id } = useParams()

  const product = products.find((product) => product.id === Number(id))

  const relatedProducts = products.filter((item) => item.category === product.category && product.id !== item.id)

  const [selectedImage, setSelectedImage] = useState(product.images[0])

  if(!product){
    return <h1 className="text-5xl text-slate-600 text-center mt-8">Product not Found!</h1>
  }
  return (
    <section className="flex items-start max-w-6xl mx-auto py-20 px-8">
      <Link to={'/'}>
        <div className="flex items-center justify-center w-12 h-12 border border-green-500 hover:bg-green-100 rounded-full absolute inset-5 transition-all duration-300">
          <FaArrowLeftLong className="text-slate-900"/>
        </div>
      </Link>
      <div className="grid md:grid-cols-2 gap-12">
        <img 
          src={selectedImage} 
          alt={product.name}
          className="w-full rounded-xl" 
        />
        <div className="flex-col gap-8 items-center">
          {
            product.images.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={product.name}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer shadow-2xl hover:scale-90 transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              />
            ))
          }
        </div>

        {
          relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">
                Related products
              </h2>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {
                  relatedProducts.map((related) => (
                    <Link
                      key={related.id}
                      to={`/products/${related.id}`}
                      className="block bg-white shadow-md overflow-hidden rounded-xl hover:shaow-lg transition"
                    >
                      <img 
                        src={related.images[0]}
                        alt={related.name}
                        className="w-full h-48 object-cover"
                      />

                      <div className="p-4">
                        <h3 className="font-semibold text-slate-900">
                          {related.name}
                        </h3>
                        <p className="text-green-600 mt-2 font-semibold">
                          {related.price}
                        </p>
                      </div>
                    </Link>
                  ))
                }
              </div>
            </div>
          )
        }

      </div>
      <div>
        <h1 className="text-4xl font-bold">
          {product.name}
        </h1>

        <p className="text-2xl font-semibold text-green-600 mt-4">
          {product.price}
        </p>

        <p className="text-gray-600 mt-8 leading-8">
          {product.description}
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Specifications
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {
              Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="rounded-lg bg-gray-100 p-4">
                  <p className="capitalize text-gray-500">
                    {key}
                  </p>
                  <p className="font-semibold">
                    {value}
                  </p>
                </div>
              ))
            }
          </div>
        </div>

        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Features
            </h2>

            <ul>
              {
                product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <span className="text-green-600">
                      ✅
                    </span>

                    <span>
                      {feature}
                    </span>
                  </li>
                ))
              }
            </ul>
        </div>

        <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 transition rounded-lg">
          Request Quote
        </button>
        <QuoteRequestForm productName={product.name}/>
      </div>
    </section>
  )
}

export default ProductDetails