import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Podcast & Studio Services - AstraVeda',
  description: 'End-to-end podcast production including recording, editing, and distribution to all platforms.',
};

const packages = [
  { name: 'Starter', price: '₹40,000', description: '4 episodes/month', features: ['Studio recording', '4 episodes', 'Basic editing', 'Distribution to platforms', 'Show notes'] },
  { name: 'Professional', price: '₹70,000', description: '8 episodes + promotion', features: ['8 episodes/month', 'Advanced editing', 'Social promotion', 'Guest coordination', 'Audiograms'] },
  { name: 'Full Production', price: '₹1,20,000', description: 'Complete podcast management', features: ['12+ episodes', 'Video podcast', 'Marketing strategy', 'Sponsorship support', 'Full social amplification'] },
];

export default function PodcastPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            <span className="gradient-text">Podcast Production</span> That Builds Authority
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            From recording to distribution—we handle everything for your podcast.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Start Your Podcast
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
            Ready to Launch Your Podcast?
          </h2>
          <Button href="/pricing" variant="primary" size="lg">Get Custom Quote</Button>
        </div>
      </Section>
    </div>
  );
}

