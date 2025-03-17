
import { useEffect } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const AchievementsSection = () => {
  useEffect(() => {
    // Add a dark overlay to the background
    document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.85))';
    
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <section className="achievements pt-32 text-white px-5 text-center relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black">
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-30" 
               style={{
                 backgroundImage: 'linear-gradient(to right, rgba(0, 217, 255, 0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 217, 255, 0.2) 1px, transparent 1px)',
                 backgroundSize: '40px 40px',
                 backgroundPosition: 'center center',
                 animation: 'gridMove 20s linear infinite'
               }}
          />
          
          {/* Floating particles */}
          {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-cyan-500/30 animate-float"
              style={{
                width: `${Math.random() * 8 + 2}px`,
                height: `${Math.random() * 8 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px rgba(0, 217, 255, 0.8)',
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="achievements-container flex justify-between items-center max-w-7xl mx-auto flex-col lg:flex-row relative z-10">
        {/* Left Side - Achievements List */}
        <div className="achievements-list flex-1 text-left pl-0 lg:pl-12 mb-10 lg:mb-0 animate-fade-in">
          <h2 className="text-4xl border-l-4 border-red-600 pl-3 mb-8">Our Achievements</h2>
          
          <div className="achievement-item flex items-center my-4 relative animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00bfff] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Code Avengers Hackathon 2023</strong><br/>Winner
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00bfff] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Code Chase Hackathon 2024</strong><br/>Winner
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00ff7f] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Agri Innovation Contest 2024</strong><br/>Finalist
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00ff7f] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>NASA Space Apps Challenge 2024</strong><br/>Local Event 2nd Runner-Up
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00ff7f] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Aakriti TechJam 1.0</strong><br/>Winner
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00ff7f] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Sphinx24 Web-A-Thon</strong><br/>Finalist
            </div>
          </div>
        </div>

        {/* Right Side - Animated Image Container */}
        <div className="image-container relative bg-black/70 backdrop-blur-md rounded-xl p-5 text-center border-2 border-white/20 shadow-lg shadow-white/30 mx-0 lg:mx-12 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <h2 className="text-2xl mb-4">Letter of Appreciation & Recommendation</h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-md mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="basis-full sm:basis-1/2">
                <img src="/1.png" alt="Letter 1" className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-110" />
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/2">
                <img src="/2.png" alt="Letter 2" className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-110" />
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/2">
                <img src="/3.png" alt="Letter 3" className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-110" />
              </CarouselItem>
              <CarouselItem className="basis-full sm:basis-1/2">
                <img src="/4.png" alt="Letter 4" className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-110" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-black/50 text-white hover:bg-black/80 hover:text-astra-primary" />
            <CarouselNext className="right-0 bg-black/50 text-white hover:bg-black/80 hover:text-astra-primary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
