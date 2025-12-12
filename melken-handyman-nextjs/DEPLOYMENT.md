# Deployment Guide - Melken Handyman Solutions

This guide will walk you through deploying your Next.js website to production.

## 🚀 Quick Deploy to Vercel (Recommended - 5 minutes)

Vercel is the easiest and fastest way to deploy Next.js applications. It's free for personal projects and offers:
- Automatic HTTPS/SSL
- Global CDN
- Automatic deployments on git push
- Free custom domain support
- Zero configuration needed

### Step 1: Push to GitHub

1. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name it: `melken-handyman-website`
   - Make it private or public (your choice)
   - Don't initialize with README (we already have one)

2. Push your code to GitHub:
```bash
cd melken-handyman-nextjs
git init
git add .
git commit -m "Initial commit - Melken Handyman Next.js website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/melken-handyman-website.git
git push -u origin main
```

### Step 2: Deploy to Vercel

1. Go to https://vercel.com/signup
2. Sign up with your GitHub account
3. Click "Add New Project"
4. Import your `melken-handyman-website` repository
5. Vercel will auto-detect Next.js settings:
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`
6. Click "Deploy"
7. Wait 2-3 minutes for deployment to complete

### Step 3: Connect Your Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your domain: `melkenhandyman.com`
4. Vercel will provide DNS records to add:

**For Namecheap, GoDaddy, or other registrars:**

Add these DNS records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. Wait 24-48 hours for DNS propagation (usually faster)
6. Vercel will automatically provision SSL certificate

### Step 4: Update Jobber

Once your new site is live:
1. Update any links in Jobber to point to your new site
2. Consider keeping Jobber for scheduling/invoicing only
3. Remove or redirect the old Jobber template site

---

## 🔧 Alternative: Deploy to Netlify

If you prefer Netlify over Vercel:

### Step 1: Build Settings

1. Go to https://netlify.com
2. Sign up with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose your GitHub repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18 or higher

### Step 2: Environment Variables

No environment variables needed yet (until you add email service)

### Step 3: Custom Domain

1. Go to "Domain settings"
2. Add custom domain: `melkenhandyman.com`
3. Follow DNS configuration instructions
4. Netlify will auto-provision SSL

---

## 📧 Setting Up Contact Form Email

Your contact form currently logs to console. To receive actual emails:

### Option 1: Resend (Recommended - Free tier)

1. Sign up at https://resend.com
2. Verify your domain or use their test domain
3. Get your API key
4. Install Resend:
```bash
npm install resend
```

5. Create API route `app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();
    
    const { data, error } = await resend.emails.send({
      from: 'Website <onboarding@resend.dev>', // Use your domain after verification
      to: ['kfelder@melkenhandyman.com'],
      subject: `New Contact Form: ${service}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

6. Update `components/ContactForm.tsx`:
```typescript
const onSubmit = async (data: FormData) => {
  setIsSubmitting(true);
  setSubmitStatus('idle');

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setSubmitStatus('success');
      reset();
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

7. Add environment variable in Vercel:
   - Go to Settings → Environment Variables
   - Add: `RESEND_API_KEY` = your API key
   - Redeploy

### Option 2: SendGrid

Similar process but use SendGrid's API instead.

---

## 📊 Adding Google Analytics

1. Get your GA4 Measurement ID from Google Analytics
2. Create `app/GoogleAnalytics.tsx`:
```typescript
'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
```

3. Add to `app/layout.tsx`:
```typescript
import GoogleAnalytics from './GoogleAnalytics';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
        {/* rest of your layout */}
      </body>
    </html>
  );
}
```

---

## ✅ Pre-Deployment Checklist

- [ ] Test all links and navigation
- [ ] Test contact form
- [ ] Verify all images load correctly
- [ ] Test on mobile devices
- [ ] Check SEO meta tags
- [ ] Set up email service
- [ ] Add Google Analytics
- [ ] Test in different browsers
- [ ] Verify phone number and email are correct
- [ ] Check all service descriptions
- [ ] Review FAQ answers
- [ ] Test service modals

---

## 🔄 Continuous Deployment

Once connected to Vercel/Netlify:
1. Make changes locally
2. Commit and push to GitHub
3. Automatic deployment happens
4. Live in 2-3 minutes

---

## 📞 Need Help?

If you run into issues:
1. Check Vercel/Netlify deployment logs
2. Check browser console for errors
3. Verify DNS settings with your registrar
4. Contact support if needed

Your website is ready to go live! 🚀

