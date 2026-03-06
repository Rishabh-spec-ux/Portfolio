# Public Assets

This directory should contain static assets for your portfolio.

## Files to Add

### Resume
- **resume.pdf** - Your professional resume (referenced in Contact section)
  - Download button points to `/resume.pdf`
  - Replace with your actual PDF file

### Images (Optional)
- **projects/** - Project screenshots and demo images
- **profile.jpg** - Optional profile picture
- **og-image.png** - Open Graph image for social sharing (1200x630px)

### Font Files (Optional)
- Custom fonts if not using Google Fonts

## Structure
```
public/
├── resume.pdf          # Your resume (IMPORTANT: Add this)
├── og-image.png       # Social sharing image
├── projects/
│   ├── rover-1.jpg
│   ├── rover-2.jpg
│   └── ...
└── (other assets)
```

## Notes
- All files in `public/` are served at the root URL
- Optimize images for web (compress, use modern formats)
- Resume should be PDF format
- OG image should be 1200x630px for best social media appearance

## How to Add Files

1. Place resume PDF here as `resume.pdf`
2. The portfolio will automatically link to it
3. For project images, create a `projects` subfolder
4. Reference images in component `src` props as `/filename.ext`

Example:
```jsx
<img src="/resume.pdf" alt="Resume" /> // PDF viewer
<img src="/projects/rover.jpg" alt="Rover" />
```
