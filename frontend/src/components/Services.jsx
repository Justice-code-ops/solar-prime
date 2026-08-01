import ServiceCard from "./ServiceCard"

function Services() {
  return (
    <section className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
            <p className='text-green-600 font-semibold tracking-widest uppercase'>
                Our Services
            </p>

            <h2 className='text-4xl font-bold mt-4 text-slate-900'>
                Complete Solar Solutions For Every Need
            </h2>

            <p className='mt-6 max-w-3xl mx-auto text-slate-600 leading-8'>
                From residential homes to large commercial facilities, we provide large reliable energy solutions designed to reduce electricity costs and ensure uninterrupted power.
            </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
                icon="🏠"
                title="Residential Solar"
                description="Reliable Solar Systems designed to power homes efficiently while reducing electricity costs"
            />

            <ServiceCard 
                icon="🏢"
                title="Commercial Solar"
                description="Energy solutions that helps businesses reduce operational costs and improve energy independence"
            />

            <ServiceCard 
                icon="🏭"
                title="Industrial Solar"
                description="Scalable Solar Systems engineered for factories, schools farms and large facilities."
            />

            <ServiceCard 
                icon="🔧"
                title="Maintenance & Support"
                description="Professional inspections, maintenance and after-sales support to keep your systems performing."
            />
        </div>
      </div>
    </section>
  )
}

export default Services
