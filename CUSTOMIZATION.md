# Customization Guide for Rishabh's Portfolio

This guide provides step-by-step instructions to customize every aspect of the portfolio.

## 🎯 Priority Customization (Do First)

### 1. Update Your Name and Contact Info

**File:** `app/layout.tsx`
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Robotics Engineer',  // Change this
  description: 'Your professional summary', // Change this
}
```

**File:** `components/Navbar.tsx`
```typescript
<span className="font-mono font-bold">
  Your Name Here  // Change from "Rishabh Rudani"
</span>
```

**File:** `sections/Footer.tsx`
- Update social media links
- Change email and contact information

### 2. Add Your Resume

1. Convert or prepare your resume as a PDF
2. Save it to `public/resume.pdf`
3. The "Download Resume" button will automatically link to it

### 3. Update Hero Section

**File:** `sections/Hero.tsx`

```typescript
// Update main headline
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
  <span className="block text-dark-50 mb-2">Your Main Title</span>
  <span className="text-gradient block">Your Subtitle or Role</span>
</h1>

// Update subheading
<p className="text-lg sm:text-xl text-dark-300">
  Your professional summary - 2-3 sentences about who you are and what you build
</p>

// Update tech tags
const techTags = ['ROS 2', 'Perception', 'Your', 'Technologies']
```

### 4. Update About Section

**File:** `sections/About.tsx`

```typescript
// Update specializations
const specializations = [
  {
    icon: Brain,
    title: 'Your Focus Area',
    description: 'What you specialize in',
  },
  // ... add your focus areas
]

// Update education
<h3 className="text-2xl font-bold text-dark-50 mb-2">
  Your Degree
</h3>
<p className="text-space-300">Your University, Country</p>

// Update mission
<p className="text-space-300">
  Your mission statement - what drives you as an engineer
</p>
```

---

## 🔧 Detailed Section Customization

### Skills Section

**File:** `sections/Skills.tsx`

This section has 7 skill categories. Customize each:

```typescript
const skillCategories = [
  {
    icon: Code2,                    // Icon from lucide-react
    title: 'Programming Languages', // Category name
    color: 'from-space-600 to-space-700', // Gradient color
    skills: [
      'C++',   // Your skills
      'Python',
      'Java',
    ],
    description: 'Core languages for your work',
  },
  // Repeat for each category
]
```

**Available Icons:** Import from `lucide-react`:
- `Code2`, `Rss`, `Eye`, `Brain`, `Settings`, `Package`, `Network`
- For more: see lucide-react documentation

**Color Gradients:** Use these combinations:
- Purple: `from-space-600 to-space-700`
- Cyan: `from-neon-cyan to-space-500`
- Pink: `from-neon-pink to-neon-purple`
- Mixed: `from-neon-purple to-space-600`

### Space Rover Project Section

**File:** `sections/SpaceRoverProject.tsx`

This is your featured project showcase. Replace all placeholders:

```typescript
// System Components - Edit these three
const systemComponents = [
  {
    icon: Eye,
    title: 'Perception Pipeline',
    details: [
      'Your technology 1',
      'Your technology 2',
      '[Add your details]',  // Replace placeholders
      'Your technology 3',
    ],
    color: 'from-neon-cyan to-space-400',
  },
  // ... repeat for other components
]

// Architecture Layers
const architectureLayers = [
  'Your Layer 1: Description',
  'Your Layer 2: Description',
  // ... up to 6 layers
]

// Milestones
const milestones = [
  {
    status: 'completed',
    title: 'Your Completed Task',
    description: 'What you accomplished',
  },
  // ... your project milestones
]
```

### Projects Section

**File:** `sections/Projects.tsx`

Update the 6 project cards:

```typescript
const projects = [
  {
    title: 'Your Project Name',
    company: 'Company or Team',
    description: 'What the project does',
    highlights: [
      'Key achievement 1',
      'Key achievement 2',
      'Technical implementation detail',
    ],
    tech: ['Tech1', 'Tech2', 'Tech3'], // Technologies used
    role: 'Your Role in Project',
    color: 'from-neon-cyan to-space-500', // Card accent color
  },
  // ... add more projects
]
```

**Tips:**
- Lead with impact/achievement in description
- Highlights should be 3-5 key technical achievements
- Tech should be 5-8 technologies
- Colors help differentiate projects

### Experience Section

**File:** `sections/Experience.tsx`

Update professional experience:

```typescript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Jan 2024 - Present',
    location: 'City, Country',
    description: 'What you do in this role',
    achievements: [
      'Achievement with measurable impact',
      'Technical project you led',
      'System you designed/implemented',
      // ... more achievements
    ],
    tech: [
      'Technology1', 'Technology2', // The tech stack
      'Technology3', 'Technology4',
    ],
    highlights: [
      'Key strength area 1',
      'Key strength area 2',
    ],
  },
]
```

**Achievement Writing Tips:**
- Start with action verb (Designed, Built, Implemented)
- Include technologies used
- Mention impact when possible
- Be specific, not vague

### Workflow Section

**File:** `sections/Workflow.tsx`

This shows your engineering process. Six steps:

```typescript
const workflow = [
  {
    step: 1,
    title: 'Your Step Name',
    description: 'What happens in this step',
    details: ['Detail1', 'Detail2', 'Detail3'],
    color: 'from-neon-cyan to-space-500',
  },
  // ... up to 6 steps
]
```

**Use for:** Showing your design process, development workflow, robotics pipeline, etc.

### Contact Section

**File:** `sections/Contact.tsx`

```typescript
const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'your.email@example.com',
    href: 'mailto:your.email@example.com',
    color: 'from-neon-cyan to-space-500',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/yourusername',
    href: 'https://linkedin.com/in/yourusername',
    color: 'from-space-500 to-neon-purple',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/yourusername',
    href: 'https://github.com/yourusername',
    color: 'from-neon-purple to-space-600',
  },
]
```

---

## 🎨 Design Customization

### Color Scheme

**File:** `tailwind.config.ts`

Primary colors are defined in the `colors` section:

```typescript
colors: {
  'space': {
    50: '#f8f7ff',
    100: '#f0edff',
    // ... adjust hex codes
    600: '#806bff',
    700: '#6b4dff',
    900: '#2d1b7e',
  },
  'neon': {
    cyan: '#00f0ff',      // Change this
    purple: '#b026ff',    // Change this
    pink: '#ff0080',      // Change this
    blue: '#0080ff',      // Change this
  },
}
```

**How to customize:**
1. Choose your brand colors
2. Use a color tool to generate shades
3. Update the hex codes
4. All components will automatically use new colors

### fonts

**File:** `tailwind.config.ts` and `app/layout.tsx`

Change fonts in `tailwind.config.ts`:
```typescript
fontFamily: {
  sans: ['Your Font Name', 'system-ui', '-apple-system', 'sans-serif'],
  mono: ['Your Monospace Font', 'Courier New', 'monospace'],
}
```

Then update `app/layout.tsx` to import from Google Fonts or add locally.

### Animations and Effects

**Files:**
- `tailwind.config.ts` - Main animation definitions
- `app/globals.css` - Global CSS and keyframes
- Individual component files - Component-specific animations

**Modify animations:**
```typescript
// In tailwind.config.ts
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.6s ease-out',
  'glow': 'glow 2s ease-in-out infinite',
}

keyframes: {
  fadeIn: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
  // Add your custom animations
}
```

---

## 📱 Responsive Design

All sections are responsive by default. Test on:
- Mobile: 360px, 414px
- Tablet: 768px, 1024px
- Desktop: 1440px, 1920px

To customize responsive behavior:

```tsx
// Example: Show on desktop only
<div className="hidden md:block">
  Desktop content
</div>

// Example: Stack on mobile, side-by-side on desktop
<div className="grid md:grid-cols-2 gap-6">
  <div>Mobile: takes full width</div>
  <div>Desktop: 50% width</div>
</div>
```

**Breakpoints:**
- `sm`: 640px
- `md`: 768px  
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🔗 Links and URLs

### Email Links
```typescript
href="mailto:your.email@example.com"
```

### External Links
```typescript
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Link
</a>
```

### Internal Navigation
```typescript
<a href="#section-id">
  Jump to Section
</a>
```

### Resume/Downloads
```typescript
<a href="/resume.pdf" download>
  Download
</a>
```

---

## ✅ Customization Checklist

- [ ] Update your name in navbar and metadata
- [ ] Add resume to `public/resume.pdf`
- [ ] Update hero section headline and description
- [ ] Update about section with your story
- [ ] Update skills section with your tech stack
- [ ] Update space rover (or featured) project
- [ ] Update other projects (6 total)
- [ ] Update experience section
- [ ] Update workflow/process section
- [ ] Update contact information
- [ ] Update footer with social links
- [ ] Choose and customize color scheme
- [ ] Test on mobile devices
- [ ] Deploy to production
- [ ] Share with network

---

## 🚀 Quick Reference: Most Changed Files

1. **Hero Section**: `sections/Hero.tsx`
2. **About**: `sections/About.tsx`
3. **Skills**: `sections/Skills.tsx`
4. **Projects**: `sections/Projects.tsx`
5. **Experience**: `sections/Experience.tsx`
6. **Contact**: `sections/Contact.tsx`
7. **Colors**: `tailwind.config.ts`
8. **Metadata**: `app/layout.tsx`

---

## 💡 Pro Customization Tips

1. **Keep content current** - Update projects and experience regularly
2. **Use strong action verbs** - Designed, Built, Implemented, Optimized
3. **Include metrics** - "Reduced latency by 40%", "Served 1M+ users"
4. **Maintain consistency** - Use same color scheme throughout
5. **Test thoroughly** - Check all links and forms work
6. **Mobile first** - Ensure mobile experience is flawless
7. **Load time** - Compress images and optimize bundle
8. **SEO friendly** - Update all metadata and add descriptions

---

For more help, refer to the main README.md

Good luck customizing your portfolio! 🚀
