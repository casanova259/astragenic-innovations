
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
      className="glass-card card-hover-effect px-6 py-8 w-full max-w-xs mx-auto opacity-0 animate-fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex justify-center items-center mb-6">
        <Icon size={48} className="text-astra-primary transition-colors duration-300 group-hover:text-astra-secondary" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-white/80 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
