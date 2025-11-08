import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import { BookOpen, Download, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Resources - Marketing Guides & Templates | AstraVeda',
  description: 'Free marketing guides, playbooks, templates, and industry insights.',
};

const blogPosts = [
  {
    title: 'How to Market an Ayurveda Clinic in 2025',
    excerpt: 'Complete guide to digital marketing for Ayurvedic practitioners and wellness centers.',
    category: 'Industry Guide',
    readTime: '12 min read',
    date: 'January 15, 2025',
    slug: 'market-ayurveda-clinic-2025',
    featured: true,
  },
  {
    title: '10 Social Media Mistakes That Are Killing Your Gym Growth',
    excerpt: 'Avoid these common pitfalls and start attracting more members through social media.',
    category: 'Social Media',
    readTime: '8 min read',
    date: 'January 10, 2025',
    slug: 'social-media-mistakes-gyms',
    featured: true,
  },
  {
    title: 'The Complete Guide to Google Ads for Education Businesses',
    excerpt: 'Step-by-step strategy to generate quality leads for online courses and coaching.',
    category: 'Paid Ads',
    readTime: '15 min read',
    date: 'January 5, 2025',
    slug: 'google-ads-education-guide',
    featured: false,
  },
  {
    title: 'Content Calendar Template for Healthcare Brands',
    excerpt: 'Free downloadable template with 90 days of content ideas for medical practices.',
    category: 'Templates',
    readTime: '5 min read',
    date: 'December 28, 2024',
    slug: 'content-calendar-healthcare',
    featured: false,
  },
  {
    title: 'ROI Calculator: How Much Should You Spend on Marketing?',
    excerpt: 'Free calculator to determine your ideal marketing budget based on business goals.',
    category: 'Tools',
    readTime: '6 min read',
    date: 'December 20, 2024',
    slug: 'marketing-budget-calculator',
    featured: false,
  },
  {
    title: 'Restaurant Marketing Playbook 2025',
    excerpt: 'Proven strategies to fill more tables without relying on expensive delivery apps.',
    category: 'Industry Guide',
    readTime: '10 min read',
    date: 'December 15, 2024',
    slug: 'restaurant-marketing-playbook',
    featured: false,
  },
];

const guides = [
  {
    title: 'Local Business SEO Checklist',
    description: '47-point checklist to rank #1 in local search',
    icon: '📍',
    type: 'Checklist',
  },
  {
    title: 'Social Media Audit Template',
    description: 'Evaluate your current social media performance',
    icon: '📊',
    type: 'Template',
  },
  {
    title: 'Content Ideas Database',
    description: '500+ content ideas for service businesses',
    icon: '💡',
    type: 'Database',
  },
  {
    title: 'Ad Copy Swipe File',
    description: 'Proven ad copies that generate leads',
    icon: '✍️',
    type: 'Swipe File',
  },
];

const categories = ['All', 'Industry Guide', 'Social Media', 'Paid Ads', 'Templates', 'Tools'];

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Marketing <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-xl text-charcoal-600">
            Free guides, templates, and insights to help you grow your brand smarter.
          </p>
        </div>
      </Section>

      {/* Featured Posts */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-8">
          Featured Resources
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Link key={post.slug} href={`/resources/${post.slug}`}>
              <Card variant="hover" padding="lg" className="h-full">
                <Badge variant="primary" className="mb-4">{post.category}</Badge>
                <h3 className="text-2xl font-bold text-charcoal-900 mb-3">{post.title}</h3>
                <p className="text-charcoal-600 mb-6">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-charcoal-500">
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Free Downloads */}
      <Section background="white">
        <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-8 text-center">
          Free Downloads
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {guides.map((guide, index) => (
            <Card key={index} className="text-center">
              <div className="text-5xl mb-4">{guide.icon}</div>
              <Badge variant="secondary" size="sm" className="mb-3">{guide.type}</Badge>
              <h3 className="text-lg font-bold text-charcoal-900 mb-2">{guide.title}</h3>
              <p className="text-sm text-charcoal-600 mb-4">{guide.description}</p>
              <Button variant="outline" size="sm" fullWidth icon={<Download className="w-4 h-4" />}>
                Download
              </Button>
            </Card>
          ))}
        </div>
      </Section>

      {/* All Blog Posts */}
      <Section background="gray">
        <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-8">
          All Articles
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 rounded-full bg-white text-charcoal-700 font-medium hover:bg-primary-50 hover:text-primary-600 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/resources/${post.slug}`}>
              <Card variant="hover" className="h-full">
                {/* Image placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-t-xl -m-6 mb-6 flex items-center justify-center">
                  <div className="text-6xl">{getCategoryIcon(post.category)}</div>
                </div>

                <Badge variant="secondary" size="sm" className="mb-3">{post.category}</Badge>
                <h3 className="text-xl font-bold text-charcoal-900 mb-2">{post.title}</h3>
                <p className="text-sm text-charcoal-600 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between text-xs text-charcoal-500 pt-4 border-t border-charcoal-200">
                  <span>{post.readTime}</span>
                  <span>{post.date}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-4">📬</div>
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            Get Marketing Tips in Your Inbox
          </h2>
          <p className="text-xl text-charcoal-300 mb-8">
            Weekly insights, strategies, and tactics. No fluff, just actionable advice.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <Button variant="primary" icon={<ArrowRight className="w-5 h-5" />}>
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-charcoal-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </Section>
    </div>
  );
}

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'Industry Guide': '📚',
    'Social Media': '📱',
    'Paid Ads': '💰',
    'Templates': '📄',
    'Tools': '🛠️',
  };
  return icons[category] || '📝';
}

