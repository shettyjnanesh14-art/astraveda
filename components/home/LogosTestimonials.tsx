'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AstraVeda transformed our entire digital presence. From zero to 15K followers and 200+ monthly appointments in just 4 months. They truly understand the Ayurveda space.",
    author: 'Dr. Priya Sharma',
    role: 'Founder, Amogha Ayurveda',
    rating: 5,
  },
  {
    quote: "Finally, an agency that focuses on results, not just pretty posts. Our membership doubled in 6 months, and cost per lead went down by 60%.",
    author: 'Rahul Verma',
    role: 'Owner, FitZone Gym',
    rating: 5,
  },
  {
    quote: "The strategic approach AstraVeda brings is unmatched. They're not just marketers—they're business partners who genuinely care about our growth.",
    author: 'Anjali Desai',
    role: 'CEO, EduTech Academy',
    rating: 5,
  },
];

const logoClients = [
  'Amogha Ayurveda',
  'FitZone Gym',
  'EduTech Academy',
  'Wellness Clinic',
  'Real Estate Pro',
  'Cafe Delight',
];

export default function LogosTestimonials() {
  return (
    <Section background="white">
      {/* Client Logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <p className="text-charcoal-600 mb-8 font-semibold">
          TRUSTED BY LEADING BRANDS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logoClients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-charcoal-400 font-display font-bold text-lg md:text-xl hover:text-primary-500 transition-colors cursor-pointer"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal-900 mb-4">
          What Our Clients <span className="gradient-text">Say</span>
        </h2>
        <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
          Don't just take our word for it—hear from brands we've helped grow.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal-700 mb-6 italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div>
                <div className="font-bold text-charcoal-900">{testimonial.author}</div>
                <div className="text-sm text-charcoal-600">{testimonial.role}</div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

