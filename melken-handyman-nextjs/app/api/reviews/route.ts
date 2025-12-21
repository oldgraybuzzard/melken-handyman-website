import { NextResponse } from 'next/server';

// Cache reviews for 1 hour to avoid hitting API limits
let cachedReviews: any = null;
let cacheTime: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

export async function GET() {
  try {
    // Check if we have cached reviews that are still valid
    const now = Date.now();
    if (cachedReviews && (now - cacheTime) < CACHE_DURATION) {
      return NextResponse.json({
        success: true,
        reviews: cachedReviews.reviews,
        rating: cachedReviews.rating,
        totalReviews: cachedReviews.totalReviews,
        cached: true
      });
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const placeId = process.env.GOOGLE_PLACE_ID;

    if (!apiKey || !placeId) {
      throw new Error('Missing Google Places API configuration');
    }

    // Fetch place details including reviews
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Google Places API error: ${data.status}`);
    }

    const result = data.result;
    
    // Format reviews for our component
    const formattedReviews = (result.reviews || []).map((review: any) => ({
      text: review.text,
      author: review.author_name,
      initials: review.author_name
        .split(' ')
        .map((n: string) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2),
      rating: review.rating,
      timeAgo: review.relative_time_description,
      profilePhoto: review.profile_photo_url
    }));

    // Cache the results
    cachedReviews = {
      reviews: formattedReviews,
      rating: result.rating || 5.0,
      totalReviews: result.user_ratings_total || 0
    };
    cacheTime = now;

    return NextResponse.json({
      success: true,
      reviews: formattedReviews,
      rating: result.rating || 5.0,
      totalReviews: result.user_ratings_total || 0,
      cached: false
    });

  } catch (error: any) {
    console.error('Error fetching Google reviews:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to fetch reviews'
      },
      { status: 500 }
    );
  }
}

