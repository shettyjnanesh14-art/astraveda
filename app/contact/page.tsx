'use client';

import { useState } from 'react';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import toast from 'react-hot-toast';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@astraveda.io',
    href: 'mailto:hello@astraveda.io',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 86600 25993',
    href: 'tel:+918660025993',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Udupi, India',
    href: 'https://maps.google.com/?q=Udupi,India',
  },
];

const goalOptions = [
  'Increase Brand Awareness',
  'Generate More Leads',
  'Boost Sales & Revenue',
  'Improve Social Presence',
  'Launch New Product/Service',
  'Reputation Management',
];

const budgetRanges = [
  'Under ₹50K/month',
  '₹50K - ₹1L/month',
  '₹1L - ₹3L/month',
  '₹3L - ₹5L/month',
  '₹5L+/month',
];

export default function ContactPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    website: '',
    goals: [] as string[],
    budget: '',
    timeline: '',
    message: '',
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleGoal = (goal: string) => {
    const goals = formData.goals.includes(goal)
      ? formData.goals.filter((g) => g !== goal)
      : [...formData.goals, goal];
    handleChange('goals', goals);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.loading('Sending your message...');

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.dismiss();
    toast.success('Message sent! We will get back to you within 24 hours.');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      industry: '',
      website: '',
      goals: [],
      budget: '',
      timeline: '',
      message: '',
    });
    setCurrentStep(1);
  };

  const canProceed = () => {
    if (currentStep === 1) {
      return formData.name && formData.email && formData.phone;
    }
    if (currentStep === 2) {
      return formData.goals.length > 0;
    }
    return true;
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-charcoal-900 mb-6">
            Let's <span className="gradient-text">Talk</span>
          </h1>
          <p className="text-xl text-charcoal-600">
            Tell us about your brand and we'll create a custom growth strategy for you.
          </p>
        </div>
      </Section>

      <Section background="gray">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card padding="lg">
              <h3 className="text-2xl font-display font-bold text-charcoal-900 mb-6">
                Get in Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-charcoal-50 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <div className="font-semibold text-charcoal-900">{item.title}</div>
                      <div className="text-charcoal-600">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card padding="lg" className="bg-primary-50 border-primary-200">
              <h4 className="font-bold text-charcoal-900 mb-3">Not sure what you need?</h4>
              <p className="text-charcoal-700 mb-4">
                Skip the form and book a free 30-minute strategy call.
              </p>
              <Button href="/pricing" variant="primary" fullWidth>
                Schedule Call
              </Button>
            </Card>
          </div>

          {/* Multi-Step Form */}
          <div className="lg:col-span-2">
            <Card padding="lg">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-charcoal-600">
                    Step {currentStep} of 3
                  </span>
                  <span className="text-sm text-charcoal-500">{Math.round((currentStep / 3) * 100)}%</span>
                </div>
                <div className="w-full bg-charcoal-200 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / 3) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Info */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                      Let's start with the basics
                    </h3>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                          Company/Brand
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                          Industry
                        </label>
                        <input
                          type="text"
                          value={formData.industry}
                          onChange={(e) => handleChange('industry', e.target.value)}
                          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          value={formData.website}
                          onChange={(e) => handleChange('website', e.target.value)}
                          className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                          placeholder="https://"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Goals */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                      What are your goals?
                    </h3>
                    <p className="text-charcoal-600 mb-4">Select all that apply</p>

                    <div className="grid md:grid-cols-2 gap-3">
                      {goalOptions.map((goal) => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => toggleGoal(goal)}
                          className={`p-4 border-2 rounded-lg text-left transition-all ${
                            formData.goals.includes(goal)
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-charcoal-200 hover:border-charcoal-400'
                          }`}
                        >
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Budget & Timeline */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-charcoal-900 mb-4">
                      Budget & Timeline
                    </h3>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal-900 mb-3">
                        Monthly Budget Range
                      </label>
                      <div className="grid md:grid-cols-2 gap-3">
                        {budgetRanges.map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => handleChange('budget', range)}
                            className={`p-3 border-2 rounded-lg transition-all ${
                              formData.budget === range
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-charcoal-200 hover:border-charcoal-400'
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                        When do you want to start?
                      </label>
                      <input
                        type="text"
                        value={formData.timeline}
                        onChange={(e) => handleChange('timeline', e.target.value)}
                        className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                        placeholder="e.g., Immediately, Next month, Q1 2025"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-charcoal-900 mb-2">
                        Anything else we should know?
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="w-full px-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 h-32"
                        placeholder="Tell us about your challenges, expectations, or any specific questions..."
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-charcoal-200">
                  {currentStep > 1 ? (
                    <Button
                      type="button"
                      variant="ghost"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      Back
                    </Button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < 3 ? (
                    <Button
                      type="button"
                      variant="primary"
                      onClick={() => setCurrentStep(currentStep + 1)}
                      disabled={!canProceed()}
                    >
                      Next Step
                    </Button>
                  ) : (
                    <Button type="submit" variant="primary" icon={<Send className="w-5 h-5" />}>
                      Send Message
                    </Button>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}

