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
    <section id="faq" className="py-16 bg-white">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 text-gray-900">
          Frequently asked questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <div
                key={faq.id}
                className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-8 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4 text-xl">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-600 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-8 pb-5 text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-10 py-5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-xl shadow-md"
          >
            Get an Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

