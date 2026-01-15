# 💖 Two Hearts, One Promise - Ultra-Premium Engagement Website

A fully animated, emotionally rich engagement website celebrating a sister's engagement on **30 January 2026**.

![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055?style=for-the-badge&logo=framer)

## ✨ Features

### 🎯 Core Sections

1. **Hero Section** - Animated heart particles, live countdown timer, gradient heading, music control
2. **Couple Introduction** - Animated profile cards with connecting heart and hover effects
3. **Interactive Photo Gallery** - Polaroid-style cards with full-screen modal
4. **Love Story Timeline** - Scroll-based GSAP animations with drawing timeline
5. **Special Message Section** - Typewriter animation with floating petals
6. **Engagement Day Highlight** - Ring animation with confetti burst
7. **Closing Blessing** - Beautiful finale with floating hearts

### 💎 Extra Enhancements

- ❤️ Heart-trail custom cursor
- 📱 Mobile-first responsive design
- 🎨 Premium color palette (Blush Pink, Rose Gold, Cream, Lavender)
- ✍️ Elegant typography (Playfair Display, Dancing Script, Cormorant Garamond)
- ⚡ Optimized performance with Vite

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Development server runs at `http://localhost:5173`

## 🎨 Customization Guide

### Add Photos
Replace emoji placeholders in components with actual images:
```jsx
<img src="/path/to/photo.jpg" alt="Description" className="w-full h-full object-cover"/>
```

### Update Couple Names
Edit `src/components/CoupleIntro.jsx` to add names and details.

### Customize Timeline
Edit events in `src/components/LoveStoryTimeline.jsx`.

### Personalize Message
Edit the message in `src/components/SpecialMessage.jsx`.

### Add Background Music
Implement audio in `src/components/Hero.jsx` using the play/pause button.

## 📂 Project Structure

```
divy/
├── src/
│   ├── components/      # All React components
│   ├── App.jsx          # Main app
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── tailwind.config.js   # Custom colors & animations
└── package.json
```

## 🚀 Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deployments.

## 📝 Pre-Launch Checklist

- [ ] Replace emoji placeholders with actual photos
- [ ] Update couple names
- [ ] Customize timeline events
- [ ] Add personalized message
- [ ] Add background music (optional)
- [ ] Test on mobile devices
- [ ] Optimize images (WebP, <500KB each)
- [ ] Deploy to production

## 💡 Tips

- Use WebP format for images
- Keep images optimized and under 500KB
- Test on real mobile devices
- Use MP3 for background music

---

**Built with ❤️ for a special sister's engagement**

*May their love story be as beautiful as this website! 💕*
