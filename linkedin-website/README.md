# LinkedIn Journey Website

A clean, professional personal website showcasing your LinkedIn journey with testimonials, about section, and social links.

## 🌟 Features

- **About Me Section** - Share your story and journey
- **Wall of Support** - Display testimonials from your LinkedIn community
- **Book a Call** - Direct link to your calendar (Calendly)
- **Social Links** - Connect on LinkedIn and Instagram
- **Fully Responsive** - Looks great on all devices
- **Clean Design** - Professional and modern layout
- **Easy to Customize** - Simple HTML, CSS, and JavaScript

## 🚀 Quick Setup

### 1. Customize Your Content

**Update Personal Information:**
Edit `index.html`:
- Line 15: Change "Your Name" in navbar
- Lines 25-26: Update hero title and subtitle
- Lines 50-70: Edit your About Me content
- Lines 75-81: Update your stats (connections, impressions, etc.)

**Update Social Links:**
Replace these URLs with your own:
- Line 115: Calendly link (or use another booking tool)
- Line 123: Your LinkedIn profile
- Line 131: Your Instagram profile
- Lines 147-148: Footer social links

**Add Your Photo:**
- Place your photo in the same folder (e.g., `photo.jpg`)
- In `index.html` line 54, uncomment and update:
  ```html
  <img src="photo.jpg" alt="Your Name">
  ```

**Customize Testimonials:**
Edit `script.js` (lines 2-99) - Replace the testimonials array with real comments from your LinkedIn posts or DMs.

### 2. Deploy to GitHub Pages

**Step 1: Create GitHub Repository**
1. Go to [github.com](https://github.com) and create a new repository
2. Name it: `yourusername.github.io` (replace yourusername with your GitHub username)
   - Example: `johnsmith.github.io`
3. Make it **Public**
4. Don't initialize with README

**Step 2: Upload Your Files**

Option A - Using GitHub Website:
1. Click "uploading an existing file"
2. Drag and drop all files: `index.html`, `styles.css`, `script.js`, (and your photo if added)
3. Click "Commit changes"

Option B - Using Git Command Line:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

**Step 3: Enable GitHub Pages**
1. Go to your repository Settings
2. Click "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"

**Step 4: Visit Your Site**
Your site will be live at: `https://yourusername.github.io`
(It may take a few minutes to deploy)

## 📝 File Structure

```
linkedin-website/
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript for testimonials
└── README.md       # This file
```

## 🎨 Customization Tips

### Change Colors
Edit `styles.css` (lines 10-17) to change the color scheme:
```css
:root {
    --primary-color: #0077b5;    /* LinkedIn blue */
    --secondary-color: #00a0dc;  /* Lighter blue */
    /* Change these to your preferred colors */
}
```

### Add More Sections
You can easily add new sections by following the same pattern in `index.html`.

### Update Stats
Edit the numbers in lines 75-81 of `index.html` to reflect your actual LinkedIn metrics.

## 🔗 Booking Tools

Popular options for "Book a Call":
- **Calendly** - https://calendly.com (Free tier available)
- **Cal.com** - https://cal.com (Open source, free)
- **Google Calendar** - Create an appointment schedule

## 📱 Social Media Links

Update these in `index.html`:
- **Calendly**: Replace `yourusername` with your actual username
- **LinkedIn**: Replace with your LinkedIn profile URL
- **Instagram**: Replace with your Instagram handle

## 💡 Tips for Success

1. **Add Real Testimonials**: Screenshot or copy actual comments from your LinkedIn posts
2. **Update Regularly**: Keep your stats and about section current
3. **Professional Photo**: Use a high-quality headshot
4. **Unique Stats**: Show metrics that matter (followers, post impressions, engagement rate)
5. **Tell Your Story**: Make the About section personal and authentic

## 🛠️ Troubleshooting

**Site not showing up?**
- Wait 5-10 minutes after enabling GitHub Pages
- Check that your repository is named `yourusername.github.io`
- Ensure files are in the root directory (not in a subfolder)

**Images not loading?**
- Make sure image files are in the same folder as `index.html`
- Check that image filenames match exactly (case-sensitive)

**Want to use a custom domain?**
- Buy a domain from Namecheap, Google Domains, etc.
- In GitHub Pages settings, add your custom domain
- Follow GitHub's instructions for DNS setup

## 📧 Need Help?

If you run into issues:
1. Check the [GitHub Pages documentation](https://docs.github.com/en/pages)
2. Verify all file names are correct
3. Make sure your HTML doesn't have syntax errors

## 📄 License

Free to use for personal projects. Just customize it and make it your own!

---

**Ready to go live?** Follow the steps above and your site will be online in minutes! 🚀
