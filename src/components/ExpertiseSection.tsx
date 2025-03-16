
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faShieldAlt, faChartLine, faVrCardboard, faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: faRobot,
      title: "AI-Powered Assistant",
      description: "Revolutionizing automation with our advanced AI-driven solutions."
    },
    {
      icon: faShieldAlt,
      title: "Cybersecurity Suite",
      description: "Unparalleled security with real-time threat detection & prevention."
    },
    {
      icon: faChartLine,
      title: "Data Analytics Engine",
      description: "Powerful insights & predictions with our data analytics software."
    },
    {
      icon: faVrCardboard,
      title: "VR/AR Solutions",
      description: "Immersive experiences with our cutting-edge AR & VR technologies."
    },
    {
      icon: faNetworkWired,
      title: "IoT Smart Hub",
      description: "Seamlessly connecting devices for an intelligent ecosystem."
    }
  ];

  return (
    <section className="expertise min-h-screen w-full py-24 px-4 text-center">
      <h2 className="expertise-title text-5xl font-bold astra-title-gradient mb-10">
        Our Area <span>Of Expertise</span>
      </h2>
      <div className="expertises-container flex justify-center gap-8 flex-wrap max-w-7xl mx-auto">
        {expertiseAreas.map((area, index) => (
          <div 
            key={index}
            className="expertises-card bg-black/70 backdrop-blur-md border-2 border-astra-primary/20 
                      shadow-[0_0_15px_rgba(0,217,255,0.3)] rounded-xl p-5 w-[300px] text-center
                      transition-all duration-400 relative overflow-hidden animate-float
                      hover:scale-110 hover:rotate-2 hover:shadow-[0_0_15px_rgba(255,255,0,0.5),0_0_50px_rgba(6,255,184,0.4)]"
          >
            <div className="expertises-icon text-5xl mb-4 text-yellow-400 transition-colors duration-300">
              <FontAwesomeIcon icon={area.icon} />
            </div>
            <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
            <p className="text-white/80">{area.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertiseSection;
