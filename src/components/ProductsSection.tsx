
import { useState } from 'react';

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
    <section className="products text-center py-24 px-4 text-white overflow-hidden min-h-screen">
      <h2 className="products-title text-5xl font-bold uppercase astra-title-gradient mb-10">
        Our <span>Products</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="card-hover-effect glass-card bg-black/70 backdrop-blur-md border-2 border-astra-primary/20 
                     rounded-xl p-5 text-center transition-all duration-400 animate-float"
          >
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <span 
                className={`absolute top-2 right-2 text-2xl cursor-pointer ${product.favorite ? 'text-yellow-400' : 'text-white/60'}`}
                onClick={() => toggleFavorite(product.id)}
              >
                {product.favorite ? '★' : '☆'}
              </span>
            </div>
            
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-white/80 text-sm mb-4">{product.description}</p>
              
              <div className="mb-4">
                <span className="inline-block bg-orange-500 hover:bg-green-400 transition-colors rounded-full px-3 py-1 text-xs text-white cursor-pointer">
                  {product.tag}
                </span>
              </div>
              
              <div className="flex justify-end">
                <button 
                  onClick={() => handleOrderClick(product.title)}
                  className="bg-black text-white hover:bg-gray-800 hover:text-green-400 transition-colors rounded-full px-4 py-2 text-sm"
                >
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
