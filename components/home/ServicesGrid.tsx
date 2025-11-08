'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { 
  Share2, 
  TrendingUp, 
  Palette, 
  Globe, 
  Search, 
  Video, 
  Mic, 
  Users, 
  Rocket 
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    icon: Share2,
    title: 'Social Media Management',
    description: 'End-to-end strategy, content, design, and community management that converts.',
    href: '/services/social-media',
    color: 'text-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing & Ads',
    description: 'Meta & Google ads optimized for leads, sales, and ROI—not just vanity metrics.',
    href: '/services/performance-marketing',
    color: 'text-green-500',
  },
  {
    icon: Palette,
    title: 'Branding & Identity',
    description: 'Logos, brand books, visual systems that position you as premium.',
    href: '/services/branding',
    color: 'text-purple-500',
  },
  {
    icon: Globe,
    title: 'Website & Landing Pages',
    description: 'High-converting websites and landing pages built for performance.',
    href: '/services/web-design',
    color: 'text-orange-500',
  },
  {
    icon: Search,
    title: 'SEO & Content Marketing',
    description: 'Get found on Google. Strategic content that ranks and converts.',
    href: '/services/seo',
    color: 'text-red-500',
  },
  {
    icon: Video,
    title: 'Photo / Video / Reels Production',
    description: 'Professional shoots, viral reels, and thumb-stopping content.',
    href: '/services/production',
    color: 'text-pink-500',
  },
  {
    icon: Mic,
    title: 'Podcast & Studio Services',
    description: 'Full podcast production and studio services for thought leaders.',
    href: '/services/podcast',
    color: 'text-indigo-500',
  },
  {
    icon: Users,
    title: 'Influencer Marketing',
    description: 'Strategic influencer & celebrity collaborations that drive real results.',
    href: '/services/influencer',
    color: 'text-yellow-500',
  },
  {
    icon: Rocket,
    title: '360° Growth Retainers',
    description: 'All-in-one retainer packages for brands serious about dominating their niche.',
    href: '/services/retainers',
    color: 'text-primary-500',
  },
];

export default function ServicesGrid() {
  return (
    <Section background="gray">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 mb-4">
          Services That Drive <span className="gradient-text">Real Growth</span>
        </h2>
        <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
          From strategy to execution, we handle everything your brand needs to scale.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={service.href}>
              <Card variant="hover" className="h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${service.color.split('-')[1]}-50 to-${service.color.split('-')[1]}-100 flex items-center justify-center mb-4`}>
                  <service.icon className={`w-7 h-7 ${service.color}`} />
                </div>
                <h3 className="text-xl font-display font-bold text-charcoal-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-charcoal-600">{service.description}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Link
          href="/services"
          className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
        >
          Explore All Services
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>
    </Section>
  );
}

