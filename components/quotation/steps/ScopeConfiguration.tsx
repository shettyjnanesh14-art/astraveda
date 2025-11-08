'use client';

import { QuotationData, ServiceScope } from '../types';
import Card from '@/components/ui/Card';
import { servicesData } from '@/lib/services-data';

interface Props {
  data: QuotationData;
  updateData: (key: keyof QuotationData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ScopeConfiguration({ data, updateData, onNext }: Props) {
  const selectedServices = servicesData.filter((s) =>
    data.selectedServices.includes(s.id)
  );
  const scopes = data.serviceScopes || {};

  const updateScope = (serviceId: string, field: string, value: any) => {
    const newScopes = {
      ...scopes,
      [serviceId]: {
        ...scopes[serviceId],
        [field]: value,
      },
    };
    updateData('serviceScopes', newScopes);
    calculatePricing(newScopes);
  };

  const calculatePricing = (currentScopes: Record<string, ServiceScope>) => {
    let subtotal = 0;

    selectedServices.forEach((service) => {
      const scope = currentScopes[service.id] || {};
      
      // Start with base price from selected tier or default
      let serviceCost = service.base_price;

      // Apply custom pricing logic based on scope
      if (service.id === 'social-media') {
        const platforms = scope.platforms?.length || 1;
        const posts = scope.postsPerMonth || 20;
        const reels = scope.reelsPerMonth || 8;
        
        serviceCost = 20000 * platforms + posts * 500 + reels * 2000;
      } else if (service.id === 'performance-marketing') {
        const campaigns = scope.adCampaigns || 2;
        serviceCost = 30000 + campaigns * 10000;
      } else if (service.id === 'production') {
        const shootDays = scope.shootDays || 1;
        serviceCost = shootDays * 25000;
      }
      // Add logic for other services...

      subtotal += serviceCost;
    });

    // Apply bundle discount
    let discount = 0;
    if (selectedServices.length >= 3) {
      discount = subtotal * 0.15; // 15% discount for 3+ services
    } else if (selectedServices.length === 2) {
      discount = subtotal * 0.10; // 10% discount for 2 services
    }

    updateData('pricing', {
      subtotal,
      discount,
      total: subtotal - discount,
      currency: 'INR',
    });
  };

  return (
    <div className="space-y-6">
      <Card padding="lg">
        <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-2">
          Configure Your Services
        </h2>
        <p className="text-charcoal-600 mb-8">
          Customize the scope for each selected service.
        </p>
      </Card>

      {selectedServices.map((service) => (
        <Card key={service.id} padding="lg">
          <h3 className="text-xl font-bold text-charcoal-900 mb-6">{service.name}</h3>

          {service.id === 'social-media' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-3">
                  Platforms
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Instagram', 'Facebook', 'LinkedIn', 'Twitter', 'YouTube', 'Pinterest'].map((platform) => (
                    <button
                      key={platform}
                      onClick={() => {
                        const current = scopes[service.id]?.platforms || [];
                        const newPlatforms = current.includes(platform)
                          ? current.filter((p) => p !== platform)
                          : [...current, platform];
                        updateScope(service.id, 'platforms', newPlatforms);
                      }}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        scopes[service.id]?.platforms?.includes(platform)
                          ? 'border-primary-500 bg-primary-50'
                          : 'border-charcoal-200'
                      }`}
                    >
                      {platform}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                    Posts per Month
                  </label>
                  <input
                    type="number"
                    value={scopes[service.id]?.postsPerMonth || 20}
                    onChange={(e) => updateScope(service.id, 'postsPerMonth', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    min="10"
                    max="60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                    Reels per Month
                  </label>
                  <input
                    type="number"
                    value={scopes[service.id]?.reelsPerMonth || 8}
                    onChange={(e) => updateScope(service.id, 'reelsPerMonth', parseInt(e.target.value))}
                    className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    min="4"
                    max="30"
                  />
                </div>
              </div>
            </div>
          )}

          {service.id === 'performance-marketing' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                  Ad Campaigns per Month
                </label>
                <input
                  type="number"
                  value={scopes[service.id]?.adCampaigns || 2}
                  onChange={(e) => updateScope(service.id, 'adCampaigns', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  min="1"
                  max="10"
                />
              </div>
            </div>
          )}

          {service.id === 'production' && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                  Shoot Days per Month
                </label>
                <input
                  type="number"
                  value={scopes[service.id]?.shootDays || 1}
                  onChange={(e) => updateScope(service.id, 'shootDays', parseInt(e.target.value))}
                  className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  min="1"
                  max="10"
                />
              </div>
            </div>
          )}

          {/* Common fields for all services */}
          <div className="mt-6">
            <label className="block text-sm font-semibold text-charcoal-900 mb-3">
              Reporting Depth
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['basic', 'standard', 'advanced'].map((depth) => (
                <button
                  key={depth}
                  onClick={() => updateScope(service.id, 'reportingDepth', depth)}
                  className={`p-3 border-2 rounded-lg capitalize transition-all ${
                    (scopes[service.id]?.reportingDepth || 'standard') === depth
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-charcoal-200'
                  }`}
                >
                  {depth}
                </button>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

