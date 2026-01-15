# 🎨 Design & Animation Reference

## Color Palette

### Primary Colors
- **Blush Pink** (#ff4081): Romantic, warm, passionate
- **Rose Gold** (#d4876b): Elegant, premium, sophisticated
- **Cream** (#faf7f4): Soft, neutral, clean
- **Lavender** (#aa82ff): Dreamy, magical, serene

### Usage
- Blush: Primary CTA, hearts, romantic elements
- Rose Gold: Text accents, elegant touches
- Cream: Backgrounds, soft sections
- Lavender: Accents, magical moments

## Typography

### Font Families
1. **Playfair Display** (Serif) - Headings, titles
2. **Dancing Script** (Cursive) - Romantic messages, quotes
3. **Cormorant Garamond** (Elegant Serif) - Body text, descriptions

### Usage Guide
```css
.heading { font-family: 'Playfair Display'; }
.romantic { font-family: 'Dancing Script'; }
.body { font-family: 'Cormorant Garamond'; }
```

## Animation Details

### Framer Motion Animations

**Fade In & Slide Up**
```jsx
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
```

**Scale & Pop**
```jsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

**Stagger Children**
```jsx
variants={containerVariants}
// staggerChildren: 0.2 in parent
```

### GSAP ScrollTrigger

**Timeline Drawing**
- Triggers when section enters viewport
- Smooth line drawing from top to bottom
- Scrub: 1 (tied to scroll position)

### Custom Animations

**Float Animation**
```css
animation: float 3s ease-in-out infinite
```
- Moves element up and down
- Creates floating effect
- Used for decorative elements

**Pulse Glow**
```css
animation: pulse-slow 3s ease-in-out infinite
```
- Subtle pulsing effect
- Used for emphasis
- Draws attention gently

## Component Breakdown

### Hero Section
- **Particles**: 20 floating hearts
- **Countdown**: 4 cards (days, hours, minutes, seconds)
- **Animation**: Gradient text animation, floating hearts
- **Interactive**: Music play/pause button

### Couple Introduction
- **Cards**: 2 profile cards
- **Connecting Element**: Animated heart between cards
- **Hover**: Scale 1.05, glow shadow
- **Animation**: Slide in from sides, rotating decorative hearts

### Photo Gallery
- **Layout**: 3-column grid (responsive)
- **Cards**: Polaroid style with white padding
- **Hover**: Tilt, zoom, overlay
- **Modal**: Full-screen with heart particles
- **Transition**: Scale and rotate animations

### Love Story Timeline
- **Layout**: Alternating left/right
- **Line**: GSAP scroll-triggered drawing
- **Events**: 4 milestone cards
- **Circles**: Animated dots with pulsing rings
- **Animation**: Fade in, slide from sides

### Special Message
- **Effect**: Typewriter animation (50ms per character)
- **Background**: Floating petals (15 elements)
- **Glow**: Pulsing background glow
- **Hearts**: Animated corner decorations

### Engagement Highlight
- **Date**: Large animated numbers
- **Ring**: Rotating with sparkles
- **Confetti**: 50 flower/petal burst on scroll
- **Glow**: Pulsing shadow effects

### Closing Blessing
- **Background**: Full-screen with overlay
- **Floating**: 30 hearts and flowers
- **Text**: Fade in sequence
- **Hearts**: 7 animated hearts, staggered

### Custom Cursor
- **Dot**: 8px red dot following cursor
- **Outline**: 30px circle outline
- **Trail**: 10 heart trail behind cursor
- **Hover**: Scale 1.5 on interactive elements

## Performance Optimization

### Image Guidelines
- Format: WebP (or JPG fallback)
- Size: < 500KB per image
- Dimensions: Max 1920px width
- Compression: 80% quality

### Animation Performance
- Use `transform` and `opacity` for smooth animations
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` for frequently animated elements
- Limit simultaneous animations

### Loading Strategy
- Lazy load images below fold
- Preload critical fonts
- Defer non-critical JavaScript
- Use Vite's code splitting

## Responsive Breakpoints

```javascript
// Mobile: default (320px+)
// Tablet: md: (768px+)
// Desktop: lg: (1024px+)
// Large: xl: (1280px+)
```

### Mobile Optimizations
- Reduced particle count
- Simplified animations
- Touch-friendly hit areas (min 44px)
- Adjusted font sizes
- Stacked layouts

## Browser Compatibility

### Supported Browsers
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile Safari: iOS 12+
- Chrome Mobile: Latest

### Fallbacks
- CSS Grid → Flexbox
- Custom fonts → System fonts
- Animations → Reduced motion respect
- WebP → JPG fallback

## Accessibility Considerations

### Motion
- Respects `prefers-reduced-motion`
- Optional music (user-controlled)
- No auto-play videos

### Colors
- Sufficient contrast ratios
- Not relying solely on color
- Clear focus indicators

### Interaction
- Keyboard navigable
- Touch targets ≥ 44px
- Clear interactive states

## Best Practices

### Do's ✅
- Keep animations smooth (60fps)
- Optimize images before upload
- Test on real devices
- Use semantic HTML
- Provide alt text for images

### Don'ts ❌
- Don't use too many animations simultaneously
- Don't autoplay music without user consent
- Don't use large unoptimized images
- Don't rely on hover for mobile
- Don't block with loading screens

## Deployment Checklist

- [ ] All images optimized
- [ ] Fonts loading correctly
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast loading (<3s)
- [ ] Animations smooth
- [ ] Cross-browser tested
- [ ] SEO meta tags added
- [ ] Favicon set
- [ ] Analytics (optional)

---

**Keep animations smooth, not heavy. Less is more! 💖**
