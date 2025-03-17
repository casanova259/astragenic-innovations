
import { Rocket, ShieldCheck, Lightbulb, Users, Sparkles, RefreshCcw } from 'lucide-react';
import FeatureCard from './FeatureCard';

const WhySection = () => {
  const features = [
    {
      icon: Rocket,
      title: 'Innovation',
      description: 'We pioneer cutting-edge solutions that redefine technological boundaries.',
    },
    {
      icon: ShieldCheck,
      title: 'Security',
      description: 'Your data protection is our priority with military-grade encryption.',
    },
    {
      icon: Lightbulb,
      title: 'Efficiency',
      description: 'Optimized solutions that make your workflows seamless and productive.',
    },
    {
      icon: Users,
      title: 'Expertise',
      description: 'A team of specialists dedicated to solving complex challenges.',
    },
    {
      icon: Sparkles,
      title: 'AI-Powered',
      description: 'Leveraging artificial intelligence to deliver intelligent solutions.',
    },
    {
      icon: RefreshCcw,
      title: 'Adaptability',
      description: 'Flexible systems that evolve with your changing requirements.',
    },
  ];

  return (
    <section id="why-section" className="relative py-24 px-4 text-center min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-blue-950/30 to-black">
        <div className="absolute inset-0 opacity-20">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-blue-400/30 animate-pulse-slow"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${Math.random() * 6 + 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <h2 className="text-4xl font-bold astra-title-gradient mb-6 animate-fade-in">
        Why AstraGenX?
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        We combine innovation with expertise to deliver technology solutions that empower businesses to reach new heights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySection;
