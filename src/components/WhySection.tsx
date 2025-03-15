
import { Lightbulb, Handshake, Scale, Rocket } from 'lucide-react';
import FeatureCard from './FeatureCard';

const WhySection = () => {
  return (
    <section className="relative min-h-screen w-full py-24 px-4 flex flex-col justify-center items-center">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="opacity-0 animate-fade-in">
          <h2 className="text-5xl font-bold astra-title-gradient mb-6">
            Why <span>AstraGenX?</span>
          </h2>
          
          <p className="text-white/80 text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
            AstraGenX is an innovative startup dedicated to transforming industries
            through advanced solutions across Agriculture, Space Technology,
            Healthcare, Artificial Intelligence, Machine Learning, Industrial
            Manufacturing, Education and beyond. Our mission is to leverage
            technology and data to address the evolving challenges of modern society
            while enhancing efficiency and driving growth. Committed to
            sustainability and corporate social responsibility, we prioritize
            practices that benefit both businesses and the environment, aiming to
            deliver transformative solutions that create lasting impact and positive
            change across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <FeatureCard
            icon={Lightbulb}
            title="Innovation Without Limits"
            description="From agriculture and defense to space tech, cybersecurity, healthcare, AI, and beyond, we explore every frontier where technology can make a difference."
            delay={200}
          />
          
          <FeatureCard
            icon={Handshake}
            title="Ethical & Sustainable Growth"
            description="We prioritize social impact alongside economic success, ensuring innovation serves humanity first."
            delay={400}
          />
          
          <FeatureCard
            icon={Scale}
            title="Work-Life Balance Meets Excellence"
            description="We believe in fostering an environment where great ideas thrive without compromise."
            delay={600}
          />
          
          <FeatureCard
            icon={Rocket}
            title="Proven Vision, Scalable Future"
            description="With multiple AI-powered prototypes already developed, we are ready to redefine industries and break new ground."
            delay={800}
          />
        </div>
      </div>
    </section>
  );
};

export default WhySection;
