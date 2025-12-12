# Google Reviews API Integration Setup

## 🚀 Automatic Google Reviews Integration

Your website now has **automatic Google My Business API integration** that fetches real reviews every hour!

## 📋 Setup Steps (Required)

### Step 1: Google Cloud Platform Setup

1. **Create Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Click "New Project"
   - Name it "Melken Handyman Reviews"
   - Note your Project ID

2. **Enable APIs**:
   - In your project, go to "APIs & Services" > "Library"
   - Search and enable these APIs:
     - **Google My Business API**
     - **Google My Business Business Information API**

3. **Create API Key**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key (keep it secure!)

### Step 2: Get Your Business IDs

1. **Find Your Account ID**:
   - Go to [Google My Business](https://business.google.com/)
   - In the URL, note the account ID (long number)

2. **Find Your Location ID**:
   - Use this API call in your browser (replace YOUR_API_KEY):
   ```
   https://mybusinessbusinessinformation.googleapis.com/v1/accounts/YOUR_ACCOUNT_ID/locations?key=YOUR_API_KEY
   ```
   - Find your business in the response and copy the location ID

### Step 3: Configure Your Website

1. **Update API Configuration**:
   - Open `scripts.js`
   - Find the `GOOGLE_API_CONFIG` section
   - Replace the placeholder values:

```javascript
const GOOGLE_API_CONFIG = {
    apiKey: 'AIzaSyC-your-actual-api-key-here',
    accountId: '123456789012345678',
    locationId: 'ChIJabcdefghijklmnop',
    maxReviews: 10
};
```

2. **Test the Integration**:
   - Save the file and refresh your website
   - Check browser console for any errors
   - Reviews should load automatically

## 🎯 Angi Reviews Integration

### Manual Angi Reviews Setup

1. **Access Angi Admin Panel**:
   - Add `?admin=true` to your website URL
   - Example: `https://yourwebsite.com?admin=true`

2. **Get Your Angi Reviews**:
   - Go to your Angi business profile
   - Copy review text, customer names, and ratings

3. **Update Angi Reviews**:
   - Use the admin panel to paste reviews in JSON format:

```json
[
  {
    "name": "Customer Name",
    "initials": "CN",
    "rating": 5,
    "date": "1 week ago",
    "text": "Paste actual Angi review text here",
    "verified": true
  }
]
```

## ✅ Features Implemented

### Automatic Google Reviews
- ✅ **Real-time API Integration**: Fetches actual Google reviews every hour
- ✅ **Automatic Updates**: No manual intervention needed
- ✅ **Error Handling**: Graceful fallbacks if API is unavailable
- ✅ **Caching**: Stores reviews locally for faster loading
- ✅ **Rate Limiting**: Respects API limits

### Manual Angi Reviews
- ✅ **Admin Interface**: Easy-to-use panel for updating Angi reviews
- ✅ **JSON Format**: Structured data input
- ✅ **Persistent Storage**: Reviews save automatically
- ✅ **Platform Badges**: Clear distinction between Google and Angi reviews

### Combined Display
- ✅ **Unified Rating**: Calculates overall rating from both platforms
- ✅ **Platform Indicators**: Shows which platform each review is from
- ✅ **Responsive Design**: Works perfectly on all devices
- ✅ **Analytics Tracking**: Monitors review engagement

## 🔧 Troubleshooting

### Common Issues:

1. **"API Error 403"**:
   - Check if APIs are enabled in Google Cloud
   - Verify API key is correct
   - Ensure business is verified

2. **"No reviews found"**:
   - Verify Account ID and Location ID are correct
   - Check if business has public reviews
   - Ensure API key has proper permissions

3. **Reviews not updating**:
   - Check browser console for errors
   - Verify API configuration
   - Clear browser cache

### Testing Your Setup:

1. Open browser developer tools (F12)
2. Go to Console tab
3. Refresh your website
4. Look for messages like:
   - "Fetching Google reviews..."
   - "Google reviews fetched successfully: X"
   - Any error messages

## 📞 Support

If you need help with the setup:

1. **Check the browser console** for error messages
2. **Verify your API credentials** are correct
3. **Test API endpoints** manually first
4. **Contact me** with specific error messages

## 🚀 Benefits of This Implementation

- **Real Google Reviews**: Shows actual customer feedback
- **Automatic Updates**: No manual work required
- **Professional Display**: Beautiful, responsive design
- **SEO Benefits**: Rich snippets and local SEO boost
- **Trust Building**: Authentic social proof
- **Analytics**: Track review engagement
- **Dual Platform**: Both Google and Angi reviews
- **Error Resilience**: Works even if API is temporarily down

Your website now has enterprise-level review integration that will significantly boost credibility and conversions!
