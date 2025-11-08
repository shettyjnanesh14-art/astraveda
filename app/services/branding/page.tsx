import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Branding & Identity - AstraVeda',
  description: 'Complete brand identity system including logo, brand book, and visual guidelines that position you as premium.',
};

const packages = [
  {
    name: 'Essential',
    price: '₹50,000',
    description: 'Logo + basic brand identity',
    features: ['Logo design (3 concepts)', 'Color palette', 'Typography system', 'Basic brand book', 'Business card design'],
  },
  {
    name: 'Professional',
    price: '₹1,00,000',
    description: 'Complete brand identity system',
    features: ['Full branding package', 'Comprehensive brand book (30+ pages)', 'Stationery design', 'Social media kit', 'Email templates'],
  },
  {
    name: 'Premium',
    price: '₹2,00,000',
    description: 'Full rebrand with positioning',
    features: ['Brand strategy workshop', 'Complete identity system', 'Photography direction', 'Launch campaign', 'Brand ambassador guidelines'],
  },
];

export default function BrandingPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            <span className="gradient-text">Brand Identity</span> That Positions You as Premium
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            More than just a logo—a complete visual system that makes your brand unforgettable.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Start Your Brand
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-4">Packages</h2>
        </div>
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
                    <span className="text-charcoal-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/pricing" variant={index === 1 ? 'primary' : 'outline'} fullWidth>
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Build a Premium Brand?
          </h2>
          <Button href="/pricing" variant="primary" size="lg">
            Get Custom Quote
          </Button>
        </div>
      </Section>
    </div>
  );
}

