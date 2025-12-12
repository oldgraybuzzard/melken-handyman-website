export default function FeaturedSpecialties() {
  const specialties = [
    {
      title: 'Drywall Repair',
      description: 'Holes, dings, or cracks — we make your walls look like nothing ever happened.',
      icon: '🔨'
    },
    {
      title: 'Electrical Repair',
      description: 'From switches to ceiling fans, we keep the lights on without the sparks.',
      icon: '⚡'
    },
    {
      title: 'Home Maintenance',
      description: 'Changing filters, fixing squeaks, sealing leaks — we take care of the chores your home nags you about.',
      icon: '🏠'
    },
    {
      title: 'Furniture Assembly',
      description: 'Skip the instructions and the arguments — we\'ll put it together the right way.',
      icon: '🪛'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our specialties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="text-5xl mb-4">{specialty.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {specialty.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

