'use client';

export default function ContactForm() {
  const handleEmailClick = () => {
    const user = 'kfelder';
    const domain = 'melkenhandyman.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
          Get an Estimate
        </h2>

        <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 mb-6">
              Ready to get started? Contact us today for a free estimate!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a href="tel:4075020253" className="text-primary hover:underline text-lg">
                  (407) 502-0253
                </a>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <button onClick={handleEmailClick} className="text-primary hover:underline text-lg">
                  kfelder@melkenhandyman.com
                </button>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Service Areas</h3>
                <p className="text-gray-700">
                  Seminole County, Florida<br />
                  Orange County, Florida
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday<br />
                  8:00 AM - 5:00 PM
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col justify-center">
              <div className="bg-primary text-white rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="text-left space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">✓</span>
                    <span>Veteran-owned business</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">✓</span>
                    <span>Licensed & insured</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">✓</span>
                    <span>5-star rated service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 font-bold">✓</span>
                    <span>Transparent pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

