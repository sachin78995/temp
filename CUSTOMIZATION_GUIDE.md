# 📝 Quick Customization Guide

This guide will help you personalize the engagement website with your own content.

## 🖼️ Adding Photos

### 1. Couple Profile Photos

**Location**: `src/components/CoupleIntro.jsx`

**Lines to Edit**: Look for the placeholder divs with emojis 👰 and 🤵

**Replace with**:
```jsx
// For Bride
<img 
  src="/bride-photo.jpg" 
  alt="Bride Name" 
  className="w-full h-full object-cover"
/>

// For Groom
<img 
  src="/groom-photo.jpg" 
  alt="Groom Name" 
  className="w-full h-full object-cover"
/>
```

**Update the names**:
- Find `"Sister's Name"` and replace with actual bride name
- Find `"Groom's Name"` and replace with actual groom name

---

### 2. Photo Gallery

**Location**: `src/components/PhotoGallery.jsx`

**Lines to Edit**: The `photos` array (around line 8)

**Replace with**:
```javascript
const photos = [
  { id: 1, src: '/photos/photo1.jpg', title: 'Beautiful Moments' },
  { id: 2, src: '/photos/photo2.jpg', title: 'Together Forever' },
  { id: 3, src: '/photos/photo3.jpg', title: 'Love Blooms' },
  { id: 4, src: '/photos/photo4.jpg', title: 'Magical Times' },
  { id: 5, src: '/photos/photo5.jpg', title: 'Precious Memories' },
  { id: 6, src: '/photos/photo6.jpg', title: 'Celebrations' },
];
```

**Then update the render**:
```jsx
<img 
  src={photo.src} 
  alt={photo.title} 
  className="w-full h-full object-cover rounded-lg"
/>
```

---

### 3. Closing Background Image

**Location**: `src/components/ClosingBlessing.jsx`

**Lines to Edit**: Look for the background gradient div

**Add background image**:
```jsx
<div className="absolute inset-0">
  <img 
    src="/couple-background.jpg" 
    alt="Couple" 
    className="w-full h-full object-cover"
  />
</div>
```

---

## ✍️ Customizing Text Content

### 1. Couple Names & Details

**Location**: `src/components/CoupleIntro.jsx`

**Find and Replace**:
- `"Sister's Name"` → Actual bride name
- `"The Radiant Bride"` → Custom subtitle
- `"Groom's Name"` → Actual groom name
- `"The Charming Groom"` → Custom subtitle

---

### 2. Love Story Timeline

**Location**: `src/components/LoveStoryTimeline.jsx`

**Edit the `events` array** (around line 12):
```javascript
const events = [
  {
    id: 1,
    emoji: '✨',
    title: 'First Meet',
    date: 'December 2023',  // ← Your actual date
    description: 'Met at a friend\'s wedding',  // ← Your story
    color: 'blush'
  },
  {
    id: 2,
    emoji: '💝',
    title: 'First Date',
    date: 'January 2024',  // ← Your actual date
    description: 'A magical evening at the beach',  // ← Your story
    color: 'lavender'
  },
  // Add more events...
];
```

---

### 3. Brother's Message

**Location**: `src/components/SpecialMessage.jsx`

**Find line with `const message =`** (around line 10)

**Replace the entire message**:
```javascript
const message = "Your personalized heartfelt message from brother to sister goes here. Make it emotional, make it memorable. This is your chance to express your love and blessings. 💕";
```

**Update the signature** (look for "Your Loving Brother"):
```jsx
<p className="font-cursive text-2xl text-rosegold-600">
  Your Name
</p>
```

---

## 🎵 Adding Background Music

**Location**: `src/components/Hero.jsx`

**Steps**:

1. Add your music file to the `public` folder (e.g., `public/music.mp3`)

2. Add this at the top of the Hero component:
```javascript
const audioRef = useRef(null);

useEffect(() => {
  audioRef.current = new Audio('/music.mp3');
  audioRef.current.loop = true;
  return () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
}, []);
```

3. Update the music button onClick:
```javascript
onClick={() => {
  if (isPlaying) {
    audioRef.current.pause();
  } else {
    audioRef.current.play();
  }
  setIsPlaying(!isPlaying);
}}
```

---

## 📅 Updating the Engagement Date

The date is currently set to **30 January 2026**. If you need to change it:

### 1. Hero Section Countdown
**Location**: `src/components/Hero.jsx`
**Line**: Around line 12
```javascript
const engagementDate = new Date('2026-01-30T00:00:00');  // ← Change this
```

### 2. Display Date
**Location**: `src/components/Hero.jsx`
**Find**: "Engagement on 30 January 2026"
**Replace with**: Your custom text

### 3. Engagement Highlight Section
**Location**: `src/components/EngagementHighlight.jsx`
**Find**: The date display (30, January 2026)
**Update**: Both the number and month text

### 4. Closing Section
**Location**: `src/components/ClosingBlessing.jsx`
**Find**: "30th January 2026"
**Replace with**: Your date

---

## 🎨 Changing Colors

If you want to adjust the color scheme:

**Location**: `tailwind.config.js`

You can modify the custom colors:
```javascript
colors: {
  blush: {
    // Adjust these hex values
    500: '#ff4081',  // Main blush color
  },
  rosegold: {
    500: '#d4876b',  // Main rosegold color
  },
  // etc...
}
```

---

## 📁 File Organization

Place your images in the `public` folder:
```
public/
  ├── bride-photo.jpg
  ├── groom-photo.jpg
  ├── couple-background.jpg
  ├── music.mp3
  └── photos/
      ├── photo1.jpg
      ├── photo2.jpg
      ├── photo3.jpg
      └── ...
```

Then reference them with `/filename.jpg` in your code.

---

## 🚀 Testing Your Changes

After making changes:

1. Save all files
2. The browser will auto-refresh (Hot Module Replacement)
3. Check if everything looks good
4. Test on mobile view (press F12 → Toggle device toolbar)

---

## ✅ Pre-Launch Checklist

- [ ] Updated couple names in CoupleIntro
- [ ] Added bride and groom photos
- [ ] Populated photo gallery with 6+ images
- [ ] Customized love story timeline events
- [ ] Written personalized brother's message
- [ ] Updated all dates if different from Jan 30, 2026
- [ ] Added background music (optional)
- [ ] Added closing background image
- [ ] Tested on mobile devices
- [ ] Checked all animations work smoothly
- [ ] Verified countdown timer shows correct date

---

## 💡 Pro Tips

1. **Image Sizes**: Keep photos under 500KB for fast loading
2. **Image Format**: Use WebP for better compression
3. **Aspect Ratios**: 
   - Profile photos: Square (1:1)
   - Gallery photos: Square or landscape (4:3)
   - Background: Wide landscape (16:9)
4. **Music**: Keep file under 5MB, use MP3 format
5. **Testing**: Always test on real mobile devices, not just browser DevTools

---

## 🆘 Need Help?

If something isn't working:
1. Check the browser console (F12 → Console tab)
2. Make sure file paths are correct (start with `/`)
3. Verify images are in the `public` folder
4. Save all files and refresh the browser

---

**Happy Customizing! 💖**
