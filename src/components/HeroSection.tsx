
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import BlackHoleAnimation from './BlackHoleAnimation';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center h-screen py-24 px-4 overflow-hidden">
      <BlackHoleAnimation />
      <div className="hero-content z-10 animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-sans astra-gradient-text animate-pulse-slow">
          AstraGenX
        </h1>
        <p className="text-xl md:text-2xl mt-6 max-w-3xl mx-auto leading-relaxed">
          Innovating the future with cutting-edge technology. Experience the next generation of software solutions built in India.
        </p>
        <div className="flex gap-6 mt-8 justify-center">
          <a href="https://www.facebook.com/AstraGenX" target="_blank" rel="noopener noreferrer" className="text-astra-primary text-2xl transition-transform hover:scale-125">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://x.com/AstraGenX" target="_blank" rel="noopener noreferrer" className="text-astra-primary text-2xl transition-transform hover:scale-125">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="https://www.instagram.com/astragenx/" target="_blank" rel="noopener noreferrer" className="text-astra-primary text-2xl transition-transform hover:scale-125">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/company/astragenx/" target="_blank" rel="noopener noreferrer" className="text-astra-primary text-2xl transition-transform hover:scale-125">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
