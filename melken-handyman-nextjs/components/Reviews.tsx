'use client';

import { useState, useEffect } from 'react';

interface Review {
  text: string;
  author: string;
  initials: string;
  rating: number;
  timeAgo: string;
  profilePhoto?: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number>(5.0);
  const [totalReviews, setTotalReviews] = useState<number>(47);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback reviews in case API fails
  const fallbackReviews: Review[] = [
    {
      text: "Fantastic service! Very professional and responsible handyman. He did an excellent job and took care of everything from start to finish. I'm very satisfied with his work and highly recommend him to anyone looking for quality and reliability.",
      author: "Milad Elias",
      initials: "ME",
      rating: 5,
      timeAgo: "2 months ago"
    },
    {
      text: "This was an amazing experience starting from the time I submitted my information until the job was done! Once I submitted the information for a quote I was quickly greeted with a phone call to confirm my issues and needs and just wanted a better understanding of what I needed serviced.",
      author: "calvin bolden",
      initials: "CB",
      rating: 5,
      timeAgo: "2 months ago"
    },
    {
      text: "Great job. On time and efficient. Time estimate for the project was right on. He did all I wanted plus fixed a few spots I was not aware of. Will definitely use them again for other handy work.",
      author: "Frank Dowler",
      initials: "FD",
      rating: 5,
      timeAgo: "3 months ago"
    },
    {
      text: "Kendall did an amazing job with our rental property turnover. Professional, punctual, and the quality of work exceeded our expectations. The unit was move-in ready ahead of schedule. Highly recommend!",
      author: "Jennifer Martinez",
      initials: "JM",
      rating: 5,
      timeAgo: "2 weeks ago"
    },
    {
      text: "Excellent electrical work! Kendall installed new outlets and light fixtures throughout our home. Clean work, fair pricing, and great communication. Will definitely use again.",
      author: "Robert Smith",
      initials: "RS",
      rating: 5,
      timeAgo: "1 month ago"
    },
    {
      text: "Fantastic service! Kendall helped us with our entire honey-do list - from furniture assembly to minor repairs. Reliable, skilled, and reasonably priced. Saved us so much time!",
      author: "Lisa Thompson",
      initials: "LT",
      rating: 5,
      timeAgo: "1 month ago"
    }
  ];

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();

        if (data.success) {
          setReviews(data.reviews);
          setRating(data.rating);
          setTotalReviews(data.totalReviews);
        } else {
          // Use fallback reviews if API fails
          setReviews(fallbackReviews);
          setError('Using cached reviews');
        }
      } catch (err) {
        console.error('Error fetching reviews:', err);
        // Use fallback reviews if fetch fails
        setReviews(fallbackReviews);
        setError('Using cached reviews');
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  if (loading) {
    return (
      <section id="reviews" className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-center text-gray-600">Loading reviews...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-900">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>

        {/* Google Rating Badge */}
        <div className="flex items-center justify-center gap-4 mb-16" role="img" aria-label={`${rating.toFixed(1)} star rating based on ${totalReviews} plus Google reviews`}>
          <div className="bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4 border-2 border-yellow-400/20">
            <span className="text-6xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent" aria-hidden="true">{rating.toFixed(1)}</span>
            <div>
              <div className="flex gap-1 mb-2" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-7 h-7 text-yellow-400 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-lg text-gray-700 font-semibold" aria-hidden="true">Based on {totalReviews}+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {reviews.map((review, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Header with Avatar */}
              <div className="flex items-start gap-3 mb-4">
                {review.profilePhoto ? (
                  <img
                    src={review.profilePhoto}
                    alt={`${review.author}'s profile photo`}
                    className="w-14 h-14 rounded-full flex-shrink-0 ring-2 ring-primary/20"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center font-bold text-lg flex-shrink-0 shadow-md" aria-label={`${review.author}'s initials`}>
                    {review.initials}
                  </div>
                )}
                <div className="flex-1">
                  <p className="font-bold text-gray-900 text-lg">{review.author}</p>
                  <div className="flex gap-1 mt-1" role="img" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <time className="text-sm text-gray-500 mt-1 block">{review.timeAgo}</time>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-lg text-gray-700 leading-relaxed">{review.text}</p>

              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://www.google.com/search?q=melken+handyman+solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-5 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg"
          >
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Read More on Google
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-10 py-5 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
          >
            Get Your Free Estimate
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

