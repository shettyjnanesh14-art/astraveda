import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Website & Landing Pages - AstraVeda',
  description: 'High-converting, responsive websites and landing pages optimized for performance and results.',
};

const packages = [
  { name: 'Landing Page', price: '₹35,000', description: 'Single high-converting page', features: ['Custom design', 'Mobile responsive', 'Fast loading', 'Lead capture form', 'SEO basics'] },
  { name: 'Business Website', price: '₹75,000', description: '5-8 page business website', features: ['Custom design', '5-8 pages', 'CMS integration', 'Contact forms', 'Google Analytics', 'SEO optimized'] },
  { name: 'E-commerce', price: '₹1,50,000', description: 'Full online store', features: ['Product catalog', 'Payment gateway', 'Admin panel', 'Inventory management', 'Order tracking', 'Customer accounts'] },
];

export default function WebDesignPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Websites That <span className="gradient-text">Convert</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            Beautiful, fast, and optimized for results—not just aesthetics.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Start Your Project
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-4">Packages</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card key={pkg.name}>
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
              <Button href="/pricing" variant="outline" fullWidth>Get Started</Button>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready for a High-Converting Website?
          </h2>
          <Button href="/pricing" variant="primary" size="lg">Get Custom Quote</Button>
        </div>
      </Section>
    </div>
  );
}

