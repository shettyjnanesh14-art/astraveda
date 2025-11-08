import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  services: [
    { name: 'Social Media Management', href: '/services/social-media' },
    { name: 'Performance Marketing', href: '/services/performance-marketing' },
    { name: 'Branding & Identity', href: '/services/branding' },
    { name: 'Web Design', href: '/services/web-design' },
    { name: 'SEO & Content', href: '/services/seo' },
    { name: 'Video Production', href: '/services/production' },
  ],
  industries: [
    { name: 'Ayurveda & Wellness', href: '/industries/ayurveda' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Fitness & Gyms', href: '/industries/fitness' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Restaurants', href: '/industries/food' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/process' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Guides & Playbooks', href: '/resources/guides' },
    { name: 'Templates', href: '/resources/templates' },
    { name: 'Client Portal', href: '/portal' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/company/astraveda', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/astraveda', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/astraveda', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com/@astraveda', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-display font-bold mb-4">
              Astra<span className="text-primary-500">Veda</span>
            </div>
            <p className="text-charcoal-300 mb-6 max-w-sm">
              Growth-first digital marketing studio for brands that want to lead, not just post.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@astraveda.com" className="flex items-center text-charcoal-300 hover:text-primary-500 transition-colors">
                <Mail className="w-5 h-5 mr-2" />
                hello@astraveda.com
              </a>
              <a href="tel:+919876543210" className="flex items-center text-charcoal-300 hover:text-primary-500 transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                +91 98765 43210
              </a>
              <div className="flex items-start text-charcoal-300">
                <MapPin className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
                <span>Bangalore, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-primary-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-charcoal-300 hover:text-primary-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Industries</h4>
            <ul className="space-y-2">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-charcoal-300 hover:text-primary-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-charcoal-300 hover:text-primary-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-charcoal-300 hover:text-primary-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-charcoal-400 text-sm">
              © {new Date().getFullYear()} AstraVeda. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-charcoal-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-charcoal-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-charcoal-400 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

