'use client';

import { useState } from 'react';
import { faqs, faqCategories } from '@/lib/data/faqs';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const categoryIcons: Record<string, string> = {
    'General Questions': '🔧',
    'Pricing & Payment': '💳',
    'Service Details': '🏠',
    'Customer Experience': '🤝',
    'Specialty Services': '⭐'
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-gray-50">
      <div className="container max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12">
          {faqCategories.map((category) => {
            const categoryFaqs = faqs.filter((faq) => faq.category === category);

            return (
              <div key={category}>
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-4xl">{categoryIcons[category]}</span>
                  {category}
                </h3>

                <div className="space-y-4">
                  {categoryFaqs.map((faq) => {
                    const isOpen = openItems.includes(faq.id);

                    return (
                      <div
                        key={faq.id}
                        className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 hover:shadow-lg transition-all"
                      >
                        <button
                          onClick={() => toggleItem(faq.id)}
                          className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-blue-50 transition-colors"
                        >
                          <span className="font-bold text-gray-900 pr-4 text-lg">
                            {faq.question}
                          </span>
                          <ChevronDown
                            className={`h-6 w-6 text-blue-600 flex-shrink-0 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-8 pb-6 text-gray-700 leading-relaxed text-base bg-blue-50/50">
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-blue-100 text-lg mb-8">
            We're here to help! Contact us and we'll get back to you right away.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

