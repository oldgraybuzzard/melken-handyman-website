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
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          What Our Customers Say
        </h2>

        {/* Google Rating Badge */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-gray-900">{rating.toFixed(1)}</span>
            <div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">Based on {totalReviews}+ Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Header with Avatar */}
              <div className="flex items-start gap-3 mb-4">
                {review.profilePhoto ? (
                  <img
                    src={review.profilePhoto}
                    alt={review.author}
                    className="w-12 h-12 rounded-full flex-shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
                    {review.initials}
                  </div>
                )}
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`}
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">{review.timeAgo}</p>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=melken+handyman+solutions"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-colors font-semibold mr-4"
          >
            Read More Reviews on Google
          </a>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold"
          >
            Get Your Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

