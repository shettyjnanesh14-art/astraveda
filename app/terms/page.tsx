import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Terms of Service - AstraVeda',
  description: 'Terms and conditions for using AstraVeda services.',
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-display font-bold text-charcoal-900 mb-6">
            Terms of Service
          </h1>
          <p className="text-charcoal-600 mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card padding="lg" className="prose prose-lg max-w-none">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using AstraVeda services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>

            <h2>2. Services</h2>
            <p>
              AstraVeda provides digital marketing, creative, and consulting services including but not limited to social media management, performance marketing, branding, web design, SEO, and content creation.
            </p>

            <h2>3. Payment Terms</h2>
            <p>
              - Monthly retainers are billed in advance<br />
              - 50% advance payment required for project initiation<br />
              - GST of 18% applicable on all services<br />
              - Late payments may result in service suspension
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content, designs, and materials created by AstraVeda remain our property until full payment is received. Upon payment, rights are transferred to the client as per the agreement.
            </p>

            <h2>5. Client Responsibilities</h2>
            <p>
              Clients must provide timely feedback, necessary access to accounts, and required materials for project execution.
            </p>

            <h2>6. Cancellation Policy</h2>
            <p>
              - Monthly retainers require 30 days notice for cancellation<br />
              - Project cancellations forfeit advance payments<br />
              - Refunds evaluated on case-by-case basis
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              AstraVeda is not liable for indirect, incidental, or consequential damages arising from service use.
            </p>

            <h2>8. Contact</h2>
            <p>
              For questions about these terms, contact us at hello@astraveda.io or +91 86600 25993.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

