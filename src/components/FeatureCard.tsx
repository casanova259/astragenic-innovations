
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="glass-card card-hover-effect px-8 py-10 w-full mx-auto opacity-0 animate-fade-in flex flex-col items-center"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-center items-center mb-6">
        <Icon size={56} className="text-astra-primary transition-colors duration-300 group-hover:text-astra-secondary" />
      </div>
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-white/80 leading-relaxed text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
