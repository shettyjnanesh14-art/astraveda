import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Influencer Marketing - AstraVeda',
  description: 'Strategic influencer and celebrity collaborations for brand awareness and sales that drive real results.',
};

const packages = [
  { name: 'Micro-Influencer', price: '₹50,000', description: '5-10 micro-influencers', features: ['10K-100K followers', '5-10 influencers', 'Campaign management', 'Contract negotiation', 'Performance tracking'] },
  { name: 'Macro Campaign', price: '₹1,00,000', description: '3-5 macro-influencers', features: ['100K-1M followers', '3-5 influencers', 'Comprehensive campaign', 'Content approval', 'Advanced ROI tracking'] },
  { name: 'Celebrity', price: '₹2,00,000', description: 'Celebrity endorsement', features: ['1M+ followers', 'Celebrity partnerships', 'Multi-platform campaign', 'PR integration', 'Usage rights included'] },
];

export default function InfluencerPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            <span className="gradient-text">Influencer Marketing</span> That Delivers ROI
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            Strategic collaborations with influencers who actually drive results—not just vanity metrics.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Start Campaign
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
            Ready to Work with Influencers?
          </h2>
          <Button href="/pricing" variant="primary" size="lg">Get Custom Quote</Button>
        </div>
      </Section>
    </div>
  );
}

