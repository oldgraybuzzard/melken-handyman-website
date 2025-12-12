# Quick Start Guide - Melken Handyman Solutions

Welcome! Your new Next.js website is ready. Here's everything you need to know to get started.

## 🎉 What's Been Built

Your website includes:
- ✅ Modern, responsive design
- ✅ Hero section with call-to-action buttons
- ✅ 8 services with interactive modals
- ✅ Customer reviews section
- ✅ 14 FAQs across 5 categories
- ✅ Contact form with validation
- ✅ Mobile-friendly navigation
- ✅ Email protection from bots
- ✅ SEO optimized

## 🚀 Running Locally

1. Open Terminal and navigate to the project:
```bash
cd melken-handyman-nextjs
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

4. To stop the server, press `Ctrl + C` in Terminal

## 📝 Making Content Changes

### Update Services

Edit `lib/data/services.ts`:

```typescript
{
  id: 'new-service',
  title: 'New Service Name',
  description: 'Short description',
  icon: '🔧', // Any emoji
  details: [
    'Detail 1',
    'Detail 2',
    'Detail 3',
  ],
  cta: 'Get a Quote for New Service',
}
```

### Update Reviews

Edit `lib/data/reviews.ts`:

```typescript
{
  id: 'review-9',
  author: 'Customer Name',
  rating: 5,
  date: '2024-12-01',
  text: 'Review text here...',
  platform: 'google', // or 'angi'
}
```

### Update FAQs

Edit `lib/data/faqs.ts`:

```typescript
{
  id: 'faq-15',
  question: 'Your question here?',
  answer: 'Your answer here...',
  category: 'General Questions', // Must match existing category
}
```

### Update Contact Information

Edit `components/Footer.tsx` and `components/ContactForm.tsx` to change:
- Phone number
- Email address
- Service areas
- Business hours

### Update Brand Colors

Edit `app/globals.css`:

```css
:root {
  --primary: #007bff;      /* Main blue color */
  --primary-dark: #0056b3; /* Darker blue for hovers */
  --secondary: #ffc107;    /* Yellow/gold accent */
  --accent: #28a745;       /* Green for success */
}
```

## 🖼️ Adding Images

1. Place images in `public/` folder
2. Reference them in components:

```typescript
<Image
  src="/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

## 🧪 Testing Your Changes

After making changes:

1. Save the file
2. Check your browser - changes appear automatically
3. Test on mobile by resizing browser window
4. Check browser console for errors (F12 → Console tab)

## 📦 Building for Production

Before deploying, test the production build:

```bash
npm run build
npm run start
```

This ensures everything works correctly.

## 🚀 Deploying to Production

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick version:**
1. Push code to GitHub
2. Connect to Vercel (free)
3. Deploy automatically
4. Connect your domain

## 🔧 Common Tasks

### Add a New Page

1. Create `app/new-page/page.tsx`:
```typescript
export default function NewPage() {
  return (
    <div className="container py-16">
      <h1>New Page</h1>
    </div>
  );
}
```

2. Add link in Header navigation

### Add a New Component

1. Create `components/NewComponent.tsx`:
```typescript
export default function NewComponent() {
  return (
    <section className="py-16">
      {/* Your content */}
    </section>
  );
}
```

2. Import and use in `app/page.tsx`

### Update Meta Tags (SEO)

Edit `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your New Title',
  description: 'Your new description',
  // ... other meta tags
};
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

### Changes Not Showing
1. Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
2. Clear browser cache
3. Restart dev server

### Build Errors
1. Check Terminal for error messages
2. Ensure all imports are correct
3. Run `npm install` to ensure dependencies are installed

### Images Not Loading
1. Ensure image is in `public/` folder
2. Check file name matches exactly (case-sensitive)
3. Use correct path: `/image.jpg` not `./image.jpg`

## 📚 Learning Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs

## 🎯 Next Steps

1. [ ] Review all content for accuracy
2. [ ] Add more services if needed
3. [ ] Add gallery images
4. [ ] Set up contact form email (see DEPLOYMENT.md)
5. [ ] Test on mobile device
6. [ ] Deploy to Vercel
7. [ ] Connect custom domain
8. [ ] Add Google Analytics

## 💡 Tips

- **Save often**: Changes auto-reload in browser
- **Use components**: Break large sections into smaller components
- **Test mobile**: Most visitors will be on mobile
- **Keep it simple**: Don't over-complicate the design
- **Update regularly**: Keep content fresh and accurate

## 📞 Questions?

If you need help:
1. Check the error message in Terminal
2. Check browser console (F12)
3. Review the documentation files
4. Search for the error on Google
5. Ask for help!

---

**Your website is ready to customize and deploy! 🚀**

Start by running `npm run dev` and opening http://localhost:3000 in your browser.

