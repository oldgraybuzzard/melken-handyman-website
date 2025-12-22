export default function FeaturedSpecialties() {
  const specialties = [
    {
      title: 'Drywall Repair',
      description: 'Holes, dings, or cracks — we make your walls look like nothing ever happened.',
      icon: '🔨',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Electrical Repair',
      description: 'From switches to ceiling fans, we keep the lights on without the sparks.',
      icon: '⚡',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Home Maintenance',
      description: 'Changing filters, fixing squeaks, sealing leaks — we take care of the chores your home nags you about.',
      icon: '🏠',
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Furniture Assembly',
      description: 'Skip the instructions and the arguments — we\'ll put it together the right way.',
      icon: '🪛',
      gradient: 'from-purple-500 to-indigo-600'
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl transform translate-x-1/2"></div>
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Our Specialties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert craftsmanship in the services you need most
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {specialties.map((specialty, index) => (
            <article
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Icon with Gradient Background */}
              <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${specialty.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <div className="text-5xl" role="img" aria-label={`${specialty.title} icon`}>
                  {specialty.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center group-hover:text-primary transition-colors">
                {specialty.title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                {specialty.description}
              </p>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

