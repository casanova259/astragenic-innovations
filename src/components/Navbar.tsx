
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    handleNavLinkClick();
    
    if (isHomePage) {
      // If on home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on home page, navigate to home and add hash to URL
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/30 backdrop-blur-md' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-center items-center">
        <ul className={`flex items-center lg:bg-black lg:border-2 lg:border-transparent lg:rounded-xl lg:px-6 lg:py-1 lg:shadow-lg lg:animate-glow transition-all duration-300 ${isMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md rounded-xl py-4' : 'hidden lg:flex'}`}>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300" onClick={handleNavLinkClick}>Home</Link>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <button 
              onClick={() => scrollToSection('why-section')} 
              className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300 text-left w-full bg-transparent border-none cursor-pointer"
            >
              Why AstraGenX?
            </button>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <button 
              onClick={() => scrollToSection('products')} 
              className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300 text-left w-full bg-transparent border-none cursor-pointer"
            >
              Products
            </button>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/expertise" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300" onClick={handleNavLinkClick}>Expertise</Link>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/achievements" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300" onClick={handleNavLinkClick}>Achievement</Link>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/team" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300" onClick={handleNavLinkClick}>Team</Link>
          </li>
        </ul>
        
        <button 
          className="lg:hidden absolute top-4 right-4 text-white text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
