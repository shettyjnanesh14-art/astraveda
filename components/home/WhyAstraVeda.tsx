'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { Target, Users, BarChart3, Award, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: Target,
    title: 'Niche Expertise',
    description: 'Deep experience in Ayurveda, wellness, fitness, education, and premium local brands.',
  },
  {
    icon: Users,
    title: 'Dedicated Strategist',
    description: 'Your own account strategist who understands your business inside-out.',
  },
  {
    icon: BarChart3,
    title: 'Performance Dashboards',
    description: 'Real-time analytics and monthly reports with clear ROI visibility.',
  },
  {
    icon: Award,
    title: 'In-House Creative Team',
    description: 'No outsourcing. Everything from strategy to design happens under one roof.',
  },
  {
    icon: Zap,
    title: 'Fast Turnaround',
    description: 'Quick iterations, rapid testing, and agile execution.',
  },
  {
    icon: Shield,
    title: 'Result Guarantee',
    description: 'We only succeed when you succeed. Performance-driven agreements.',
  },
];

export default function WhyAstraVeda() {
  return (
    <Section background="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 mb-4">
          Why <span className="gradient-text">AstraVeda</span>?
        </h2>
        <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
          We're not just another agency. We're your growth partner.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-display font-bold text-charcoal-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-charcoal-600">{feature.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

