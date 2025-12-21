# Google Reviews Setup

This website automatically fetches and displays Google reviews using the Google Places API.

## Setup Instructions

### 1. Add Your API Key

Open the `.env.local` file and replace `paste_your_actual_api_key_here` with your actual Google Places API key:

```
GOOGLE_PLACES_API_KEY=YOUR_ACTUAL_API_KEY_HERE
GOOGLE_PLACE_ID=ChIJ10rMsIXcPIEREVZuuoIHm4I
```

### 2. Restart the Development Server

After adding your API key, restart the dev server:

```bash
npm run dev
```

### 3. Verify It's Working

1. Open http://localhost:3001
2. Scroll to the Reviews section
3. You should see your latest Google reviews automatically loaded
4. The rating and review count should match your Google Business Profile

## How It Works

- **API Route**: `/app/api/reviews/route.ts` fetches reviews from Google Places API
- **Caching**: Reviews are cached for 1 hour to avoid hitting API limits
- **Fallback**: If the API fails, it shows pre-defined fallback reviews
- **Security**: API key is stored server-side only (never exposed to browser)
- **Automatic**: Reviews update automatically when users visit the page

## Features

✅ Automatically fetches latest reviews from Google  
✅ Shows actual star ratings (1-5 stars)  
✅ Displays reviewer profile photos (if available)  
✅ Shows relative time ("2 weeks ago", etc.)  
✅ Caches results for performance  
✅ Secure - API key never exposed to client  

## Troubleshooting

**Reviews not showing?**
1. Check that your API key is correct in `.env.local`
2. Make sure the Places API is enabled in Google Cloud Console
3. Check the browser console for errors (F12 → Console tab)
4. Verify your API key has proper restrictions (Places API only)

**Still showing old reviews?**
- Reviews are cached for 1 hour. Wait an hour or restart the server to clear cache.

## API Limits

Google Places API free tier includes:
- $200 free credit per month
- Place Details requests cost $0.017 per request
- With 1-hour caching, you'll use ~720 requests/month (well within free tier)

## For Production (Vercel Deployment)

When deploying to Vercel:

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add these variables:
   - `GOOGLE_PLACES_API_KEY` = your API key
   - `GOOGLE_PLACE_ID` = ChIJ10rMsIXcPIEREVZuuoIHm4I
4. Redeploy your site

The reviews will automatically work in production!

