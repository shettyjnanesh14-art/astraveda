import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Ayurveda & Wellness Marketing - AstraVeda',
  description: 'Specialized digital marketing for Ayurvedic clinics, wellness centers, and holistic health brands.',
};

const painPoints = [
  'Difficulty explaining complex Ayurvedic concepts to modern audiences',
  'Building trust and credibility in a skeptical market',
  'Converting social followers to actual appointments',
  'Competing with modern medical practices',
];

const solutions = [
  'Educational content that simplifies Ayurveda',
  'Testimonial-driven social proof campaigns',
  'Appointment-optimized ad funnels',
  'Authority-building thought leadership',
];

export default function AyurvedaPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🌿</div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Ayurveda & Wellness <span className="gradient-text">Marketing</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            We understand Ayurveda. We know how to communicate its value to modern audiences.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Get Industry Proposal
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-red-50 border-red-200">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">Challenges</h3>
              <ul className="space-y-3">
                {painPoints.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-charcoal-700">{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <h3 className="text-2xl font-bold text-charcoal-900 mb-4">Our Solutions</h3>
              <ul className="space-y-3">
                {solutions.map((solution, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-charcoal-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Grow Your Ayurveda Practice?
          </h2>
          <p className="text-xl text-charcoal-300 mb-8">
            Get a custom strategy built specifically for Ayurvedic businesses.
          </p>
          <Button href="/pricing" variant="primary" size="lg">
            Get Custom Proposal
          </Button>
        </div>
      </Section>
    </div>
  );
}

