'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

const categories = ['All', 'Social Media', 'Branding', 'Web Design', 'Video Production', 'Photography'];

const portfolioItems = [
  {
    id: 1,
    title: 'Ayurveda Clinic Social Campaign',
    category: 'Social Media',
    client: 'Amogha Ayurveda',
    description: 'Educational carousel series explaining Ayurvedic treatments',
    tags: ['Carousel', 'Educational', 'Healthcare'],
  },
  {
    id: 2,
    title: 'Gym Transformation Reels',
    category: 'Video Production',
    client: 'FitZone Gym',
    description: 'Before/after transformation stories that went viral',
    tags: ['Reels', 'Fitness', 'Testimonials'],
  },
  {
    id: 3,
    title: 'EdTech Brand Identity',
    category: 'Branding',
    client: 'EduTech Academy',
    description: 'Complete brand refresh with modern, trustworthy aesthetic',
    tags: ['Logo', 'Brand Guidelines', 'Education'],
  },
  {
    id: 4,
    title: 'Restaurant Website Redesign',
    category: 'Web Design',
    client: 'Cafe Delight',
    description: 'Mobile-first website with online ordering integration',
    tags: ['Website', 'E-commerce', 'Food & Beverage'],
  },
  {
    id: 5,
    title: 'Real Estate Property Showcase',
    category: 'Photography',
    client: 'Prime Properties',
    description: 'Professional photography and virtual tour creation',
    tags: ['Photography', 'Virtual Tour', 'Real Estate'],
  },
  {
    id: 6,
    title: 'Wellness Product Launch',
    category: 'Social Media',
    client: 'Natural Remedies',
    description: 'Multi-platform launch campaign with influencer collaboration',
    tags: ['Product Launch', 'Influencer', 'Wellness'],
  },
  {
    id: 7,
    title: 'Fitness App UI/UX',
    category: 'Web Design',
    client: 'FitTrack App',
    description: 'User-friendly fitness tracking app design',
    tags: ['UI/UX', 'Mobile App', 'Fitness'],
  },
  {
    id: 8,
    title: 'Podcast Visual Identity',
    category: 'Branding',
    client: 'Health Talks Podcast',
    description: 'Podcast branding with episode graphics and social assets',
    tags: ['Podcast', 'Graphics', 'Healthcare'],
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Our <span className="gradient-text">Work</span>
          </h1>
          <p className="text-xl text-charcoal-600">
            A curated collection of our best creative work across social media, branding, web design, and production.
          </p>
        </div>
      </Section>

      {/* Filter */}
      <Section background="gray">
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-white text-charcoal-700 hover:bg-charcoal-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} variant="hover" padding="lg" className="flex flex-col">
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-charcoal-400">
                    <div className="text-5xl mb-2">{getCategoryIcon(item.category)}</div>
                    <div className="text-sm">Portfolio Item</div>
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <Badge variant="primary">{item.category}</Badge>
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">{item.title}</h3>
                <div className="text-sm text-primary-500 font-semibold mb-3">{item.client}</div>
                <p className="text-charcoal-600 mb-4">{item.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" size="sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-xl text-charcoal-300 mb-8">
            Ready to see your brand showcased in our next portfolio piece?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/pricing" variant="primary" size="lg">
              Start Your Project
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-charcoal-900"
            >
              Discuss Your Ideas
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'Social Media': '📱',
    'Branding': '🎨',
    'Web Design': '🌐',
    'Video Production': '🎥',
    'Photography': '📸',
  };
  return icons[category] || '✨';
}

import Button from '@/components/ui/Button';

