import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Search, FileText, Lightbulb, Rocket, BarChart3, TrendingUp, Users } from 'lucide-react';

export const metadata = {
  title: 'Our Process - How We Work | AstraVeda',
  description: 'A systematic 7-step process to transform your brand\'s digital presence and drive real growth.',
};

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discovery Call',
    duration: 'Week 1',
    description: 'We start with a deep-dive conversation to understand your business, goals, challenges, and audience.',
    deliverables: [
      'Initial consultation (60 mins)',
      'Business goals documentation',
      'Target audience profiling',
      'Competitive landscape overview',
    ],
  },
  {
    number: '02',
    icon: FileText,
    title: 'Brand & Competition Audit',
    duration: 'Week 1-2',
    description: 'Comprehensive analysis of your current digital presence and competitive positioning.',
    deliverables: [
      'Brand audit report',
      'Competitor analysis',
      'SWOT analysis',
      'Opportunity identification',
    ],
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Strategy Deck',
    duration: 'Week 2-3',
    description: 'Custom growth strategy with clear objectives, tactics, timelines, and success metrics.',
    deliverables: [
      'Comprehensive strategy deck',
      '3-month execution roadmap',
      'Content pillars & themes',
      'Campaign concepts',
      'Success metrics & KPIs',
    ],
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Content System Setup',
    duration: 'Week 3-4',
    description: 'Build the foundation—brand guidelines, content calendar, design templates, and workflows.',
    deliverables: [
      'Brand guidelines (if needed)',
      '30-day content calendar',
      'Design templates library',
      'Approval workflows',
      'Tool & platform setup',
    ],
  },
  {
    number: '05',
    icon: Users,
    title: 'Execution & Launch',
    duration: 'Ongoing',
    description: 'Lights, camera, action! Our team executes the strategy with precision and creativity.',
    deliverables: [
      'Daily content creation',
      'Campaign execution',
      'Community management',
      'Paid ads management',
      'Weekly status updates',
    ],
  },
  {
    number: '06',
    icon: BarChart3,
    title: 'Analytics & Optimization',
    duration: 'Monthly',
    description: 'Continuous monitoring, testing, and refinement to maximize ROI and performance.',
    deliverables: [
      'Monthly analytics report',
      'Performance dashboard access',
      'A/B testing insights',
      'Optimization recommendations',
      'Strategy review call',
    ],
  },
  {
    number: '07',
    icon: TrendingUp,
    title: 'Quarterly Strategy Reset',
    duration: 'Every 3 Months',
    description: 'Step back, review results, celebrate wins, and plan the next phase of growth.',
    deliverables: [
      'Quarterly performance review',
      'Updated strategy deck',
      'New campaign concepts',
      'Budget reallocation plan',
      'Goal setting for next quarter',
    ],
  },
];

const principles = [
  {
    title: 'Transparency First',
    description: 'No surprises. You know exactly what we are doing, when, and why.',
    icon: '🔍',
  },
  {
    title: 'Data-Driven Decisions',
    description: 'Every strategy is backed by data, not gut feelings or trends.',
    icon: '📊',
  },
  {
    title: 'Agile Execution',
    description: 'Fast iterations, quick pivots, continuous improvement.',
    icon: '⚡',
  },
  {
    title: 'Collaborative Partnership',
    description: 'You are part of the team. Regular check-ins and open communication.',
    icon: '🤝',
  },
];

export default function ProcessPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Our <span className="gradient-text">Process</span>
          </h1>
          <p className="text-xl text-charcoal-600">
            A systematic, proven approach to transforming your brand's digital presence.
          </p>
        </div>
      </Section>

      {/* Process Steps */}
      <Section background="gray">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <Card key={index} padding="lg" className="relative">
                <div className="grid md:grid-cols-[200px_1fr] gap-8">
                  {/* Left: Number & Icon */}
                  <div className="text-center md:text-left">
                    <div className="text-8xl font-display font-bold text-primary-500/20 mb-4">
                      {step.number}
                    </div>
                    <div className="w-20 h-20 mx-auto md:mx-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="inline-block px-4 py-2 bg-charcoal-100 rounded-full text-sm font-semibold text-charcoal-700">
                      {step.duration}
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div>
                    <h3 className="text-3xl font-display font-bold text-charcoal-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-lg text-charcoal-600 mb-6">{step.description}</p>

                    <div>
                      <div className="text-sm font-semibold text-charcoal-900 mb-3">
                        Deliverables:
                      </div>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, i) => (
                          <li key={i} className="flex items-start text-charcoal-700">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {deliverable}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < processSteps.length - 1 && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Principles */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-12 text-center">
            Our Working Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card key={index}>
                <div className="text-5xl mb-4">{principle.icon}</div>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">{principle.title}</h3>
                <p className="text-charcoal-600">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline Visual */}
      <Section background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Typical Timeline to Results
          </h2>
          <p className="text-xl text-charcoal-300 mb-12">
            Here's what you can expect in the first 90 days
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-charcoal-800 border-charcoal-700">
              <div className="text-primary-500 font-bold text-lg mb-2">Month 1</div>
              <h4 className="text-white font-bold mb-3">Foundation</h4>
              <ul className="text-left text-charcoal-300 space-y-2 text-sm">
                <li>• Strategy & setup</li>
                <li>• Content creation begins</li>
                <li>• Initial campaigns launch</li>
                <li>• Baseline metrics established</li>
              </ul>
            </Card>

            <Card className="bg-charcoal-800 border-charcoal-700">
              <div className="text-primary-500 font-bold text-lg mb-2">Month 2</div>
              <h4 className="text-white font-bold mb-3">Momentum</h4>
              <ul className="text-left text-charcoal-300 space-y-2 text-sm">
                <li>• Consistent content output</li>
                <li>• First optimization cycles</li>
                <li>• Early performance wins</li>
                <li>• Audience engagement grows</li>
              </ul>
            </Card>

            <Card className="bg-charcoal-800 border-charcoal-700 border-primary-500 border-2">
              <div className="text-primary-500 font-bold text-lg mb-2">Month 3</div>
              <h4 className="text-white font-bold mb-3">Results</h4>
              <ul className="text-left text-charcoal-300 space-y-2 text-sm">
                <li>• Measurable growth achieved</li>
                <li>• Strategy refinement</li>
                <li>• Proven what works</li>
                <li>• Scale-up planning</li>
              </ul>
            </Card>
          </div>

          <div className="mt-12">
            <Button href="/pricing" variant="primary" size="lg">
              Start Your Journey
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-12 text-center">
            Common Questions
          </h2>

          <div className="space-y-6">
            <Card>
              <h4 className="font-bold text-lg text-charcoal-900 mb-2">
                How involved do I need to be?
              </h4>
              <p className="text-charcoal-600">
                As much or as little as you want! We need your input for brand direction and approvals, but we handle all the heavy lifting. Most clients spend 2-3 hours per week with us.
              </p>
            </Card>

            <Card>
              <h4 className="font-bold text-lg text-charcoal-900 mb-2">
                What if I'm not happy with the results?
              </h4>
              <p className="text-charcoal-600">
                We work on month-to-month contracts for this exact reason. If we're not delivering results, you can walk away. No long-term lock-ins or cancellation fees.
              </p>
            </Card>

            <Card>
              <h4 className="font-bold text-lg text-charcoal-900 mb-2">
                Do you work with multiple clients in the same industry?
              </h4>
              <p className="text-charcoal-600">
                We limit ourselves to one direct competitor per geographic area to avoid conflicts of interest and ensure your competitive advantage.
              </p>
            </Card>

            <Card>
              <h4 className="font-bold text-lg text-charcoal-900 mb-2">
                Can I start with just one service?
              </h4>
              <p className="text-charcoal-600">
                Absolutely! Many clients start with social media or performance ads and expand as they see results. We recommend bundling services for better ROI, but single services work too.
              </p>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

