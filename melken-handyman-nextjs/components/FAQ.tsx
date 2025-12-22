'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const faqs = [
    {
      id: '1',
      question: 'What are your service areas?',
      answer: 'We serve a wide area, including surrounding suburbs. To check if we service your location, reach out to our team and we\'d be happy to assist you.'
    },
    {
      id: '2',
      question: 'How do you determine pricing for your services?',
      answer: 'Our pricing is based on the type of service, materials needed, and the overall scope of the job. We always provide transparent, upfront pricing before any work begins—no surprises.\n\nThat said, we never cut corners. Our commitment is to do the job right, with integrity and high-quality workmanship. If you\'re looking for the cheapest option or shortcuts, we may not be the right fit—but if you want it done properly, we\'re your team.'
    },
    {
      id: '3',
      question: 'How do I get in contact with you?',
      answer: 'If you\'d like to get scheduled in with us, please fill out our request form. Once we\'ve received the details of what you\'re looking for, we\'ll reach out to discuss next steps.'
    },
    {
      id: '4',
      question: 'What kind of services do you offer?',
      answer: 'We offer a wide range of general handyman services including drywall repair, pressure cleaning, gutter cleaning, light electrical and plumbing, appliance installation, smart home setup, rental turnovers, safety upgrades for aging-in-place, and more. We do not perform any licensed, structural, or hazardous work.'
    },
    {
      id: '5',
      question: 'Are you licensed and insured?',
      answer: 'In Florida, general handyman work under $2,500 does not require a license. We are fully insured and compliant with Florida regulations. Any work requiring a licensed contractor will be referred appropriately.'
    },
    {
      id: '6',
      question: 'What forms of payment do you accept?',
      answer: 'We accept cash, credit/debit cards, Zelle, Venmo, Apple Pay, and business checks (with prior approval). Clients using peer-to-peer apps assume all risks associated with those platforms.'
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`bg-white border-2 rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? 'border-primary shadow-lg' : 'border-gray-200 shadow-md hover:shadow-lg'
                }`}
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 md:px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-bold text-gray-900 pr-4 text-lg md:text-xl">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <ChevronDown
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-6 md:px-8 pb-6 text-gray-700 text-lg leading-relaxed whitespace-pre-line border-t border-gray-100 pt-6 animate-fade-in"
                    role="region"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3213267555"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-xl shadow-md hover:shadow-lg"
            >
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold text-xl shadow-lg hover:shadow-xl hover:scale-105 transform"
            >
              Get an Estimate
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

