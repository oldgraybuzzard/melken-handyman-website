# Melken Handyman Solutions - Next.js Website

Modern, professional website for Melken Handyman Solutions built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✅ **Modern Tech Stack**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- ✅ **Responsive Design**: Mobile-first design that works on all devices
- ✅ **SEO Optimized**: Proper meta tags, semantic HTML, and fast loading
- ✅ **Interactive Components**: Service modals, FAQ accordions, contact forms
- ✅ **Form Validation**: React Hook Form with Zod validation
- ✅ **Smooth Animations**: Framer Motion for professional transitions
- ✅ **Email Protection**: Protected email addresses to prevent bot scraping
- ✅ **Accessibility**: WCAG compliant with proper ARIA labels

## 📦 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd melken-handyman-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
melken-handyman-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with contact info
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services grid with modals
│   ├── Reviews.tsx         # Customer reviews
│   ├── FAQ.tsx             # FAQ accordion
│   └── ContactForm.tsx     # Contact form with validation
├── lib/
│   ├── data/
│   │   ├── services.ts     # Services data
│   │   ├── reviews.ts      # Customer reviews data
│   │   └── faqs.ts         # FAQ data
│   └── utils.ts            # Utility functions
└── public/
    ├── assets/             # Images and media
    └── logo.png            # Company logo
```

## 🎨 Customization

### Brand Colors

Edit `app/globals.css` to change brand colors:

```css
:root {
  --primary: #007bff;      /* Blue */
  --primary-dark: #0056b3; /* Dark Blue */
  --secondary: #ffc107;    /* Yellow/Gold */
  --accent: #28a745;       /* Green */
}
```

### Content Updates

- **Services**: Edit `lib/data/services.ts`
- **Reviews**: Edit `lib/data/reviews.ts`
- **FAQs**: Edit `lib/data/faqs.ts`
- **Contact Info**: Edit `components/Footer.tsx` and `components/ContactForm.tsx`

### Images

Place images in the `public/` directory:
- `logo.png` - Company logo (180x60px recommended)
- `hero-image.jpg` - Hero section image (1200x800px recommended)
- `assets/images/` - Gallery and other images

## 📧 Form Setup

The contact form currently logs submissions to the console. To enable email functionality:

1. Choose an email service (Resend, SendGrid, etc.)
2. Create an API route at `app/api/contact/route.ts`
3. Update `components/ContactForm.tsx` to POST to your API route

Example with Resend:

```typescript
// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const data = await request.json();

  await resend.emails.send({
    from: 'website@melkenhandyman.com',
    to: 'kfelder@melkenhandyman.com',
    subject: `New Contact Form: ${data.service}`,
    html: `<p>Name: ${data.name}</p>...`
  });

  return Response.json({ success: true });
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy
5. Connect your custom domain (melkenhandyman.com)

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## 📝 TODO

- [ ] Add hero image (`public/hero-image.jpg`)
- [ ] Set up email service for contact form
- [ ] Add Google Analytics tracking ID
- [ ] Add more gallery images
- [ ] Configure custom domain
- [ ] Set up SSL certificate
- [ ] Add sitemap.xml
- [ ] Add robots.txt

## 🔒 Security

- Email addresses are protected from bots using JavaScript
- Form validation prevents malicious input
- No API keys exposed in client-side code
- HTTPS enforced in production

## 📞 Support

For questions or issues, contact:
- **Email**: theguy@melkenhandyman.com
- **Phone**: (321) 326-7555

## 📄 License

© 2024 Melken Handyman Solutions. All rights reserved.
