
import { useState } from 'react';
import { ChevronRight, Star } from 'lucide-react';

// Product type definition
interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  tag: string;
  favorite: boolean;
}

const ProductsSection = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      image: "/brahmastra.jpg",
      title: "Brahmastra – Your Invisible Shield!",
      description: "AI-powered safety at your fingertips! Real-time alerts, voice-activated SOS, and danger zone detection – because your security comes first!",
      tag: "WomenSafety",
      favorite: false
    },
    {
      id: 2,
      image: "/agri.jpg",
      title: "AgriAstraX – Smarter Farms, Bigger Harvests!",
      description: "Revolutionizing agriculture with AI! Detect crop diseases early, optimize farming, and boost yields effortlessly!",
      tag: "Agriculture",
      favorite: false
    },
    {
      id: 3,
      image: "/sang.png",
      title: "Sangrakshak – Security Beyond CAPTCHAs!",
      description: "AI-driven fraud detection that outsmarts bots and hackers! Smarter, faster, and stronger cybersecurity for the digital age!",
      tag: "Security",
      favorite: false
    },
    {
      id: 4,
      image: "/cosmic.jpg",
      title: "CosmicAstraX – Explore the Universe Like Never Before!",
      description: "A breathtaking 3D space journey! Track asteroids, planets, and NEOs in real-time – the cosmos is now at your fingertips!",
      tag: "SpaceExploration",
      favorite: false
    },
    {
      id: 5,
      image: "/drish.jpg",
      title: "DrishyAstra – Turn Text into Captivating Videos!",
      description: "AI-powered text-to-video generator that transforms your words into stunning visuals, bringing ideas to life effortlessly!",
      tag: "ContentCreation",
      favorite: false
    },
    {
      id: 6,
      image: "/med.jpg",
      title: "MedAstraX – AI That Cares!",
      description: "From predictive diagnostics to patient monitoring – smarter healthcare starts here! Stay ahead with AI-driven medical insights!",
      tag: "Medical",
      favorite: false
    }
  ]);

  const toggleFavorite = (id: number) => {
    setProducts(products.map(product => 
      product.id === id ? { ...product, favorite: !product.favorite } : product
    ));
  };

  const handleOrderClick = (title: string) => {
    window.alert(`Order for ${title} placed! Please wait for your product.`);
  };

  return (
    <section id="products" className="products relative text-center py-24 px-4 text-white overflow-hidden min-h-screen">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="absolute inset-0 opacity-30">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-purple-400/40 animate-float"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                filter: `blur(${Math.random() * 50 + 20}px)`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <h2 className="products-title text-5xl font-bold uppercase astra-title-gradient mb-10 relative z-10 animate-fade-in">
        Our <span>Products</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className="group relative overflow-hidden rounded-2xl transition-all duration-500 
                     hover:scale-[1.03] hover:shadow-2xl animate-fade-in z-10"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-transparent z-10" />
            
            <img 
              src={product.image} 
              alt={product.title}
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            <div className="absolute top-0 right-0 p-3 z-20">
              <button
                onClick={() => toggleFavorite(product.id)}
                className="bg-black/50 backdrop-blur-sm p-2 rounded-full transition-all duration-300 hover:bg-black/70"
              >
                <Star 
                  size={20} 
                  className={`${product.favorite ? 'fill-yellow-400 text-yellow-400' : 'text-white/70'} transition-colors duration-300`} 
                />
              </button>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-left transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
              <span className="inline-block bg-astra-primary text-black font-medium rounded-full px-3 py-1 text-xs mb-3">
                {product.tag}
              </span>
              
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              
              <p className="text-white/80 text-sm mb-4 transition-all duration-500 max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 overflow-hidden">
                {product.description}
              </p>
              
              <button 
                onClick={() => handleOrderClick(product.title)}
                className="flex items-center gap-1 text-astra-primary hover:gap-2 transition-all duration-300 text-sm font-medium"
              >
                Explore Now <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
