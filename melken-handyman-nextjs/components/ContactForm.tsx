export default function ContactForm() {
  const jobberFormUrl = 'https://clienthub.getjobber.com/client_hubs/b44c6628-bedb-4fef-ba53-8a664d11ed6f/public/work_request/new?form_id=1957366';

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900">
          Get an Estimate
        </h2>
        <p className="text-center text-gray-600 text-xl md:text-2xl mb-12">
          Click the button below to request a free estimate
        </p>

        {/* Large CTA Button to Jobber Form */}
        <div className="max-w-3xl mx-auto text-center">
          <a
            href={jobberFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-bold text-2xl shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Request Your Free Estimate
          </a>

          <p className="mt-8 text-gray-600 text-lg">
            Or call us directly at{' '}
            <a href="tel:4075020253" className="text-primary font-semibold hover:underline">
              (407) 502-0253
            </a>
          </p>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Fast Response</h3>
              <p className="text-gray-600 text-lg">We'll get back to you within 24 hours</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Free Estimates</h3>
              <p className="text-gray-600 text-lg">No obligation, completely free</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-2 text-gray-900">Quality Work</h3>
              <p className="text-gray-600 text-lg">Veteran-owned, trusted service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

