'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ContactForm() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Get an Estimate
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Fill out the form below and we'll get back to you shortly
        </p>

        {/* Jobber Embedded Form */}
        <div className="bg-gray-50 rounded-lg p-6 md:p-8">
          <div id="b44c6628-bedb-4fef-ba53-8a664d11ed6f-1957366"></div>

          {/* Load Jobber CSS */}
          <link
            rel="stylesheet"
            href="https://d3ey4dbjkt2f6s.cloudfront.net/assets/external/work_request_embed.css"
            media="screen"
          />

          {/* Load Jobber Script */}
          <Script
            src="https://d3ey4dbjkt2f6s.cloudfront.net/assets/static_link/work_request_embed_snippet.js"
            strategy="lazyOnload"
            data-clienthub_id="b44c6628-bedb-4fef-ba53-8a664d11ed6f-1957366"
            data-form_url="https://clienthub.getjobber.com/client_hubs/b44c6628-bedb-4fef-ba53-8a664d11ed6f/public/work_request/embedded_work_request_form?form_id=1957366"
          />
        </div>
      </div>
    </section>
  );
}

