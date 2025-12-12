'use client';

export default function Reviews() {
  const reviews = [
    {
      text: "Fantastic service! Very professional and responsible handyman. He did an excellent job and took care of everything from start to finish. I'm very satisfied with his work and highly recommend him to anyone looking for quality and reliability.",
      author: "Milad Elias",
      timeAgo: "2 months ago"
    },
    {
      text: "This was an amazing experience starting from the time I submitted my information until the job was done! Once I submitted the information for a quote I was quickly greeted with a phone call to confirm my issues and needs and just wanted a better understanding of what I needed serviced. Once that was...",
      author: "calvin bolden",
      timeAgo: "2 months ago",
      expandable: true
    },
    {
      text: "Great job. On time and efficient. Time estimate for the project was right on. He did all I wanted plus fixed a few spots I was not aware of. Will definitely use them again for other handy work.",
      author: "Frank Dowler",
      timeAgo: "3 months ago"
    }
  ];

  return (
    <section id="reviews" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Reviews
        </h2>
        <p className="text-center text-gray-600 mb-12">
          What Our Customers Are Saying
        </p>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4">{review.text}</p>

              {/* Author */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <p className="font-semibold text-gray-900">{review.author}</p>
                <p className="text-sm text-gray-500">{review.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

