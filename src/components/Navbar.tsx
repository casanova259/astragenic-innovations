
import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-black/30 backdrop-blur-md' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex justify-center items-center">
        <ul className={`flex items-center lg:bg-black lg:border-2 lg:border-transparent lg:rounded-xl lg:px-6 lg:py-1 lg:shadow-lg lg:animate-glow transition-all duration-300 ${isMenuOpen ? 'flex-col absolute top-16 left-0 w-full bg-black/90 backdrop-blur-md rounded-xl py-4' : 'hidden lg:flex'}`}>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300">Home</Link>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300">Why AstraGenX?</Link>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300">Products</Link>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300">Expertise</Link>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300">Achievement</Link>
          </li>
          <li className="my-2 lg:my-0 lg:mx-4">
            <Link to="/" className="text-white/90 hover:text-astra-primary px-4 py-2 block transition-colors duration-300">Team</Link>
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
