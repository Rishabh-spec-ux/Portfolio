# Quick Start Guide

Get your portfolio website running in 5 minutes.

## 🚀 Start Development Server

```bash
# Navigate to project
cd /Users/rishabhrudani/Desktop/portfolio

# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

You now have a live preview at `http://localhost:3000`

The page auto-refreshes when you save files. ✨

## ⚡ Quickest Customization

### 1. Update Your Name (2 min)

**File:** `components/Navbar.tsx`
- Find: `<span className="font-mono font-bold">Rishabh Rudani</span>`
- Replace: `<span className="font-mono font-bold">Your Name</span>`

**File:** `app/layout.tsx`
- Update: `title: 'Your Name | Your Role'`

### 2. Update Hero (3 min)

**File:** `sections/Hero.tsx`

Change the headline:
```jsx
<h1 className="text-5xl...">
  <span className="block text-dark-50 mb-2">Your Main Title</span>
  <span className="text-gradient block">Your Subtitle</span>
</h1>
```

Change the subheading:
```jsx
<p className="text-lg...">
  Your professional summary here - 2-3 sentences
</p>
```

### 3. Update Contact (2 min)

**File:** `sections/Contact.tsx`

Update your email and social links:
```typescript
const contactLinks = [
  {
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  // ... update LinkedIn and GitHub
]
```

## 📝 Content Files to Edit

| Section | File | Time |
|---------|------|------|
| Hero | `sections/Hero.tsx` | 5 min |
| About | `sections/About.tsx` | 5 min |
| Skills | `sections/Skills.tsx` | 10 min |
| Projects | `sections/Projects.tsx` | 10 min |
| Experience | `sections/Experience.tsx` | 5 min |
| Contact | `sections/Contact.tsx` | 5 min |
| Colors | `tailwind.config.ts` | 5 min |

**Total time to customize: ~45 minutes**

## 🎨 Customize Colors (Optional)

**File:** `tailwind.config.ts`

Find the `colors` section and update hex codes:

```typescript
'space': {
  600: '#YOUR_COLOR',  // Change these
  700: '#YOUR_COLOR',
},
'neon': {
  cyan: '#YOUR_COLOR',
  purple: '#YOUR_COLOR',
},
```

Use an online color picker to find hex codes.

## 📱 Test Responsiveness

Press `Cmd + Shift + J` (or `F12` on Windows) to open DevTools.

Click the responsive design mode to test:
- Mobile (375px)
- Tablet (768px)  
- Desktop (1440px)

## 🚀 Build for Production

```bash
# Compile production build
npm run build

# Test production locally
npm run start

# Open http://localhost:3000
```

## 📤 Deploy

### Simple Deploy (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts
# That's it - your site is live!
```

Or visit https://vercel.com/new and import your GitHub repository.

## 📚 More Information

- **Detailed Customization:** See `CUSTOMIZATION.md`
- **Deployment Options:** See `DEPLOYMENT.md`
- **Full Documentation:** See `README.md`

## ✅ Checklist

- [ ] `npm run dev` works
- [ ] Changed your name in 2 places
- [ ] Updated hero section
- [ ] Updated contact info
- [ ] Tested on mobile
- [ ] Updated theme colors (optional)
- [ ] Ready to share!

## 🎯 Next Steps

1. ✅ Get server running: `npm run dev`
2. ✅ Customize 3-5 key sections
3. ✅ Add resume.pdf to `public/` folder
4. ✅ Test on mobile
5. ✅ Deploy with Vercel (or other platform)
6. ✅ Share with recruiters!

## 💡 Pro Tips

- Save files and see changes instantly (hot reload)
- Check console (F12) for any errors
- Use browser DevTools to inspect elements
- Keep theme consistent across sections
- Test all links before deploying
- Mobile view is critical - test thoroughly

## 🆘 Help!

### Port 3000 already in use?
```bash
npx kill-port 3000
npm run dev
```

### Changes not showing?
```bash
# Hard refresh
Cmd + Shift + R (or Ctrl + Shift + R on Windows)
```

### TypeScript errors?
```bash
# Usually safe to ignore in development
# Will catch on build/deploy
npm run build  # Shows real errors
```

### Git not initialized?
```bash
cd /Users/rishabhrudani/Desktop/portfolio
git init
git add .
git commit -m "Initial commit"
```

---

**You're ready!** 🎉

Start with `npm run dev` and have fun customizing. The portfolio is fully functional - just make it yours!

Questions? Check the other documentation files.
