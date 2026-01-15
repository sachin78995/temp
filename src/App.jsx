import { useEffect } from 'react';
import Hero from './components/Hero';
import CoupleIntro from './components/CoupleIntro';
import PhotoGallery from './components/PhotoGallery';
import LoveStoryTimeline from './components/LoveStoryTimeline';
import SpecialMessage from './components/SpecialMessage';
import EngagementHighlight from './components/EngagementHighlight';
import ClosingBlessing from './components/ClosingBlessing';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    // Add custom cursor class to body
    document.body.classList.add('custom-cursor');
    
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      
      <Hero />
      <CoupleIntro />
      <PhotoGallery />
      <LoveStoryTimeline />
      <SpecialMessage />
      <EngagementHighlight />
      <ClosingBlessing />
    </div>
  );
}

export default App;
