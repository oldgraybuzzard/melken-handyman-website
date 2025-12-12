export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  platform: 'google' | 'angi';
}

export const reviews: Review[] = [
  {
    id: "1",
    author: "Sarah M.",
    rating: 5,
    date: "2024-11-15",
    text: "Kendall did an amazing job repairing our drywall after a plumbing leak. Professional, punctual, and the repair is invisible. Highly recommend!",
    platform: "google"
  },
  {
    id: "2",
    author: "Mike T.",
    rating: 5,
    date: "2024-11-10",
    text: "Great service! Kendall installed our smart thermostat and explained everything clearly. Very knowledgeable and fair pricing.",
    platform: "angi"
  },
  {
    id: "3",
    author: "Jennifer L.",
    rating: 5,
    date: "2024-11-05",
    text: "Excellent pressure washing service. Our driveway looks brand new! Kendall was professional and thorough.",
    platform: "google"
  },
  {
    id: "4",
    author: "Robert K.",
    rating: 5,
    date: "2024-10-28",
    text: "Kendall helped us with several aging-in-place modifications for my mother. Installed grab bars and improved lighting. Very respectful and professional.",
    platform: "angi"
  },
  {
    id: "5",
    author: "Amanda P.",
    rating: 5,
    date: "2024-10-20",
    text: "Fast, reliable, and affordable. Kendall fixed our gutters and installed gutter guards. No more clogged gutters!",
    platform: "google"
  },
  {
    id: "6",
    author: "David S.",
    rating: 5,
    date: "2024-10-15",
    text: "As a property manager, I've used Melken Handyman for multiple rental turnovers. Always reliable and thorough. Highly recommend!",
    platform: "angi"
  },
  {
    id: "7",
    author: "Lisa W.",
    rating: 5,
    date: "2024-10-08",
    text: "Kendall installed new light fixtures throughout our home. Beautiful work and very professional. Will definitely use again!",
    platform: "google"
  },
  {
    id: "8",
    author: "Tom H.",
    rating: 5,
    date: "2024-09-30",
    text: "Great experience! Kendall repaired our fence and did some minor plumbing work. Fair pricing and excellent quality.",
    platform: "angi"
  }
];

