'use client';

import { useEffect, useRef } from 'react';

export default function ContactForm() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (scriptLoaded.current) return;

    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css';
    link.media = 'screen';
    document.head.appendChild(link);

    // Load Script
    const script = document.createElement('script');
    script.src = 'https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js';
    script.setAttribute('clienthub_id', 'b44c6628-bedb-4fef-ba53-8a664d11ed6f-1957366');
    script.setAttribute('form_url', 'https://clienthub.getjobber.com/client_hubs/b44c6628-bedb-4fef-ba53-8a664d11ed6f/public/work_request/embedded_work_request_form?form_id=1957366');
    script.async = true;

    document.body.appendChild(script);
    scriptLoaded.current = true;

    // Cleanup
    return () => {
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Get Your Free Estimate
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tell us about your project and we'll get back to you with a detailed estimate
          </p>
        </div>

        {/* Jobber Embedded Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
            <div
              id="b44c6628-bedb-4fef-ba53-8a664d11ed6f-1957366"
              className="jobber-form-container"
            ></div>
          </div>
        </div>

        {/* Additional Contact Options */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Prefer to talk? Give us a call!
          </p>
          <a
            href="tel:3213267555"
            className="inline-flex items-center px-10 py-5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            (321) 326-7555
          </a>
        </div>
      </div>
    </section>
  );
}

