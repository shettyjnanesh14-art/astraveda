'use client';

import { QuotationData } from '../types';
import Card from '@/components/ui/Card';
import { industriesData } from '@/lib/services-data';

interface Props {
  data: QuotationData;
  updateData: (key: keyof QuotationData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

const categories = [
  'Ayurveda & Wellness',
  'Healthcare & Clinics',
  'Fitness & Gyms',
  'Education & EdTech',
  'Restaurant & Food',
  'Real Estate',
  'Politicians & Public Figures',
  'Local Business',
  'Other',
];

const digitalMaturityOptions = [
  { value: 'new', label: 'New', description: 'Just starting, minimal digital presence' },
  { value: 'moderate', label: 'Moderate', description: 'Some presence, looking to grow' },
  { value: 'established', label: 'Established', description: 'Strong presence, need optimization' },
];

const budgetRanges = [
  'Under ₹50K/month',
  '₹50K - ₹1L/month',
  '₹1L - ₹3L/month',
  '₹3L - ₹5L/month',
  '₹5L+/month',
];

export default function BusinessProfile({ data, updateData, onNext }: Props) {
  const profile = data.businessProfile;

  const handleChange = (field: string, value: any) => {
    updateData('businessProfile', { ...profile, [field]: value });
  };

  return (
    <Card padding="lg">
      <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-2">
        Tell Us About Your Business
      </h2>
      <p className="text-charcoal-600 mb-8">
        Help us understand your needs so we can create the perfect plan for you.
      </p>

      <div className="space-y-6">
        {/* Name & Contact */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-charcoal-900 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              value={profile.name || ''}
              onChange={(e) => handleChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal-900 mb-2">
              Email *
            </label>
            <input
              type="email"
              value={profile.email || ''}
              onChange={(e) => handleChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-charcoal-900 mb-2">
              Phone
            </label>
            <input
              type="tel"
              value={profile.phone || ''}
              onChange={(e) => handleChange('phone', e.target.value)}
              className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal-900 mb-2">
              Company/Brand Name
            </label>
            <input
              type="text"
              value={profile.company || ''}
              onChange={(e) => handleChange('company', e.target.value)}
              className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Your Company"
            />
          </div>
        </div>

        {/* Business Category */}
        <div>
          <label className="block text-sm font-semibold text-charcoal-900 mb-3">
            Business Category *
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleChange('category', category)}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  profile.category === category
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-charcoal-200 hover:border-charcoal-400'
                }`}
              >
                <div className="font-semibold text-charcoal-900">{category}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Location & Branches */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-charcoal-900 mb-2">
              Location
            </label>
            <input
              type="text"
              value={profile.location || ''}
              onChange={(e) => handleChange('location', e.target.value)}
              className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="City, State"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-charcoal-900 mb-2">
              Number of Branches/Locations
            </label>
            <input
              type="number"
              value={profile.branches || ''}
              onChange={(e) => handleChange('branches', parseInt(e.target.value))}
              className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="1"
              min="1"
            />
          </div>
        </div>

        {/* Digital Maturity */}
        <div>
          <label className="block text-sm font-semibold text-charcoal-900 mb-3">
            Current Digital Maturity
          </label>
          <div className="grid md:grid-cols-3 gap-4">
            {digitalMaturityOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleChange('digitalMaturity', option.value)}
                className={`p-4 border-2 rounded-lg text-left transition-all ${
                  profile.digitalMaturity === option.value
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-charcoal-200 hover:border-charcoal-400'
                }`}
              >
                <div className="font-semibold text-charcoal-900 mb-1">{option.label}</div>
                <div className="text-sm text-charcoal-600">{option.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Monthly Ad Budget */}
        <div>
          <label className="block text-sm font-semibold text-charcoal-900 mb-3">
            Monthly Ad Budget Range
          </label>
          <div className="grid md:grid-cols-3 gap-3">
            {budgetRanges.map((range) => (
              <button
                key={range}
                onClick={() => handleChange('adBudget', range)}
                className={`p-3 border-2 rounded-lg transition-all ${
                  profile.adBudget === range
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-charcoal-200 hover:border-charcoal-400'
                }`}
              >
                <div className="font-semibold text-charcoal-900">{range}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

