# Deployment Guide

Complete guide to deploy your robotics portfolio to production.

## 🚀 Recommended: Deploy to Vercel (Free & Easy)

Vercel is the creator of Next.js and is optimized for it. Recommended for beginners.

### Step 1: Prepare Your Project

```bash
# Ensure everything builds locally
npm run build

# Test production build locally
npm run start
# Visit http://localhost:3000
```

### Step 2: Push to GitHub

1. Initialize git in your project:
```bash
git init
git add .
git commit -m "Initial commit: robotics portfolio"
```

2. Create a repository on GitHub (github.com)

3. Push code:
```bash
git remote add origin https://github.com/YOUR_USERNAME/robotics-portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your GitHub repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**That's it!** Your site is live.

### Step 4: Custom Domain (Optional)

In Vercel Dashboard:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration steps

---

## 🌐 Alternative: Deploy to Netlify

Good alternative with free tier.

### Step 1: Build the static export

Since we're using Next.js with dynamic content, we'll use Vercel or build for Node.js hosting.

If you want static export for Netlify:

```bash
npm run build
```

### Step 2: Deploy

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub account
4. Select repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Deploy

---

## 🖥️ Self-Hosted Deployment

For VPS or dedicated server.

### Option 1: Using PM2 (Recommended)

```bash
# Install PM2 globally
npm install -g pm2

# Build your application
npm run build

# Start with PM2
pm2 start "npm start" --name "portfolio"

# Make it restart on server reboot
pm2 startup
pm2 save
```

### Option 2: Using Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
# Build image
docker build -t robotics-portfolio .

# Run container
docker run -p 3000:3000 robotics-portfolio
```

### Option 3: Cloud Services

#### AWS EC2
1. Launch EC2 instance (Ubuntu 22.04)
2. SSH into instance
3. Install Node.js: `curl https://nodejs.org/installer | bash`
4. Clone repository
5. Run `npm install && npm run build`
6. Use PM2 or systemd to manage process

#### DigitalOcean App Platform
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set run command: `npm start`
4. Deploy

#### Railway.app
1. Connect GitHub
2. Add environment: Node.js
3. Auto-detected Next.js
4. Deploy

#### Render
1. Create new service
2. Connect GitHub
3. Build command: `npm run build`
4. Start command: `npm start`
5. Deploy

---

## 🔒 Environment Variables

If using any environment variables, create `.env.production`:

```bash
# Example - adjust as needed
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

For Vercel, set in dashboard:
1. Project Settings → Environment Variables
2. Add your variables
3. Redeploy

---

## ✅ Pre-Deployment Checklist

- [ ] All text customized with your information
- [ ] Resume added to `public/resume.pdf`
- [ ] All links working (emails, social media, projects)
- [ ] Test on mobile devices
- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm run start`
- [ ] Update metadata in `app/layout.tsx` (title, description)
- [ ] Update OG image if using social sharing
- [ ] Check SEO: proper headings, descriptions
- [ ] Lighthouse score check (Chrome DevTools)
- [ ] Test contact form (if connected to service)

Run these before deploying:

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build
npm run build

# Test production
npm run start
```

---

## 📊 Performance Optimization

### Before Deployment

1. **Optimize images**
   ```bash
   # If adding images to public folder
   npx next-image-export-optimizer
   ```

2. **Check bundle size**
   ```bash
   npm install --save-dev webpack-bundle-analyzer
   npm run build # and check output
   ```

3. **Lighthouse audit**
   - Run in Chrome DevTools
   - Target: 90+ for all metrics

### Monitor After Deployment

1. **Vercel Analytics** (if using Vercel)
2. **Google Analytics** (optional)
   - Add tracking ID to `app/layout.tsx`
3. **Sentry** (error tracking)
   - Optional for production monitoring

---

## 🔄 Continuous Deployment

With Git push, automatic deployment:

1. **Vercel**: Automatic on push to main branch
2. **Netlify**: Automatic on push (if configured)
3. **Self-hosted**: Set up GitHub Actions

GitHub Actions workflow `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy
        run: # Your deployment command
```

---

## 🚨 Troubleshooting

### Build fails on deployment

```bash
# Local test first
npm run build

# If it works locally but fails in CI:
# - Check Node Version (use 18+)
# - Clear cache and rebuild
# - Check environment variables
```

### Site is slow

```bash
# Check bundle size
npm run build

# Optimize images
# - Use WebP format
# - Compress manually
# - Use CDN for static files
```

### 404 errors after deploy

- Check `next.config.js`
- Ensure `app/page.tsx` exists
- Verify all imports are correct

### Environment variables not working

- Vercel: Set in project settings
- Self-hosted: Create `.env.production`
- Both: Variables must start with `NEXT_PUBLIC_` to be accessible client-side

---

## 📝 Domain Setup

### Add Custom Domain to Vercel

1. Buy domain (GoDaddy, Namecheap, Google Domains, etc.)
2. In Vercel project settings:
   - Go to Domains
   - Enter your domain
   - Follow DNS instructions
3. Update nameservers at registrar
4. Wait 24-48 hours for DNS to propagate

### Add CNAME Records (Alternative)

If nameserver transfer doesn't work:
1. Add CNAME record pointing to Vercel
2. Typically: `CNAME → your-project.vercel.app`

---

## 🔐 SSL Certificate

- **Vercel**: Automatic SSL (free)
- **Netlify**: Automatic SSL (free)
- **Self-hosted**: Use Let's Encrypt
  ```bash
  # Using Certbot
  sudo certbot certonly --nginx -d yourdomain.com
  ```

---

## 🎯 Deployment Strategies

### Recommended Flow

1. **Development** → Local testing
2. **Staging** → Preview branch on Vercel
3. **Production** → Deploy main branch

### Vercel Preview Deployments

- Every pull request gets unique URL
- Share with others before merging
- Automatic cleanup after PR closes

---

## 📱 Mobile Testing After Deploy

1. Test on iOS Safari
2. Test on Android Chrome
3. Test on tablet browsers
4. Test with slow 3G (DevTools)

---

## ✨ Post-Deployment

1. **Share the link** with:
   - Recruiters
   - Network
   - GitHub profile (in bio)
   - LinkedIn profile
   
2. **Monitor**:
   - Check for errors
   - Monitor performance
   - Update content regularly

3. **Iterate**:
   - Add new projects
   - Update experience
   - Improve design based on feedback

---

## 📚 Helpful Resources

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Dashboard](https://vercel.com)
- [Domain Registration](https://www.namecheap.com)
- [SSL Checker](https://www.sslshopper.com/ssl-checker.html)

---

## 🎊 Success!

Your portfolio is now live! 

Share it with the world and start impressing recruiters and collaborators. 🚀
