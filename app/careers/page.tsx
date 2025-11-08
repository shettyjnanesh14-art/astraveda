import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Briefcase, Users, TrendingUp, Heart } from 'lucide-react';

export const metadata = {
  title: 'Careers - Join AstraVeda',
  description: 'Join our team of strategists, creatives, and performance marketers building brands that lead.',
};

const openings = [
  {
    title: 'Social Media Manager',
    type: 'Full-time',
    location: 'Udupi / Remote',
    description: 'Manage social media for multiple premium brands. 2+ years experience required.',
  },
  {
    title: 'Performance Marketing Specialist',
    type: 'Full-time',
    location: 'Udupi / Remote',
    description: 'Run Meta & Google ads campaigns. Data-driven mindset essential.',
  },
  {
    title: 'Content Writer',
    type: 'Full-time / Freelance',
    location: 'Remote',
    description: 'Write compelling copy for social media, blogs, and ad campaigns.',
  },
  {
    title: 'Graphic Designer',
    type: 'Full-time',
    location: 'Udupi',
    description: 'Create stunning visuals for social media and marketing campaigns.',
  },
];

const values = [
  { icon: Heart, title: 'Passion First', description: 'We only hire people who genuinely care about results.' },
  { icon: TrendingUp, title: 'Growth Mindset', description: 'Learn, improve, and level up constantly.' },
  { icon: Users, title: 'Team Spirit', description: 'Collaborate, support, and win together.' },
  { icon: Briefcase, title: 'Ownership', description: 'Own your work like it is your own business.' },
];

export default function CareersPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Join <span className="gradient-text">AstraVeda</span>
          </h1>
          <p className="text-xl text-charcoal-600 mb-8">
            Build a career at India's leading niche-focused digital marketing studio.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <value.icon className="w-12 h-12 text-primary-500 mx-auto mb-3" />
                <h3 className="font-bold text-charcoal-900 mb-2">{value.title}</h3>
                <p className="text-sm text-charcoal-600">{value.description}</p>
              </Card>
            ))}
          </div>

          <h2 className="text-4xl font-display font-bold text-charcoal-900 mb-8 text-center">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openings.map((job) => (
              <Card key={job.title} padding="lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-2">{job.title}</h3>
                    <p className="text-charcoal-600 mb-2">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-charcoal-100 text-charcoal-700 rounded-full text-sm font-semibold">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <Button href="/contact" variant="primary">
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Do Not See Your Role?
          </h2>
          <p className="text-xl text-charcoal-300 mb-8">
            We are always looking for talented people. Send us your portfolio!
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Get In Touch
          </Button>
        </div>
      </Section>
    </div>
  );
}

