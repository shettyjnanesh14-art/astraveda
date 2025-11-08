'use client';

import { QuotationData } from '../types';
import Card from '@/components/ui/Card';
import { servicesData } from '@/lib/services-data';
import { Check } from 'lucide-react';

interface Props {
  data: QuotationData;
  updateData: (key: keyof QuotationData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ServicesSelection({ data, updateData }: Props) {
  const selectedServices = data.selectedServices || [];

  const toggleService = (serviceId: string) => {
    const isSelected = selectedServices.includes(serviceId);
    const newSelected = isSelected
      ? selectedServices.filter((id) => id !== serviceId)
      : [...selectedServices, serviceId];
    
    updateData('selectedServices', newSelected);
  };

  const isSelected = (serviceId: string) => selectedServices.includes(serviceId);

  return (
    <Card padding="lg">
      <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-2">
        Choose Your Services
      </h2>
      <p className="text-charcoal-600 mb-8">
        Select all the services you need. You can customize the scope in the next step.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {servicesData.map((service) => (
          <button
            key={service.id}
            onClick={() => toggleService(service.id)}
            className={`relative p-6 border-2 rounded-xl text-left transition-all ${
              isSelected(service.id)
                ? 'border-primary-500 bg-primary-50'
                : 'border-charcoal-200 hover:border-charcoal-400 hover:shadow-md'
            }`}
          >
            {isSelected(service.id) && (
              <div className="absolute top-4 right-4 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}

            <div className="mb-3">
              <div className="text-2xl mb-2">{getServiceIcon(service.icon)}</div>
              <h3 className="text-lg font-bold text-charcoal-900 mb-1">{service.name}</h3>
              <p className="text-sm text-charcoal-600">{service.description}</p>
            </div>

            <div className="mt-4 pt-4 border-t border-charcoal-200">
              <div className="text-sm text-charcoal-600">Starting at</div>
              <div className="text-xl font-bold text-primary-500">
                ₹{service.base_price.toLocaleString('en-IN')}/mo
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedServices.length > 0 && (
        <div className="mt-8 p-6 bg-green-50 border border-green-200 rounded-lg">
          <div className="font-semibold text-green-800 mb-2">
            {selectedServices.length} Service{selectedServices.length > 1 ? 's' : ''} Selected
          </div>
          <div className="text-sm text-green-700">
            Multi-service bundles get automatic discounts in the final proposal!
          </div>
        </div>
      )}
    </Card>
  );
}

function getServiceIcon(iconName: string) {
  const icons: Record<string, string> = {
    Share2: '📱',
    TrendingUp: '📈',
    Palette: '🎨',
    Globe: '🌐',
    Search: '🔍',
    Video: '🎥',
    Mic: '🎙️',
    Users: '👥',
    Rocket: '🚀',
  };
  return icons[iconName] || '✨';
}

