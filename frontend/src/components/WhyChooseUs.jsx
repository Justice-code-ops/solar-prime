import features from "../data/feature"
import FeatureCard from "./FeatureCard"

function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
            <p className='text-green-600 font-semibold tracking-widest uppercase'>Why Choose Solar Prime</p>

            <h2 className='text-4xl font-bold mt-4 text-slate-900'>
                Powering your future with confidence
            </h2>

            <p className='mt-6 max-w-3xl mx-auto text-slate-600 leading-8'>
                Discover why thousands of customers trust Power Prime for their energy needs.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 shadow-sm hover:shadow-xl p-3">
            {
                features.map((feature) => (
                    <FeatureCard 
                        key={feature.title}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                    />
                ))
            }
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
