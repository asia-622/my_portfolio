# Asia Parveen - Data Analyst Portfolio

A modern, responsive personal portfolio website showcasing Asia Parveen's skills, achievements, and journey as an aspiring Data Analyst and BS Mathematics student.

## 🌟 Features

- **Modern Design**: Clean, professional interface with data analytics theme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Engaging scroll animations and interactive elements
- **Performance Optimized**: Fast loading times with efficient code
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessible**: Keyboard navigation and screen reader support
- **GitHub Pages Ready**: Easy deployment configuration

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
├── Asia_CV.pdf         # CV file for download (to be added)
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, or Edge)
- A text editor (VS Code, Sublime Text, etc.) - optional for customization
- Git installed on your computer (for GitHub Pages deployment)

### Local Setup

1. **Download/Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Add your CV file**
   - Place your CV PDF file in the root directory
   - Name it `Asia_CV.pdf` (or update the link in index.html)

3. **Open the website**
   - Simply double-click `index.html` to open in your browser
   - Or use a local server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Visit `http://localhost:8000` in your browser

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `yourusername.github.io` (replace 'yourusername' with your GitHub username)
5. Make it public
6. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface**

1. Click "uploading an existing file"
2. Drag and drop all files (index.html, styles.css, script.js, Asia_CV.pdf)
3. Commit the changes

**Option B: Using Git Command Line**

```bash
# Initialize git in your project folder
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section (left sidebar)
4. Under "Source", select "main" branch
5. Click "Save"
6. Your site will be live at: `https://yourusername.github.io`

### Step 4: Wait and Visit

- GitHub Pages typically takes 2-5 minutes to deploy
- Visit your site at `https://yourusername.github.io`
- Share your link!

## 🎨 Customization Guide

### Updating Content

1. **Personal Information**: Edit the content in `index.html`
2. **Colors**: Modify CSS variables in `styles.css` at the top:
   ```css
   :root {
       --primary-color: #0A4D68;
       --accent-color: #05BFDB;
       /* etc. */
   }
   ```
3. **Fonts**: Change Google Fonts links in the `<head>` section
4. **Images**: Add profile images by creating an `images/` folder and updating paths

### Adding Sections

To add a new section:
1. Copy an existing section structure from `index.html`
2. Update the content
3. Add corresponding styles in `styles.css`
4. Add to navigation menu

### Updating CV

Replace `Asia_CV.pdf` with your updated CV file (keep the same filename).

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Troubleshooting

### CV Download Not Working

- Ensure `Asia_CV.pdf` is in the root directory
- Check the file name matches exactly (case-sensitive)
- Clear browser cache and try again

### Styles Not Loading

- Check that `styles.css` is in the same directory as `index.html`
- Verify the file name is correct in the HTML link tag
- Clear browser cache

### GitHub Pages Not Updating

- Wait 5-10 minutes after pushing changes
- Check the Actions tab in GitHub for deployment status
- Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

## 📊 Performance Tips

- Keep images optimized (use WebP format when possible)
- Minimize CSS and JavaScript for production
- Use browser caching
- Consider CDN for fonts and libraries

## 🎯 SEO Optimization

Current optimizations:
- Semantic HTML5 structure
- Meta description tag
- Proper heading hierarchy
- Alt text for images (when added)
- Mobile-friendly design
- Fast loading times

To improve further:
- Add Open Graph meta tags for social sharing
- Create a sitemap.xml
- Add structured data (JSON-LD)
- Optimize meta descriptions

## 📞 Support

If you encounter any issues or have questions:

- **Email**: parveenasia622@gmail.com
- **LinkedIn**: [Asia Parveen](https://www.linkedin.com/in/asia-parveen-37a502371)

## 📝 License

This portfolio is free to use as a template. Feel free to customize it for your own use.

## 🙏 Acknowledgments

- Font families: Syne and IBM Plex Mono from Google Fonts
- Icons: Inline SVG icons
- Design inspiration: Modern data analytics interfaces

## 🔄 Updates

To update your deployed site:

1. Make changes to your local files
2. Test locally
3. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
4. Wait a few minutes for GitHub Pages to rebuild

---

**Built with ❤️ by Asia Parveen**

*Last Updated: January 2026*
