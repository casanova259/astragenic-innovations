
import FeatureCard from './FeatureCard';

const WhySection = () => {
  const features = [
    {
      icon: 'rocket',
      title: 'Innovation',
      description: 'We pioneer cutting-edge solutions that redefine technological boundaries.',
    },
    {
      icon: 'shield-check',
      title: 'Security',
      description: 'Your data protection is our priority with military-grade encryption.',
    },
    {
      icon: 'lightbulb',
      title: 'Efficiency',
      description: 'Optimized solutions that make your workflows seamless and productive.',
    },
    {
      icon: 'users',
      title: 'Expertise',
      description: 'A team of specialists dedicated to solving complex challenges.',
    },
    {
      icon: 'sparkles',
      title: 'AI-Powered',
      description: 'Leveraging artificial intelligence to deliver intelligent solutions.',
    },
    {
      icon: 'refresh-ccw',
      title: 'Adaptability',
      description: 'Flexible systems that evolve with your changing requirements.',
    },
  ];

  return (
    <section id="why-section" className="py-24 px-4 text-center min-h-screen">
      <h2 className="text-4xl font-bold astra-title-gradient mb-6">
        Why AstraGenX?
      </h2>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
        We combine innovation with expertise to deliver technology solutions that empower businesses to reach new heights.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhySection;
