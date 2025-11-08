'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { X, Check } from 'lucide-react';

const problems = [
  'No consistency in posting or strategy',
  'Random content with no clear messaging',
  'Wasted ad spend with no tracking or optimization',
  'No proper reporting or visibility into ROI',
  'Generic agency approach that does not understand your niche',
];

const solutions = [
  'Strategic content calendar backed by brand positioning',
  'Performance-driven campaigns with clear KPIs',
  'In-house creative team that understands your audience',
  'Monthly analytics dashboards & strategy reviews',
  'Deep niche expertise in your industry vertical',
];

export default function ProblemSolution() {
  return (
    <Section background="white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 mb-4">
            Stop Posting. Start <span className="gradient-text">Performing</span>.
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Most brands waste money on random content. We build systems that actually drive growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full bg-red-50 border-red-200">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <X className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-charcoal-900">
                  The Problem
                </h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <X className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-charcoal-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full bg-green-50 border-green-200">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold text-charcoal-900">
                  The AstraVeda Way
                </h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-charcoal-700">{solution}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

