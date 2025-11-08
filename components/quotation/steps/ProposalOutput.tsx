'use client';

import { QuotationData } from '../types';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { servicesData } from '@/lib/services-data';
import { Download, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { generateQuotationPDF, downloadPDF } from '@/lib/pdf-generator';

interface Props {
  data: QuotationData;
  updateData: (key: keyof QuotationData, value: any) => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function ProposalOutput({ data, onPrev }: Props) {
  const [isGenerating, setIsGenerating] = useState(false);
  const selectedServices = servicesData.filter((s) =>
    data.selectedServices.includes(s.id)
  );

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    toast.loading('Generating your proposal PDF...');
    
    try {
      const pdfBlob = await generateQuotationPDF(data);
      const filename = `astraveda-proposal-${data.businessProfile.company || 'client'}.pdf`.toLowerCase().replace(/\s+/g, '-');
      downloadPDF(pdfBlob, filename);
      
      toast.dismiss();
      toast.success('Proposal PDF downloaded successfully!');
    } catch (error) {
      console.error('PDF generation error:', error);
      toast.dismiss();
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEmailProposal = async () => {
    toast.loading('Sending proposal to your email...');
    
    // Simulate email sending
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.dismiss();
    toast.success(`Proposal sent to ${data.businessProfile.email}!`);
    
    // In a real implementation, call the email API
    // const response = await fetch('/api/quotation/send-email', {
    //   method: 'POST',
    //   body: JSON.stringify(data),
    // });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card padding="lg" className="bg-gradient-to-br from-primary-50 to-primary-100 border-primary-200">
        <div className="text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-3xl font-display font-bold text-charcoal-900 mb-2">
            Your Custom Proposal is Ready!
          </h2>
          <p className="text-lg text-charcoal-600">
            Here's a comprehensive plan tailored specifically for {data.businessProfile.company || 'your business'}.
          </p>
        </div>
      </Card>

      {/* Proposal Preview */}
      <Card padding="lg">
        <div className="prose max-w-none">
          {/* Header Section */}
          <div className="border-b border-charcoal-200 pb-6 mb-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-3xl font-display font-bold text-charcoal-900 mb-2">
                  Growth Proposal for {data.businessProfile.company}
                </h1>
                <p className="text-charcoal-600">
                  Prepared for: {data.businessProfile.name} • {data.businessProfile.email}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-display font-bold text-charcoal-900">
                  Astra<span className="text-primary-500">Veda</span>
                </div>
                <p className="text-sm text-charcoal-600">Growth-First Digital Studio</p>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-charcoal-900 mb-3">About Your Business</h3>
            <div className="bg-charcoal-50 rounded-lg p-4 grid md:grid-cols-2 gap-4">
              <div>
                <span className="font-semibold">Industry:</span> {data.businessProfile.category}
              </div>
              <div>
                <span className="font-semibold">Location:</span> {data.businessProfile.location || 'N/A'}
              </div>
              <div>
                <span className="font-semibold">Digital Maturity:</span>{' '}
                <span className="capitalize">{data.businessProfile.digitalMaturity}</span>
              </div>
              <div>
                <span className="font-semibold">Ad Budget:</span> {data.businessProfile.adBudget || 'Not specified'}
              </div>
            </div>
          </div>

          {/* Services & Deliverables */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-charcoal-900 mb-4">Services & Deliverables</h3>
            <div className="space-y-4">
              {selectedServices.map((service) => {
                const scope = data.serviceScopes[service.id] || {};
                return (
                  <div key={service.id} className="border border-charcoal-200 rounded-lg p-4">
                    <h4 className="font-bold text-lg text-charcoal-900 mb-2">{service.name}</h4>
                    <p className="text-charcoal-600 mb-3">{service.description}</p>
                    
                    {/* Scope Details */}
                    <div className="bg-charcoal-50 rounded p-3 text-sm">
                      {service.id === 'social-media' && (
                        <ul className="space-y-1">
                          <li>• Platforms: {scope.platforms?.join(', ') || 'Instagram, Facebook'}</li>
                          <li>• {scope.postsPerMonth || 20} posts per month</li>
                          <li>• {scope.reelsPerMonth || 8} reels per month</li>
                          <li>• Reporting: {scope.reportingDepth || 'Standard'}</li>
                        </ul>
                      )}
                      {service.id === 'performance-marketing' && (
                        <ul className="space-y-1">
                          <li>• {scope.adCampaigns || 2} ad campaigns per month</li>
                          <li>• Meta & Google Ads management</li>
                          <li>• Reporting: {scope.reportingDepth || 'Standard'}</li>
                        </ul>
                      )}
                      {service.id === 'production' && (
                        <ul className="space-y-1">
                          <li>• {scope.shootDays || 1} shoot day(s) per month</li>
                          <li>• Professional editing & post-production</li>
                          <li>• Reporting: {scope.reportingDepth || 'Standard'}</li>
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pricing */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-charcoal-900 mb-4">Investment</h3>
            <div className="border border-charcoal-200 rounded-lg overflow-hidden">
              <div className="bg-charcoal-50 p-4">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Subtotal:</span>
                  <span>₹{data.pricing.subtotal.toLocaleString('en-IN')}</span>
                </div>
                {data.pricing.discount > 0 && (
                  <div className="flex justify-between mb-2 text-green-600">
                    <span className="font-semibold">Bundle Discount:</span>
                    <span>-₹{data.pricing.discount.toLocaleString('en-IN')}</span>
                  </div>
                )}
                <div className="flex justify-between text-xl font-bold text-primary-500 pt-3 border-t border-charcoal-300">
                  <span>Total Monthly Retainer:</span>
                  <span>₹{data.pricing.total.toLocaleString('en-IN')}</span>
                </div>
              </div>
              
              <div className="p-4 bg-white">
                <div className="text-sm text-charcoal-600 space-y-2">
                  <p>• Payment Terms: 50% advance, 50% on 15th of the month</p>
                  <p>• GST: 18% (additional)</p>
                  <p>• Validity: 30 days from proposal date</p>
                  <p>• Contract: Month-to-month or annual (15% discount)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-charcoal-900 mb-3">Next Steps</h3>
            <ol className="list-decimal list-inside space-y-2 text-charcoal-700">
              <li>Review this proposal carefully</li>
              <li>Schedule a strategy call to discuss further</li>
              <li>Sign the agreement and make the initial payment</li>
              <li>We'll kick off within 48 hours!</li>
            </ol>
          </div>
        </div>
      </Card>

      {/* Action Buttons */}
      <Card padding="lg">
        <div className="space-y-4">
          <div className="grid md:grid-cols-3 gap-4">
            <Button
              variant="primary"
              onClick={handleDownloadPDF}
              disabled={isGenerating}
              icon={<Download className="w-5 h-5" />}
              fullWidth
            >
              Download PDF
            </Button>
            <Button
              variant="secondary"
              onClick={handleEmailProposal}
              icon={<Mail className="w-5 h-5" />}
              fullWidth
            >
              Email Proposal
            </Button>
            <Button
              variant="outline"
              href="/contact"
              icon={<Phone className="w-5 h-5" />}
              fullWidth
            >
              Talk to Strategist
            </Button>
          </div>
          
          <div className="text-center">
            <button
              onClick={onPrev}
              className="text-charcoal-600 hover:text-primary-500 transition-colors"
            >
              ← Go back and make changes
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

