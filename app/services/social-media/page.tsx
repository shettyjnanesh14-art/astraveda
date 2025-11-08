import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Social Media Management - AstraVeda',
  description: 'End-to-end social media management that actually converts. Strategy, content, design, and engagement.',
};

const platforms = [
  { name: 'Instagram', icon: '📸', included: true },
  { name: 'Facebook', icon: '👥', included: true },
  { name: 'LinkedIn', icon: '💼', included: true },
  { name: 'Twitter/X', icon: '🐦', included: true },
  { name: 'YouTube', icon: '▶️', included: true },
  { name: 'Pinterest', icon: '📌', included: false },
];

const whatWeDoSteps = [
  {
    title: 'Strategic Planning',
    description: 'Monthly content calendar aligned with your brand goals and audience insights.',
    icon: '🎯',
  },
  {
    title: 'Content Creation',
    description: 'Professional posts, reels, stories, and videos designed to engage and convert.',
    icon: '✨',
  },
  {
    title: 'Community Management',
    description: 'Daily engagement, responses to comments/DMs, and relationship building.',
    icon: '💬',
  },
  {
    title: 'Performance Tracking',
    description: 'Monthly analytics, insights, and strategy optimization for continuous growth.',
    icon: '📊',
  },
];

const packages = [
  {
    name: 'Starter',
    price: '₹25,000',
    period: 'per month',
    description: 'Perfect for businesses starting their social media journey',
    popular: false,
    features: [
      '1-2 platforms (Instagram + Facebook)',
      '20 posts per month',
      '8 reels/videos per month',
      'Daily story management',
      'Community management',
      'Monthly analytics report',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '₹45,000',
    period: 'per month',
    description: 'For brands serious about social media growth',
    popular: true,
    features: [
      'All major platforms (3-4 platforms)',
      '30 posts per month',
      '12 reels/videos per month',
      'Daily story + carousel management',
      'Active community engagement',
      'Bi-weekly strategy calls',
      'Advanced analytics dashboard',
      'Priority support',
    ],
  },
  {
    name: 'Dominance',
    price: '₹75,000',
    period: 'per month',
    description: 'Complete social media domination',
    popular: false,
    features: [
      'All platforms + emerging channels',
      '40+ posts per month',
      '15+ reels/videos per month',
      'Full story + carousel strategy',
      'Real-time engagement',
      'Weekly strategy calls',
      'Custom reporting dashboard',
      'Influencer collaboration support',
      '24/7 priority support',
    ],
  },
];

const sampleCreatives = [
  { type: 'Carousel Post', description: 'Educational content for Ayurveda clinic' },
  { type: 'Reel', description: 'Gym transformation before/after' },
  { type: 'Story Series', description: 'Behind-the-scenes restaurant content' },
  { type: 'Announcement Post', description: 'New course launch for EdTech' },
];

export default function SocialMediaPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">Most Popular Service</Badge>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            End-to-End Social Media Management That Actually <span className="gradient-text">Converts</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            Stop random posting. Start building a brand that your audience loves and trusts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
              Build My Plan
            </Button>
            <Button href="/case-studies" variant="outline" size="lg">
              View Case Studies
            </Button>
          </div>
        </div>
      </Section>

      {/* What We Do */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            A complete social media system that drives real business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whatWeDoSteps.map((step, index) => (
            <Card key={index}>
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">{step.title}</h3>
              <p className="text-charcoal-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Platforms */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-4">
            Platforms We Manage
          </h2>
          <p className="text-xl text-charcoal-600">
            Present where your audience is, with content optimized for each platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {platforms.map((platform) => (
            <Card
              key={platform.name}
              className="text-center"
              variant={platform.included ? 'default' : 'glass'}
            >
              <div className="text-4xl mb-2">{platform.icon}</div>
              <div className="font-semibold text-charcoal-900">{platform.name}</div>
              {!platform.included && (
                <div className="text-xs text-charcoal-500 mt-1">Add-on</div>
              )}
            </Card>
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-8 text-center">
            Monthly Deliverables
          </h2>

          <Card padding="lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Content</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>20-40 professionally designed posts</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>8-15 engaging reels/videos</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Daily stories (30+ per month)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Carousel posts and infographics</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-4">Management</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Content calendar and scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Daily community engagement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Comment & DM responses</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Monthly analytics & strategy review</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Pricing Packages */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-4">
            Choose Your Package
          </h2>
          <p className="text-xl text-charcoal-600">
            Or customize your own plan with our quotation builder.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative ${pkg.popular ? 'border-primary-500 border-2 shadow-2xl' : ''}`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge variant="primary">Most Popular</Badge>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-2">
                  {pkg.name}
                </h3>
                <div className="mb-3">
                  <span className="text-4xl font-bold text-primary-500">{pkg.price}</span>
                  <span className="text-charcoal-600">/{pkg.period}</span>
                </div>
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

              <Button
                href="/pricing"
                variant={pkg.popular ? 'primary' : 'outline'}
                fullWidth
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Transform Your Social Media?
          </h2>
          <p className="text-xl text-charcoal-300 mb-8">
            Get a custom plan built specifically for your brand and goals.
          </p>
          <Button href="/pricing" variant="primary" size="lg">
            Build My Custom Plan
          </Button>
        </div>
      </Section>
    </div>
  );
}

