import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Target, Heart, Zap, Users } from 'lucide-react';

export const metadata = {
  title: 'About AstraVeda - Our Story & Mission',
  description: 'Learn about AstraVeda - the growth-first digital marketing studio helping brands lead, not just post.',
};

const values = [
  {
    icon: Target,
    title: 'Clarity',
    description: 'Clear strategies, transparent pricing, honest communication. No marketing fluff.',
  },
  {
    icon: Heart,
    title: 'Ownership',
    description: 'Your success is our success. We treat every brand like our own.',
  },
  {
    icon: Zap,
    title: 'Speed',
    description: 'Fast execution, quick iterations, agile mindset. Time is money.',
  },
  {
    icon: Users,
    title: 'Depth',
    description: 'Deep niche expertise, data-driven insights, strategic thinking.',
  },
];

const team = [
  {
    name: 'Founder & Chief Strategist',
    role: 'Strategy & Growth',
    bio: '10+ years building brands from zero to market leaders.',
  },
  {
    name: 'Creative Director',
    role: 'Design & Content',
    bio: 'Award-winning designer with an eye for what converts.',
  },
  {
    name: 'Performance Marketing Lead',
    role: 'Ads & Analytics',
    bio: 'Data scientist turned marketer. Numbers do not lie.',
  },
];

const timeline = [
  { year: '2020', event: 'AstraVeda founded with a vision to transform digital marketing' },
  { year: '2021', event: 'Achieved 100% client retention, launched niche-focused approach' },
  { year: '2022', event: 'Expanded to 50+ brands, introduced quotation automation' },
  { year: '2023', event: 'Generated ₹50Cr+ in client revenue, launched studio services' },
  { year: '2024', event: 'Became India leading niche-focused digital marketing studio' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            We're Not Just Another <span className="gradient-text">Agency</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            AstraVeda was born from frustration—with generic strategies, broken promises, and agencies that care more about their portfolio than your results.
          </p>
          <p className="text-lg text-charcoal-700">
            We're a strategy-first creative studio obsessed with one thing: <strong>making your brand win</strong>.
          </p>
        </div>
      </Section>

      {/* Our Story */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-8 text-center">
            Our Story
          </h2>
          
          <Card padding="lg" className="prose prose-lg max-w-none">
            <p className="text-charcoal-700 leading-relaxed mb-4">
              AstraVeda started in 2020 when we realized most marketing agencies were doing the same thing: pretty posts with no strategy, random campaigns with no data, and "trust us" instead of "here's the proof."
            </p>
            <p className="text-charcoal-700 leading-relaxed mb-4">
              We took a different approach. Instead of being "full-service" (which usually means mediocre at everything), we focused on industries where we could genuinely add value: Ayurveda, wellness, fitness, education, and premium local brands.
            </p>
            <p className="text-charcoal-700 leading-relaxed">
              Today, we're trusted by 50+ brands, have generated over ₹50 crores in client revenue, and maintain a 100% client satisfaction rate. Not because we're perfect, but because we actually care.
            </p>
          </Card>
        </div>
      </Section>

      {/* Timeline */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-12 text-center">
            Our Journey
          </h2>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary-200"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card>
                      <div className="text-2xl font-bold text-primary-500 mb-2">{item.year}</div>
                      <p className="text-charcoal-700">{item.event}</p>
                    </Card>
                  </div>

                  {/* Center Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-500 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-4">
            Our Values
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            These aren't just words on a wall. They guide every decision we make.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <Card key={value.title} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-2">{value.title}</h3>
              <p className="text-charcoal-600">{value.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Team */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Strategists, creatives, and data nerds united by one mission.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <Card key={index} className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                <div className="text-4xl">👤</div>
              </div>
              <h3 className="text-xl font-bold text-charcoal-900 mb-1">{member.name}</h3>
              <div className="text-primary-500 font-semibold mb-3">{member.role}</div>
              <p className="text-charcoal-600">{member.bio}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Stats */}
      <Section background="dark">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            By the Numbers
          </h2>
          <p className="text-xl text-charcoal-300">
            Our work speaks for itself.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-500 mb-2">50+</div>
            <div className="text-charcoal-300">Brands Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-500 mb-2">₹50Cr+</div>
            <div className="text-charcoal-300">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-500 mb-2">100%</div>
            <div className="text-charcoal-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-primary-500 mb-2">300%</div>
            <div className="text-charcoal-300">Avg. Growth Rate</div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-charcoal-600 mb-8">
            Let's build something great together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/pricing" variant="primary" size="lg">
              Get Custom Proposal
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

