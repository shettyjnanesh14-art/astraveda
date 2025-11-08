import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'SEO & Content Marketing - AstraVeda',
  description: 'Strategic SEO and content marketing to improve rankings and drive organic traffic that converts.',
};

const packages = [
  { name: 'Foundation', price: '₹30,000', description: 'SEO basics + 4 blogs', features: ['Technical SEO audit', 'On-page optimization', '4 blog posts/month', 'Keyword research', 'Monthly reports'] },
  { name: 'Growth', price: '₹50,000', description: 'Aggressive SEO + 8 blogs', features: ['Complete SEO', '8 blog posts/month', 'Link building', 'Content strategy', 'Advanced tracking', 'Bi-weekly calls'] },
  { name: 'Dominance', price: '₹80,000', description: 'Full content marketing engine', features: ['SEO mastery', '12+ blog posts/month', 'Guest posting', 'PR outreach', 'Content strategy deck', 'Weekly optimization'] },
];

export default function SEOPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Get Found on <span className="gradient-text">Google</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            Strategic content that ranks, drives traffic, and converts visitors into customers.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Start Ranking
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
            Ready to Dominate Search Rankings?
          </h2>
          <Button href="/pricing" variant="primary" size="lg">Get Custom Quote</Button>
        </div>
      </Section>
    </div>
  );
}

