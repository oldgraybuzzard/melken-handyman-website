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
    <section id="contact" className="py-16 bg-white">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 text-gray-900">
          Get an Estimate
        </h2>
        <p className="text-center text-gray-600 text-xl mb-12">
          Fill out the form below and we'll get back to you shortly
        </p>

        {/* Jobber Embedded Form */}
        <div className="bg-gray-50 rounded-lg p-6 md:p-8">
          <div id="b44c6628-bedb-4fef-ba53-8a664d11ed6f-1957366"></div>
        </div>
      </div>
    </section>
  );
}

