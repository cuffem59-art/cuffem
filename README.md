# Cuffem.xyz Website

raw website for kick streamer cuffem with actual roasts and minimal design

## 🚀 Features

- **Entry Screen** - Click to enter with background music
- **Background Music** - Auto-plays on entry (configurable)
- **Mugshot Section** - The famous mugshot front and center
- **Photo Gallery** - 6 photo grid with hover animations
- **Social Links** - All socials in one place (easy config)
- **Animated Stats** - 185k followers, 10k+ calories per stream
- **Hover Animations** - Photos, stats, links all animated
- **Fully Responsive** - Mobile ready

## 📁 File Structure

```
cuffem website/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript + CONFIG
├── images/             # Image folder
│   ├── mugshot.jpg     # The mugshot photo
│   ├── photo1.jpg      # Gallery photo 1
│   ├── photo2.jpg      # Gallery photo 2
│   ├── photo3.jpg      # Gallery photo 3
│   ├── photo4.jpg      # Gallery photo 4
│   ├── photo5.jpg      # Gallery photo 5
│   └── photo6.jpg      # Gallery photo 6
├── music/              # Music folder
│   └── song.mp3        # Background music file
└── README.md           # This file
```

## 🖼️ Adding Images

1. Place all your images in the `images/` folder
2. Name them according to the structure above:
   - `mugshot.jpg` - The jail mugshot
   - `photo1.jpg` through `photo6.jpg` - Gallery photos

**Recommended Image Sizes:**
- Mugshot: 600x800px (portrait orientation)
- Gallery photos: 400x300px or similar aspect ratio

**Supported Formats:** JPG, PNG, WebP

## 🎵 Adding Background Music

1. Place your music file in the `music/` folder
2. Name it `song.mp3` (or update the config - see below)
3. Music will auto-play when user clicks "CLICK TO ENTER"

**Supported Formats:** MP3, WAV, OGG

## ⚙️ Configuration (Easy Setup)

**All settings are in `script.js` at the top:**

```javascript
const CONFIG = {
    musicFile: 'music/song.mp3',           // Change your music file here
    socialLinks: {
        kick: 'https://kick.com/cuffem',
        twitter: 'https://twitter.com/cuffem',
        instagram: 'https://instagram.com/cuffem',
        youtube: 'https://youtube.com/@cuffem',
        tiktok: 'https://tiktok.com/@cuffem'
    }
};
```

**To update:**
- Change `musicFile` to your music file path
- Update any social links you want to change
- Save `script.js` and you're done

## 🌐 Deploying to cuffem.xyz

### Option 1: Netlify (Recommended)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the entire `cuffem website` folder
3. Configure custom domain to `cuffem.xyz` in site settings
4. Update DNS settings at your domain registrar

### Option 2: GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Point `cuffem.xyz` to GitHub Pages

### Option 3: Traditional Hosting
1. Upload all files to your web host via FTP
2. Ensure files are in the public_html or www directory
3. Point domain to your hosting server

## 🎨 Customization

### Colors
Edit CSS variables in `styles.css` (lines 9-16):
```css
--primary: #00ff41;      /* Main green color */
--secondary: #ff0080;    /* Pink accent color */
--dark: #0a0a0a;         /* Background */
```

### Content
- Edit roast cards in `index.html` (lines 36-67)
- Modify section headings and text throughout `index.html`

## 🛠️ Testing Locally

1. Simply open `index.html` in your web browser
2. Or use a local server:
   ```
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000`

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Tips

- Keep image file sizes optimized (compress before uploading)
- Test on mobile devices before deploying
- Update social links to actual working URLs
- Consider adding more photos to the gallery as needed

## 🎯 Next Steps

1. ✅ Add your images to the `images/` folder
2. ✅ Update social media links
3. ✅ Customize stats and content
4. ✅ Test locally
5. ✅ Deploy to cuffem.xyz

---

**Built with ❤️ (and roasts) for the Cuffem community**
