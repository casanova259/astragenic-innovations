
import { useEffect } from 'react';

const AchievementsSection = () => {
  useEffect(() => {
    // Add a dark overlay to the background
    document.body.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.85))';
    
    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <section className="achievements pt-32 text-white px-5 text-center">
      <div className="achievements-container flex justify-between items-center max-w-7xl mx-auto flex-col lg:flex-row">
        {/* Left Side - Achievements List */}
        <div className="achievements-list flex-1 text-left pl-0 lg:pl-12 mb-10 lg:mb-0">
          <h2 className="text-4xl border-l-4 border-red-600 pl-3 mb-8">Our Achievements</h2>
          
          <div className="achievement-item flex items-center my-4 relative">
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00bfff] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Code Avengers Hackathon 2023</strong><br/>Winner
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative">
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00bfff] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Code Chase Hackathon 2024</strong><br/>Winner
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative">
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00ff7f] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Agri Innovation Contest 2024</strong><br/>Finalist
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative">
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00ff7f] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>NASA Space Apps Challenge 2024</strong><br/>Local Event 2nd Runner-Up
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative">
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00ff7f] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Aakriti TechJam 1.0</strong><br/>Winner
            </div>
          </div>
          
          <div className="achievement-item flex items-center my-4 relative">
            <div className="circle w-6 h-6 rounded-full mr-4 bg-[#00ff7f] animate-pulse-slow"></div>
            <div className="achievement-text">
              <strong>Sphinx24 Web-A-Thon</strong><br/>Finalist
            </div>
          </div>
        </div>

        {/* Right Side - Animated Image Container */}
        <div className="image-container relative bg-black/70 backdrop-blur-md rounded-xl p-5 text-center border-2 border-white/20 shadow-lg shadow-white/30 mx-0 lg:mx-12">
          <h2 className="text-2xl mb-4">Letter of Appreciation & Recommendation</h2>
          <div className="image-slider flex overflow-x-auto snap-x snap-mandatory gap-5 p-3 whitespace-nowrap scrollbar-hide">
            <img src="/1.png" alt="Letter 1" className="max-w-[250px] h-auto rounded-lg snap-center transition-transform duration-300 hover:scale-110" />
            <img src="/2.png" alt="Letter 2" className="max-w-[250px] h-auto rounded-lg snap-center transition-transform duration-300 hover:scale-110" />
            <img src="/3.png" alt="Letter 3" className="max-w-[250px] h-auto rounded-lg snap-center transition-transform duration-300 hover:scale-110" />
            <img src="/4.png" alt="Letter 4" className="max-w-[250px] h-auto rounded-lg snap-center transition-transform duration-300 hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
