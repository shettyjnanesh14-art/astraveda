import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Check, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Politicians & Public Figures Marketing - AstraVeda',
  description: 'Digital presence and reputation management for politicians and public figures.',
};

const solutions = [
  'Strategic messaging and positioning',
  'Real-time social media management',
  'Grassroots digital campaigns',
  'Online reputation management (ORM)',
];

export default function PublicFiguresPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🎯</div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Political & Public Figure <span className="gradient-text">Marketing</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            Build your digital presence, manage your reputation, and connect with your audience.
          </p>
          <Button href="/pricing" variant="primary" size="lg" icon={<ArrowRight className="w-5 h-5" />}>
            Get Industry Proposal
          </Button>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-8 text-center">Our Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, i) => (
              <Card key={i}>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-charcoal-700">{solution}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Build Your Digital Presence?
          </h2>
          <Button href="/pricing" variant="primary" size="lg">Get Custom Proposal</Button>
        </div>
      </Section>
    </div>
  );
}

