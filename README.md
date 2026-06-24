# Wedding Website Template

A beautiful, responsive wedding website HTML template. Free and open source.

🎯 **Live Demo:** [nhungtuong.com](https://nhungtuong.com)

## Features

- 📱 Fully responsive (Bootstrap 4)
- 🖼️ Image gallery with Shuffle.js filter
- ⏱️ Live countdown to wedding date
- 💌 RSVP form with validation
- 🎵 Background music player (lazy-loaded)
- 🗓️ Add-to-calendar integration
- 💝 Online wedding gift box (QR code)
- 🚀 Optimized for Lighthouse performance
- ⚡ Lazy-loading images with IntersectionObserver

## Quick Start

1. **Fork** this repository
2. **Enable GitHub Pages**: Settings → Pages → deploy from `main`
3. **Customize**:
   - Edit `index.html` — change names, date, venue, photos
   - Replace images in `assets/images/`
   - Edit `assets/mp3/` for background music
4. **Update CNAME** with your domain (optional)
5. Done! Your wedding website is live at `https://yourusername.github.io`

## Customization Guide

### Basic Info
Edit the hero section in `index.html`:

```html
<h1 class="header-caption-heading">Your Name <span>❤</span> Partner Name</h1>
<p class="text-capitalize">01 . 01 . 2025</p>
```

### Gallery
Replace images in `assets/images/anh_cuoi/` and update the gallery section in `index.html`.

### Countdown
Update the `data-date` attribute:

```html
<div id="clock" data-date="2025-01-01"></div>
```

## Performance

This template scores **95+** on Lighthouse (desktop):
- ✅ Optimized images (WebP format)
- ✅ Non-blocking CSS/JS
- ✅ Critical CSS inlined
- ✅ Fonts loaded asynchronously
- ✅ Brotli compression via `.htaccess`

## License

MIT — free for personal and commercial use.

## Support

If you find this template useful, consider supporting:

- ⭐ Star this repo
- 🔗 Share with friends planning a wedding
- 💰 [Buy me a coffee](https://nhungtuong.com)
