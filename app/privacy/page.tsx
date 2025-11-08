import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Privacy Policy - AstraVeda',
  description: 'How we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-display font-bold text-charcoal-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-charcoal-600 mb-12">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <Card padding="lg" className="prose prose-lg max-w-none">
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly, including name, email, phone number, company details, and any other information you submit through our forms.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use your information to:<br />
              - Provide and improve our services<br />
              - Communicate with you about projects<br />
              - Send relevant marketing information<br />
              - Process payments<br />
              - Comply with legal obligations
            </p>

            <h2>3. Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share information with service providers who assist in our operations, subject to confidentiality agreements.
            </p>

            <h2>4. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls.
            </p>

            <h2>5. Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience, analyze usage, and improve our services.
            </p>

            <h2>6. Your Rights</h2>
            <p>
              You have the right to:<br />
              - Access your personal information<br />
              - Request corrections<br />
              - Request deletion<br />
              - Opt-out of marketing communications
            </p>

            <h2>7. Third-Party Services</h2>
            <p>
              We use third-party services (Supabase, Vercel, etc.) that have their own privacy policies. Please review their policies as well.
            </p>

            <h2>8. Contact</h2>
            <p>
              For privacy concerns or requests, contact us at hello@astraveda.io or +91 86600 25993.
            </p>
          </Card>
        </div>
      </Section>
    </div>
  );
}

