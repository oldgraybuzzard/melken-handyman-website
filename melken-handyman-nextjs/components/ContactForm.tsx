'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Phone, Mail, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // TODO: Replace with your actual form submission endpoint
      // For now, we'll simulate a submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Estimate
          </h2>
          <p className="text-xl text-gray-600">
            Ready to get started? Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-600 text-white rounded-xl shadow-lg">
                  <Phone className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Phone</h4>
                  <a
                    href="tel:4075020253"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-xl hover:underline"
                  >
                    (407) 502-0253
                  </a>
                  <p className="text-gray-600 mt-2">
                    Monday - Friday, 8 AM - 5 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-600 text-white rounded-xl shadow-lg">
                  <Mail className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Email</h4>
                  <button
                    onClick={() => {
                      window.location.href = 'mailto:kfelder@melkenhandyman.com';
                    }}
                    className="text-blue-600 hover:text-blue-700 font-semibold text-lg hover:underline"
                  >
                    Click to Email
                  </button>
                  <p className="text-gray-600 mt-2">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-600 text-white rounded-xl shadow-lg">
                  <MapPin className="h-7 w-7" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg">Service Areas</h4>
                  <p className="text-gray-700 text-lg">
                    Seminole County, FL<br />
                    Orange County, FL
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200">
              <h4 className="font-bold text-gray-900 mb-4 text-xl">Why Choose Us?</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl font-bold">✓</span>
                  <span className="text-lg">Veteran-owned and operated</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl font-bold">✓</span>
                  <span className="text-lg">Licensed and insured</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl font-bold">✓</span>
                  <span className="text-lg">5-star customer reviews</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-600 text-2xl font-bold">✓</span>
                  <span className="text-lg">30-day workmanship warranty</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-2xl p-10 border border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-base font-semibold text-gray-900 mb-3">
                  Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-lg"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-base font-semibold text-gray-900 mb-3">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-lg"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-base font-semibold text-gray-900 mb-3">
                  Phone *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-lg"
                  placeholder="(407) 555-1234"
                />
                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.phone.message}</p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-base font-semibold text-gray-900 mb-3">
                  Service Needed *
                </label>
                <select
                  {...register('service')}
                  id="service"
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all text-lg"
                >
                  <option value="">Select a service...</option>
                  <option value="drywall">Drywall Repair</option>
                  <option value="pressure-cleaning">Pressure Cleaning</option>
                  <option value="gutter">Gutter Cleaning</option>
                  <option value="electrical">Light Electrical</option>
                  <option value="plumbing">Light Plumbing</option>
                  <option value="appliance">Appliance Installation</option>
                  <option value="smart-home">Smart Home Setup</option>
                  <option value="rental">Rental Turnover</option>
                  <option value="other">Other</option>
                </select>
                {errors.service && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.service.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-base font-semibold text-gray-900 mb-3">
                  Project Details *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all resize-none text-lg"
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 font-medium">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl font-bold text-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Get Free Estimate'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-6 bg-green-50 border-2 border-green-300 rounded-xl text-green-800 font-semibold text-lg">
                  ✅ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-6 bg-red-50 border-2 border-red-300 rounded-xl text-red-800 font-semibold text-lg">
                  ❌ Something went wrong. Please try again or call us directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

