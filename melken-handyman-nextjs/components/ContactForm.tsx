'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const jobberFormUrl = 'https://clienthub.getjobber.com/client_hubs/b44c6628-bedb-4fef-ba53-8a664d11ed6f/public/work_request/embedded_work_request_form?form_id=1957366';

  const openModal = () => {
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-gray-900">
          Get an Estimate
        </h2>
        <p className="text-center text-gray-600 text-xl md:text-2xl mb-12">
          Click the button below to request a free estimate
        </p>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <button
            onClick={openModal}
            className="inline-block px-12 py-6 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-bold text-2xl shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Request Your Free Estimate
          </button>

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

      {/* Modal Overlay */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-700 transition-colors text-2xl font-bold"
              aria-label="Close"
            >
              ×
            </button>

            {/* Iframe Container */}
            <div className="w-full h-[90vh] overflow-auto">
              <iframe
                src={jobberFormUrl}
                className="w-full h-full border-0"
                title="Request Estimate Form"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

