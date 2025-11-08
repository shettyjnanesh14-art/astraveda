import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Check, ArrowRight, TrendingUp, Target } from 'lucide-react';

export const metadata = {
  title: 'Performance Marketing & Ads - AstraVeda',
  description: 'Data-driven Meta & Google ads campaigns optimized for leads, sales, and ROI—not just vanity metrics.',
};

const packages = [
  {
    name: 'Starter',
    price: '₹30,000',
    description: 'For brands spending ₹30K-₹1L on ads',
    features: [
      'Meta or Google Ads',
      '2 campaigns per month',
      '10 ad creatives',
      'Conversion tracking',
      'Weekly reports',
    ],
  },
  {
    name: 'Growth',
    price: '₹50,000',
    description: 'For brands spending ₹1L-₹3L on ads',
    features: [
      'Meta + Google Ads',
      '4 campaigns per month',
      '15 ad creatives',
      'Advanced tracking',
      'A/B testing',
      'Bi-weekly strategy calls',
    ],
  },
  {
    name: 'Scale',
    price: '₹80,000',
    description: 'For brands spending ₹3L+ on ads',
    features: [
      'All platforms (Meta, Google, LinkedIn)',
      'Unlimited campaigns',
      '20+ ad creatives',
      'Daily monitoring',
      'Dedicated ads manager',
      'Real-time optimization',
    ],
  },
];

export default function PerformanceMarketingPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">High ROI</Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Performance Marketing That Actually Drives <span className="gradient-text">Results</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            Meta & Google ads optimized for leads and sales—not just impressions and clicks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Build My Plan
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              View Results
            </Button>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-8 text-center">
            What We Do
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <TrendingUp className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">Campaign Strategy</h3>
              <p className="text-charcoal-600">Custom funnel design, audience targeting, and conversion optimization strategies.</p>
            </Card>
            <Card>
              <Target className="w-12 h-12 text-primary-500 mb-4" />
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">Ad Creative</h3>
              <p className="text-charcoal-600">Thumb-stopping ad designs and compelling copy that converts.</p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">A/B Testing</h3>
              <p className="text-charcoal-600">Continuous testing and optimization to improve performance.</p>
            </Card>
            <Card>
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">Analytics & Reporting</h3>
              <p className="text-charcoal-600">Weekly performance reports with clear ROI visibility.</p>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-4">
            Choose Your Package
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <Card key={pkg.name} className={index === 1 ? 'border-primary-500 border-2' : ''}>
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary">Most Popular</Badge>
                </div>
              )}
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
            Ready to Scale with Ads?
          </h2>
          <Button href="/pricing" variant="primary" size="lg">
            Build My Custom Plan
          </Button>
        </div>
      </Section>
    </div>
  );
}

