'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description: 'Deep dive into your brand, audience, competitors, and market positioning.',
  },
  {
    icon: Lightbulb,
    number: '02',
    title: 'Strategy',
    description: 'Custom growth roadmap with clear objectives, tactics, and success metrics.',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Execute',
    description: 'Launch campaigns with our in-house creative team and performance experts.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Optimize',
    description: 'Continuous testing, analytics, and improvement to maximize ROI.',
  },
];

export default function ProcessTeaser() {
  return (
    <Section background="dark">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
          Our <span className="text-primary-500">Process</span>
        </h2>
        <p className="text-xl text-charcoal-300 max-w-2xl mx-auto">
          A systematic approach to transforming your brand's digital presence.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent" />
            )}

            <div className="relative">
              <div className="text-7xl font-display font-bold text-primary-500/20 mb-2">
                {step.number}
              </div>
              <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-charcoal-300">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a
          href="/process"
          className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-400 transition-colors"
        >
          Learn More About Our Process
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </motion.div>
    </Section>
  );
}

