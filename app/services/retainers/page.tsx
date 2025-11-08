import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: '360° Growth Retainers - AstraVeda',
  description: 'All-in-one retainer combining multiple services for complete brand growth and market domination.',
};

const packages = [
  { name: 'Growth', price: '₹1,00,000', description: 'Social + Ads + Content', features: ['Social media management', 'Performance ads', 'Content creation', 'Monthly reports', '2 strategy calls/month', 'Email support'] },
  { name: 'Scale', price: '₹2,00,000', description: 'Full digital marketing', features: ['All services included', 'SEO + Content', 'Video production', 'Weekly check-ins', 'Dedicated strategist', 'Priority support'] },
  { name: 'Dominance', price: '₹3,50,000+', description: 'Complete brand domination', features: ['Everything included', 'Unlimited support', 'Custom campaigns', 'C-suite reporting', 'Quarterly planning', '24/7 priority access'] },
];

export default function RetainersPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            <span className="gradient-text">360° Growth Retainers</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            All-in-one packages for brands serious about dominating their niche.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Build My Plan
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={pkg.name} className={index === 1 ? 'border-primary-500 border-2' : ''}>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-primary-500 mb-2">{pkg.price}</div>
                <p className="text-sm text-charcoal-600">{pkg.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/pricing" variant={index === 1 ? 'primary' : 'outline'} fullWidth>Get Started</Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready for Complete Growth?
          </h2>
          <Button href="/pricing" variant="primary" size="lg">Get Custom Quote</Button>
        </div>
      </Section>
    </div>
  );
}

