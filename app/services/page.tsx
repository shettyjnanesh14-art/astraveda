import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { servicesData } from '@/lib/services-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Services - AstraVeda Digital Marketing Studio',
  description: 'Comprehensive digital marketing services from social media to 360° growth retainers.',
};

const serviceCategories = [
  {
    name: 'Social & Content',
    services: ['social-media', 'production', 'podcast'],
  },
  {
    name: 'Performance & Growth',
    services: ['performance-marketing', 'seo', 'influencer'],
  },
  {
    name: 'Creative & Branding',
    services: ['branding', 'web-design'],
  },
  {
    name: 'Full-Service',
    services: ['retainers'],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Services That Drive <span className="gradient-text">Real Growth</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            From strategy to execution, we handle everything your brand needs to scale. Choose individual services or combine them for maximum impact.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Build Your Custom Plan
          </Button>
        </div>
      </Section>

      {/* Services by Category */}
      {serviceCategories.map((category, index) => {
        const categoryServices = servicesData.filter((s) =>
          category.services.includes(s.id)
        );

        return (
          <Section
            key={category.name}
            background={index % 2 === 0 ? 'gray' : 'white'}
          >
            <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-8">
              {category.name}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryServices.map((service) => (
                <Card key={service.id} variant="hover" className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="text-4xl mb-4">{getServiceEmoji(service.icon)}</div>
                    <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-charcoal-600 mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Pricing Tiers Preview */}
                    <div className="mb-6 p-4 bg-charcoal-50 rounded-lg">
                      <div className="text-sm text-charcoal-600 mb-2">Starting at</div>
                      <div className="text-2xl font-bold text-primary-500">
                        ₹{service.base_price.toLocaleString('en-IN')}/mo
                      </div>
                      <div className="text-xs text-charcoal-500 mt-2">
                        {service.pricing_tiers.length} packages available
                      </div>
                    </div>

                    {/* Key Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-charcoal-700">
                          <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors mt-auto"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </Section>
        );
      })}

      {/* CTA Section */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Not Sure Which Services You Need?
          </h2>
          <p className="text-xl text-charcoal-300 mb-8">
            Let our team create a custom plan tailored to your specific goals and budget.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/pricing" variant="primary" size="lg">
              Get Custom Quotation
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal-900"
            >
              Talk to a Strategist
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

function getServiceEmoji(icon: string): string {
  const emojiMap: Record<string, string> = {
    Share2: '📱',
    TrendingUp: '📈',
    Palette: '🎨',
    Globe: '🌐',
    Search: '🔍',
    Video: '🎥',
    Mic: '🎙️',
    Users: '👥',
    Rocket: '🚀',
  };
  return emojiMap[icon] || '✨';
}

