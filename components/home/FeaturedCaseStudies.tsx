'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

const caseStudies = [
  {
    client: 'Amogha Ayurveda',
    industry: 'Ayurveda & Wellness',
    challenge: 'New brand with zero digital presence needed to establish authority and drive clinic appointments.',
    result: '350% increase in monthly appointments in 90 days',
    metrics: [
      { label: 'Followers', value: '0 → 12K' },
      { label: 'Monthly Leads', value: '15 → 180' },
      { label: 'ROAS', value: '4.2x' },
    ],
    image: '/images/case-study-1.jpg',
    href: '/case-studies/amogha-ayurveda',
  },
  {
    client: 'FitZone Gym',
    industry: 'Fitness',
    challenge: 'Local gym struggling with member retention and new memberships in competitive market.',
    result: '200% increase in membership sign-ups',
    metrics: [
      { label: 'New Members', value: '+420' },
      { label: 'Cost Per Lead', value: '↓60%' },
      { label: 'Social Engagement', value: '+280%' },
    ],
    image: '/images/case-study-2.jpg',
    href: '/case-studies/fitzone-gym',
  },
  {
    client: 'EduTech Academy',
    industry: 'Education',
    challenge: 'EdTech platform needed to scale enrollments while maintaining quality leads.',
    result: '₹2.4Cr revenue generated in 6 months',
    metrics: [
      { label: 'Enrollments', value: '+850' },
      { label: 'Ad Spend ROI', value: '5.8x' },
      { label: 'Brand Reach', value: '2.5M+' },
    ],
    image: '/images/case-study-3.jpg',
    href: '/case-studies/edutech-academy',
  },
];

export default function FeaturedCaseStudies() {
  return (
    <Section background="white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 mb-4">
          Real Brands. Real <span className="gradient-text">Results</span>.
        </h2>
        <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
          See how we've helped brands like yours achieve exponential growth.
        </p>
      </motion.div>

      <div className="space-y-8">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.client}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card variant="hover" padding="lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content */}
                <div>
                  <Badge variant="primary" className="mb-4">
                    {study.industry}
                  </Badge>
                  <h3 className="text-3xl font-display font-bold text-charcoal-900 mb-3">
                    {study.client}
                  </h3>
                  <p className="text-charcoal-600 mb-4">{study.challenge}</p>
                  <div className="bg-primary-50 border border-primary-200 rounded-lg p-4 mb-6">
                    <div className="font-semibold text-primary-700 mb-1">Result</div>
                    <div className="text-2xl font-bold text-charcoal-900">{study.result}</div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label}>
                        <div className="text-2xl font-bold text-primary-500">{metric.value}</div>
                        <div className="text-sm text-charcoal-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button href={study.href} variant="outline" icon={<ArrowUpRight className="w-4 h-4" />}>
                    View Full Case Study
                  </Button>
                </div>

                {/* Image Placeholder */}
                <div className="relative h-80 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-charcoal-400 text-center">
                      <div className="text-6xl mb-2">📊</div>
                      <div className="text-sm">Case Study Visual</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button href="/case-studies" variant="primary" size="lg">
          View All Case Studies
        </Button>
      </motion.div>
    </Section>
  );
}

