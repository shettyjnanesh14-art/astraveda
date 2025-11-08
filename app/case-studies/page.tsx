'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'Amogha Ayurveda',
    industry: 'Ayurveda & Wellness',
    challenge: 'New Ayurvedic clinic with zero digital presence needed to establish credibility and drive appointments in a competitive market.',
    solution: 'Implemented educational content strategy, patient testimonial campaigns, Google My Business optimization, and targeted Meta ads for local audience.',
    result: '350% increase in monthly appointments within 90 days',
    timeline: '3 months',
    metrics: [
      { label: 'Instagram Followers', value: '0 → 12K', change: '+12K' },
      { label: 'Monthly Appointments', value: '15 → 180', change: '+1100%' },
      { label: 'Ad ROAS', value: '4.2x', change: '+320%' },
      { label: 'Website Traffic', value: '+850%', change: '+850%' },
    ],
    services: ['Social Media', 'Performance Ads', 'SEO', 'Content'],
    featured: true,
  },
  {
    id: 2,
    client: 'FitZone Gym',
    industry: 'Fitness',
    challenge: 'Local gym struggling with member retention and new sign-ups in a market dominated by larger chains.',
    solution: 'Created transformation-focused content, member success stories, retargeting campaigns for trial members, and community engagement initiatives.',
    result: '200% increase in membership sign-ups',
    timeline: '6 months',
    metrics: [
      { label: 'New Members', value: '+420', change: '+200%' },
      { label: 'Cost Per Lead', value: '↓60%', change: '-60%' },
      { label: 'Social Engagement', value: '+280%', change: '+280%' },
      { label: 'Member Retention', value: '+45%', change: '+45%' },
    ],
    services: ['Social Media', 'Video Production', 'Performance Ads'],
    featured: true,
  },
  {
    id: 3,
    client: 'EduTech Academy',
    industry: 'Education',
    challenge: 'Online education platform needed to scale enrollments while maintaining lead quality and reducing acquisition costs.',
    solution: 'Developed value-first content marketing, webinar funnels, student testimonial campaigns, and multi-touch enrollment sequences.',
    result: '₹2.4Cr revenue generated in 6 months',
    timeline: '6 months',
    metrics: [
      { label: 'Enrollments', value: '+850', change: '+340%' },
      { label: 'Ad Spend ROI', value: '5.8x', change: '+480%' },
      { label: 'Brand Reach', value: '2.5M+', change: '+2.5M' },
      { label: 'Course Completion', value: '+35%', change: '+35%' },
    ],
    services: ['Performance Ads', 'SEO', 'Social Media', 'Web Design'],
    featured: true,
  },
  {
    id: 4,
    client: 'Wellness Haven Clinic',
    industry: 'Healthcare',
    challenge: 'Multi-specialty clinic needed to improve online reputation and increase patient bookings across specialties.',
    solution: 'Reputation management, specialty-specific landing pages, doctor profile optimization, and targeted local SEO.',
    result: '180% increase in patient bookings',
    timeline: '4 months',
    metrics: [
      { label: 'Patient Bookings', value: '+180%', change: '+180%' },
      { label: 'Google Reviews', value: '4.8/5', change: '+0.9' },
      { label: 'Website Conversions', value: '+220%', change: '+220%' },
      { label: 'Multi-specialty Growth', value: '+150%', change: '+150%' },
    ],
    services: ['Web Design', 'SEO', 'Performance Ads'],
    featured: false,
  },
];

const industries = ['All', 'Ayurveda & Wellness', 'Fitness', 'Education', 'Healthcare', 'Real Estate', 'Food & Beverage'];

export default function CaseStudiesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredStudies =
    selectedIndustry === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.industry === selectedIndustry);

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Real Brands. Real <span className="gradient-text">Results</span>.
          </h1>
          <p className="text-xl text-charcoal-600">
            See how we've helped businesses like yours achieve exponential growth with data-driven strategies.
          </p>
        </div>
      </Section>

      {/* Filter */}
      <Section background="gray">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry) => (
            <button
              key={industry}
              onClick={() => setSelectedIndustry(industry)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedIndustry === industry
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-charcoal-700 hover:bg-charcoal-100'
              }`}
            >
              {industry}
            </button>
          ))}
        </div>

        {/* Case Studies */}
        <div className="space-y-8">
          {filteredStudies.map((study) => (
            <Card key={study.id} variant="hover" padding="lg">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Content */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="primary">{study.industry}</Badge>
                    {study.featured && <Badge variant="warning">Featured</Badge>}
                  </div>

                  <h3 className="text-3xl font-display font-bold text-charcoal-900 mb-3">
                    {study.client}
                  </h3>

                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="text-sm font-semibold text-charcoal-600 mb-1">Challenge</div>
                      <p className="text-charcoal-700">{study.challenge}</p>
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-charcoal-600 mb-1">Solution</div>
                      <p className="text-charcoal-700">{study.solution}</p>
                    </div>
                  </div>

                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
                    <div className="text-sm font-semibold text-primary-700 mb-1">Result</div>
                    <div className="text-2xl font-bold text-charcoal-900">{study.result}</div>
                    <div className="text-sm text-charcoal-600 mt-1">Timeline: {study.timeline}</div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.services.map((service) => (
                      <Badge key={service} variant="secondary" size="sm">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Right: Metrics */}
                <div>
                  <div className="bg-charcoal-50 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-charcoal-900 mb-6">Key Metrics</h4>
                    <div className="grid grid-cols-2 gap-6">
                      {study.metrics.map((metric, index) => (
                        <div key={index}>
                          <div className="text-3xl font-bold text-primary-500 mb-1">{metric.value}</div>
                          <div className="text-sm text-charcoal-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image Placeholder */}
                  <div className="mt-6 h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center">
                    <div className="text-center text-charcoal-400">
                      <div className="text-4xl mb-2">📊</div>
                      <div className="text-sm">Case Study Visuals</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Want Results Like These?
          </h2>
          <p className="text-xl text-charcoal-300 mb-8">
            Let's create a custom strategy for your brand.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/pricing" variant="primary" size="lg">
              Get Custom Proposal
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

