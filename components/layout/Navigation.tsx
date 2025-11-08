'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Social Media Management', href: '/services/social-media' },
      { name: 'Performance Marketing & Ads', href: '/services/performance-marketing' },
      { name: 'Branding & Identity', href: '/services/branding' },
      { name: 'Website & Landing Pages', href: '/services/web-design' },
      { name: 'SEO & Content Marketing', href: '/services/seo' },
      { name: 'Photo / Video / Reels Production', href: '/services/production' },
      { name: 'Podcast & Studio Services', href: '/services/podcast' },
      { name: 'Influencer Marketing', href: '/services/influencer' },
      { name: '360° Growth Retainers', href: '/services/retainers' },
    ],
  },
  {
    name: 'Industries',
    href: '/industries',
    dropdown: [
      { name: 'Ayurveda & Wellness', href: '/industries/ayurveda' },
      { name: 'Clinics & Hospitals', href: '/industries/healthcare' },
      { name: 'Fitness & Gyms', href: '/industries/fitness' },
      { name: 'Education & EdTech', href: '/industries/education' },
      { name: 'Restaurants / Cafes', href: '/industries/food' },
      { name: 'Real Estate', href: '/industries/real-estate' },
      { name: 'Politicians & Public Figures', href: '/industries/public-figures' },
      { name: 'Local Businesses', href: '/industries/local' },
    ],
  },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-display font-bold text-charcoal-900">
              Astra<span className="text-primary-500">Veda</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center space-x-1 text-charcoal-900 hover:text-primary-500 font-medium transition-colors"
                >
                  <span>{link.name}</span>
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>

                {/* Dropdown */}
                {link.dropdown && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-charcoal-100 overflow-hidden"
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-charcoal-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/portal">
              <button className="text-charcoal-900 hover:text-primary-500 font-medium transition-colors">
                Client Portal
              </button>
            </Link>
            <Button href="/contact" variant="primary" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-charcoal-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-charcoal-200"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-charcoal-900 hover:text-primary-500 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block text-sm text-charcoal-600 hover:text-primary-500 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Link href="/portal">
                  <button
                    className="w-full py-3 text-charcoal-900 border border-charcoal-300 rounded-lg font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Client Portal
                  </button>
                </Link>
                <Button
                  href="/contact"
                  variant="primary"
                  fullWidth
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

