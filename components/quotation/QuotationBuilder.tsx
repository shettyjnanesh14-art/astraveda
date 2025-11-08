'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import BusinessProfile from './steps/BusinessProfile';
import ServicesSelection from './steps/ServicesSelection';
import ScopeConfiguration from './steps/ScopeConfiguration';
import ProposalOutput from './steps/ProposalOutput';
import { QuotationData } from './types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const steps = [
  { id: 1, name: 'Business Profile', component: BusinessProfile },
  { id: 2, name: 'Choose Services', component: ServicesSelection },
  { id: 3, name: 'Configure Scope', component: ScopeConfiguration },
  { id: 4, name: 'Your Proposal', component: ProposalOutput },
];

export default function QuotationBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [quotationData, setQuotationData] = useState<QuotationData>({
    businessProfile: {},
    selectedServices: [],
    serviceScopes: {},
    pricing: {
      subtotal: 0,
      discount: 0,
      total: 0,
      currency: 'INR',
    },
  });

  const CurrentStepComponent = steps[currentStep - 1].component;

  const updateData = (key: keyof QuotationData, value: any) => {
    setQuotationData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return quotationData.businessProfile.category && quotationData.businessProfile.name;
      case 2:
        return quotationData.selectedServices.length > 0;
      case 3:
        return true;
      default:
        return true;
    }
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Progress Bar */}
      <Card className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                    currentStep >= step.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-charcoal-200 text-charcoal-600'
                  }`}
                >
                  {step.id}
                </div>
                <div
                  className={`text-sm mt-2 font-medium ${
                    currentStep >= step.id ? 'text-primary-500' : 'text-charcoal-500'
                  }`}
                >
                  {step.name}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-1 flex-1 mx-4 transition-all ${
                    currentStep > step.id ? 'bg-primary-500' : 'bg-charcoal-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <CurrentStepComponent
            data={quotationData}
            updateData={updateData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      {currentStep < 4 && (
        <Card className="mt-8">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={prevStep}
              disabled={currentStep === 1}
              icon={<ChevronLeft className="w-5 h-5" />}
              iconPosition="left"
            >
              Previous
            </Button>

            <div className="text-sm text-charcoal-600">
              Step {currentStep} of {steps.length}
            </div>

            <Button
              variant="primary"
              onClick={nextStep}
              disabled={!canProceed()}
              icon={<ChevronRight className="w-5 h-5" />}
            >
              {currentStep === 3 ? 'Generate Proposal' : 'Next'}
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

