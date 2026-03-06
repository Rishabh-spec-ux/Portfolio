# Rishabh Rudani - Robotics Portfolio Website

A premium, visually stunning portfolio website for a robotics engineering student and junior robotics software engineer. Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Futuristic Design**: Dark theme with neon accents, glassmorphism, and smooth animations
- **Cinematic Scrolling**: Elegant scroll reveals, parallax effects, and section transitions
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **High Performance**: Built with Next.js for optimal speed and SEO
- **Smooth Animations**: Framer Motion throughout for polished micro-interactions
- **Premium Typography**: Custom font stack with Inter and JetBrains Mono
- **Accessible**: WCAG-conscious design with proper semantic HTML

## 📋 Sections

1. **Hero Section** - Striking introduction with animated background and CTA buttons
2. **About** - Professional overview with focus areas and current mission
3. **Technical Skills** - Visual showcase of tech stack organized by category
4. **Space Rover Project** - Featured centerpiece with architecture, roadmap, and challenges
5. **Other Projects** - Portfolio of robotics and engineering projects
6. **Experience** - Professional timeline with achievements and technical stack
7. **Robotics Pipeline** - Visual workflow showing architecture thinking
8. **Contact** - Contact form and professional links
9. **Footer** - Navigation and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Inter + JetBrains Mono

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Navigate to project directory
cd /Users/rishabhrudani/Desktop/portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open browser
open http://localhost:3000
```

## 🎨 Customization Guide

### 1. **Update Personal Information**

Edit `app/layout.tsx`:
```typescript
// Update metadata
export const metadata: Metadata = {
  title: 'Your Name | Your Role',
  description: 'Your description',
}
```

Edit `components/Navbar.tsx`:
```typescript
<span className="font-mono font-bold">
  Your Name
</span>
```

### 2. **Customize Hero Section** 

Edit `sections/Hero.tsx`:
```typescript
// Update headline
<span className="block text-dark-50 mb-2">Your Main Title</span>
<span className="text-gradient block">Your Subtitle</span>

// Update description
<p className="text-lg sm:text-xl text-dark-300">
  Your professional summary
</p>

// Update tech tags
const techTags = ['Your', 'Tech', 'Stack']
```

### 3. **Update About Section**

Edit `sections/About.tsx`:
- Update specializations array with your focus areas
- Edit company/education information
- Update mission statement

### 4. **Update Skills/Tech Stack**

Edit `sections/Skills.tsx`:
```typescript
const skillCategories = [
  {
    title: 'Your Category',
    skills: ['Skill1', 'Skill2', 'Skill3'],
    description: 'Your description'
  }
]
```

### 5. **Update Space Rover Project**

Edit `sections/SpaceRoverProject.tsx`:
- Replace placeholder text like `[Add sensors used]`
- Update system components description
- Edit architecture layers
- Update milestones and development status
- Replace engineering challenges with real ones

### 6. **Update Projects**

Edit `sections/Projects.tsx`:
```typescript
const projects = [
  {
    title: 'Project Name',
    description: 'Your description',
    highlights: ['Achievement 1', 'Achievement 2'],
    tech: ['Tech1', 'Tech2'],
    // ... other fields
  }
]
```

### 7. **Update Experience**

Edit `sections/Experience.tsx`:
```typescript
const experiences = [
  {
    title: 'Your Role',
    company: 'Company Name',
    period: 'Time Period',
    location: 'Location',
    achievements: ['Achievement 1', 'Achievement 2'],
    tech: ['Tech1', 'Tech2']
  }
]
```

### 8. **Update Contact Section**

Edit `sections/Contact.tsx`:
```typescript
const contactLinks = [
  {
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
  },
  // Update LinkedIn and GitHub links
]
```

### 9. **Add Resume**

1. Add your resume PDF to `public/resume.pdf`
2. The download button in the Contact section will link to it

### 10. **Update Social Links**

Edit `sections/Footer.tsx`:
```typescript
const socialLinks = [
  { href: 'https://github.com/yourusername', label: 'GitHub' },
  { href: 'https://linkedin.com/in/yourprofile', label: 'LinkedIn' },
]
```

## 🎨 Design Customization

### Colors

Edit `tailwind.config.ts` to customize color palette:

```typescript
extend: {
  colors: {
    // Update primary colors
    'space': {
      600: '#your-color',
      // ... other shades
    },
    'neon': {
      cyan: '#00f0ff',
      purple: '#b026ff',
      // ... other accents
    },
  },
}
```

### Typography

Edit `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
  mono: ['Your Mono Font', 'monospace'],
}
```

### Animations

Modify keyframes in `tailwind.config.ts` or add new ones in `app/globals.css`

## 📱 Responsive Design

The portal is fully responsive with breakpoints:
- Mobile: < 640px (sm)
- Tablet: 640px - 1024px (md)
- Desktop: > 1024px (lg)

Test on various devices:
```bash
# Built-in Chrome DevTools
# Or use responsive design mode
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push project to GitHub
2. Import to Vercel: https://vercel.com/new
3. Deploy with one click

### Deploy to Netlify

1. Build: `npm run build`
2. Deploy `out` folder to Netlify

### Self-hosted

```bash
# Build
npm run build

# Start production server
npm run start
```

## 📊 Performance Optimization

- Images are optimized by Next.js
- Tailwind CSS is purged for production
- Code splitting is automatic
- Edge caching is enabled on Vercel

Check performance:
```bash
npm run build
# Check output for bundle sizes
```

## 🐛 Troubleshooting

### Port already in use
```bash
npx kill-port 3000
npm run dev
```

### Build errors
```bash
# Clear build cache
rm -rf .next

# Rebuild
npm run build
```

### TypeScript errors
```bash
# Check types
npx tsc --noEmit
```

## 📝 Content Structure Reference

### Hero Section Placeholders
- Headline and subheading
- CTA buttons (View Projects, Get In Touch)
- Tech tags

### About Section
- Profile summary
- Focus areas/specializations
- Education information
- Current mission

### Skills Section
- 7 main categories with icons
- Multiple skills per category
- Descriptions for context

### Space Rover Project (Main Showcase)
- System architecture (3 components)
- Architecture layers (6 layers)
- Development roadmap (4 milestones)
- Engineering challenges

### Projects Section
- 6 featured projects
- Highlights for each
- Technologies used
- Links to details/code

### Experience Section
- Professional roles
- Key achievements
- Tech stack used
- Timeline

### Workflow Section
- 6-step robotics pipeline
- Visual alternating layout
- Step descriptions

### Contact Section
- Email, LinkedIn, GitHub links
- Contact form
- Resume download

## 🎯 Quick Wins for Customization

1. **Change colors globally** - Edit Tailwind config
2. **Update intro text** - Edit Hero section content
3. **Add projects** - Edit Projects array
4. **Update timeline** - Edit Experience section
5. **Change fonts** - Edit tailwind.config.ts

## 📚 Learning Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## 📄 License

This project is personal portfolio software. Modify freely for your use.

## ✨ Special Features

- **Grid background**: Subtle animated grid pattern
- **Glassmorphism**: Frosted glass effect on cards
- **Gradient text**: Dynamic color gradients for headings
- **Smooth scrolling**: Native CSS scroll-behavior
- **Mobile nav**: Responsive hamburger menu
- **Sticky navbar**: Header persists while scrolling
- **Scroll reveals**: Sections animate on scroll
- **Hover states**: Interactive micro-animations

## 🔗 Important URLs to Update

1. Email: `rishabh.rudani@example.com` → Your email
2. LinkedIn: `linkedin.com/in/rishabh-rudani` → Your profile
3. GitHub: `github.com/rishabhrudani` → Your profile
4. Resume: `public/resume.pdf` → Your resume

## 💡 Pro Tips

1. Use descriptive project titles that highlight your impact
2. Focus achievements on outcomes, not tasks
3. Ensure all external links open in new tabs
4. Keep content scanning-friendly for recruiters
5. Test on mobile before deployment
6. Monitor performance metrics
7. Update portfolio regularly with new projects

## 🎬 Next Steps

1. ✅ Customize all personal information
2. ✅ Add your resume to `public/resume.pdf`
3. ✅ Update all project descriptions
4. ✅ Add real links and social profiles
5. ✅ Test on mobile devices
6. ✅ Deploy to production
7. ✅ Share with recruiters and networks

---

**Made with precision engineering and premium design** 🚀
