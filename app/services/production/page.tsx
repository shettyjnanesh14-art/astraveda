import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Photo / Video / Reels Production - AstraVeda',
  description: 'Professional photography, videography, and viral reel production for social media and marketing.',
};

const packages = [
  { name: 'Half-Day Shoot', price: '₹25,000', description: '4-hour shoot', features: ['4 hours shooting', '20 edited photos', '5-8 reels', 'Basic editing', 'Social media formats'] },
  { name: 'Full-Day Shoot', price: '₹45,000', description: '8-hour comprehensive shoot', features: ['8 hours shooting', '40 edited photos', '12-15 reels', 'Advanced editing', 'Drone shots', 'Multiple locations'] },
  { name: 'Monthly Retainer', price: '₹75,000', description: '2 shoots per month', features: ['2 full-day shoots', '80+ photos', '25+ reels', 'Priority scheduling', 'Creative direction', 'Unlimited revisions'] },
];

export default function ProductionPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Professional Content That <span className="gradient-text">Stops the Scroll</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            Thumb-stopping photos, videos, and reels that make your brand stand out.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Book a Shoot
          </Button>
        </div>
      </Section>

      <Section background="gray">
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
            Ready for Professional Content?
          </h2>
          <Button href="/pricing" variant="primary" size="lg">Get Custom Quote</Button>
        </div>
      </Section>
    </div>
  );
}

