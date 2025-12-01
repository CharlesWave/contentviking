# GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### Step 1: Enable GitHub Pages
1. Go to your GitHub repository: https://github.com/CharlesWave/contentviking
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under "Source", select **GitHub Actions**
4. Save the settings

### Step 2: Add Secrets (for API keys)
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add:
   - `VITE_GEMINI_API_KEY` - Your Gemini API key
   - `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
   - `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

### Step 3: Push to GitHub
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

### Step 4: Wait for Deployment
- Go to the **Actions** tab in your GitHub repo
- Watch the deployment workflow run
- Once complete, your site will be live at:
  **https://charleswave.github.io/contentviking/**

## Updating Your Site

Simply push changes to the `main` branch:
```bash
git add .
git commit -m "Update website"
git push origin main
```

GitHub Actions will automatically rebuild and redeploy your site!

## Custom Domain (Optional)

If you want to use a custom domain (e.g., contentviking.com):

1. Update `vite.config.ts` - change `base: '/contentviking/'` to `base: '/'`
2. Add your custom domain in GitHub Pages settings
3. Update your DNS records as instructed by GitHub

## Troubleshooting

- **Build fails?** Check the Actions tab for error messages
- **API keys not working?** Make sure secrets are set correctly
- **Site not loading?** Wait 1-2 minutes after deployment completes

