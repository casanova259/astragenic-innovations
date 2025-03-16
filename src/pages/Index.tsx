
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import WhySection from '../components/WhySection';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';

const Index = () => {
  useEffect(() => {
    // Add a dark overlay to the background
    document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.85))';
    
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <WhySection />
        <ProductsSection />
      </main>
    </div>
  );
};

export default Index;
