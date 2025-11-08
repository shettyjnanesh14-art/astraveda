import QuotationBuilder from '@/components/quotation/QuotationBuilder';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import { Check } from 'lucide-react';

const presetPackages = [
  {
    name: 'Starter',
    price: '₹50,000',
    description: 'Perfect for businesses just starting their digital journey',
    features: [
      'Social Media Management (2 platforms)',
      '20 posts + 8 reels per month',
      'Basic performance ads',
      'Monthly analytics',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '₹1,50,000',
    description: 'For brands serious about scaling',
    features: [
      'Social Media Management (all platforms)',
      '30 posts + 12 reels per month',
      'Performance Marketing & Ads',
      'SEO + 8 blog posts',
      'Monthly shoots',
      'Dedicated strategist',
      'Weekly calls',
    ],
    popular: true,
  },
  {
    name: 'Dominance',
    price: '₹3,50,000+',
    description: 'Complete brand domination',
    features: [
      'Full 360° Marketing',
      'Unlimited content',
      'Multi-channel campaigns',
      'Video production',
      'Influencer marketing',
      'Priority support 24/7',
      'C-suite reporting',
    ],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <Section>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Transparent Pricing, <span className="gradient-text">Real Results</span>
          </h1>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto">
            Choose a preset package or build a custom plan tailored to your exact needs.
          </p>
        </div>

        {/* Preset Packages */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {presetPackages.map((pkg) => (
            <Card 
              key={pkg.name} 
              className={`relative ${pkg.popular ? 'border-primary-500 border-2 shadow-2xl' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary" className="text-sm px-4 py-2">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="text-4xl font-bold text-primary-500 mb-3">
                  {pkg.price}
                </div>
                <p className="text-charcoal-600">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#quotation-builder"
                className="block w-full py-3 text-center bg-charcoal-900 text-white font-semibold rounded-lg hover:bg-charcoal-800 transition-colors"
              >
                Get Started
              </a>
            </Card>
          ))}
        </div>
      </Section>

      {/* Custom Quotation Builder */}
      <Section background="gray" id="quotation-builder">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 mb-4">
            Build Your <span className="gradient-text">Custom Plan</span>
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Answer a few questions and get a personalized proposal instantly.
          </p>
        </div>

        <QuotationBuilder />
      </Section>

      {/* Trust Section */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-display font-bold text-charcoal-900 mb-8">
            Why Our Pricing Works
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-4xl mb-3">💎</div>
              <h4 className="font-bold text-lg mb-2">No Hidden Costs</h4>
              <p className="text-charcoal-600">What you see is what you pay. No surprise fees.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold text-lg mb-2">Flexible Contracts</h4>
              <p className="text-charcoal-600">Month-to-month or annual. You choose.</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📈</div>
              <h4 className="font-bold text-lg mb-2">Performance Focused</h4>
              <p className="text-charcoal-600">We only succeed when you succeed.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

