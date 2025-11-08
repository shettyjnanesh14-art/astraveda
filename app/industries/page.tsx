import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { industriesData } from '@/lib/services-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Industries We Serve - AstraVeda',
  description: 'Specialized digital marketing for Ayurveda, Healthcare, Fitness, Education, and more.',
};

export default function IndustriesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="white">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Industry <span className="gradient-text">Expertise</span> That Drives Results
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            We don't just know marketing—we know YOUR industry. Deep niche expertise that translates to better strategies and faster results.
          </p>
        </div>
      </Section>

      {/* Industries Grid */}
      <Section background="gray">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industriesData.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`}>
              <Card variant="hover" className="h-full text-center">
                <div className="text-6xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-display font-bold text-charcoal-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-charcoal-600 mb-4">{industry.description}</p>
                <div className="inline-flex items-center text-primary-500 font-semibold text-sm">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Industry Expertise Matters */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-8 text-center">
            Why Industry Expertise Matters
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                We Speak Your Language
              </h3>
              <p className="text-charcoal-600">
                No need to explain industry jargon or customer pain points—we already know them.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                Faster Results
              </h3>
              <p className="text-charcoal-600">
                Proven strategies and templates specific to your industry mean quicker execution.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                Better Benchmarks
              </h3>
              <p className="text-charcoal-600">
                We know what good looks like in your space and can set realistic, aggressive goals.
              </p>
            </Card>

            <Card>
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">
                Strategic Partnerships
              </h3>
              <p className="text-charcoal-600">
                Access to industry-specific influencers, media, and collaboration opportunities.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Get a Proposal for Your Industry
          </h2>
          <p className="text-xl text-charcoal-300 mb-8">
            See exactly how we'll help you dominate your niche.
          </p>
          <Button href="/pricing" variant="primary" size="lg">
            Get Industry-Specific Proposal
          </Button>
        </div>
      </Section>
    </div>
  );
}

