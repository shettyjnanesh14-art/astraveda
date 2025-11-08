import { jsPDF } from 'jspdf';
import { QuotationData } from '@/components/quotation/types';
import { servicesData } from './services-data';

export async function generateQuotationPDF(data: QuotationData): Promise<Blob> {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  let yPos = 20;

  // Helper functions
  const addText = (text: string, x: number, size: number = 12, style: 'normal' | 'bold' = 'normal') => {
    doc.setFontSize(size);
    doc.setFont('helvetica', style);
    doc.text(text, x, yPos);
  };

  const addLine = () => {
    yPos += 5;
    doc.setDrawColor(200, 200, 200);
    doc.line(20, yPos, pageWidth - 20, yPos);
    yPos += 5;
  };

  const checkNewPage = (requiredSpace: number = 20) => {
    if (yPos + requiredSpace > pageHeight - 20) {
      doc.addPage();
      yPos = 20;
    }
  };

  // Header
  doc.setFillColor(249, 115, 22); // Primary color
  doc.rect(0, 0, pageWidth, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(28);
  doc.setFont('helvetica', 'bold');
  doc.text('AstraVeda', 20, 25);
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('Growth Proposal', pageWidth - 70, 25);
  
  yPos = 60;
  doc.setTextColor(0, 0, 0);

  // Client Information
  addText('PREPARED FOR', 20, 10, 'bold');
  yPos += 8;
  addText(data.businessProfile.name || 'Client', 20, 14, 'bold');
  yPos += 6;
  addText(data.businessProfile.email || '', 20, 11);
  yPos += 5;
  if (data.businessProfile.phone) {
    addText(data.businessProfile.phone, 20, 11);
    yPos += 5;
  }
  if (data.businessProfile.company) {
    addText(data.businessProfile.company, 20, 11);
    yPos += 5;
  }

  yPos += 10;
  addLine();

  // Business Profile
  checkNewPage(40);
  addText('ABOUT YOUR BUSINESS', 20, 14, 'bold');
  yPos += 8;
  
  const profileData = [
    ['Industry:', data.businessProfile.category || 'N/A'],
    ['Location:', data.businessProfile.location || 'N/A'],
    ['Digital Maturity:', data.businessProfile.digitalMaturity || 'N/A'],
    ['Monthly Ad Budget:', data.businessProfile.adBudget || 'Not specified'],
  ];

  profileData.forEach(([label, value]) => {
    doc.setFont('helvetica', 'bold');
    doc.text(label, 20, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(value, 80, yPos);
    yPos += 7;
  });

  yPos += 10;
  addLine();

  // Services & Deliverables
  checkNewPage(50);
  addText('SERVICES & DELIVERABLES', 20, 14, 'bold');
  yPos += 8;

  const selectedServices = servicesData.filter((s) => data.selectedServices.includes(s.id));

  selectedServices.forEach((service, index) => {
    checkNewPage(40);
    
    // Service name
    doc.setFillColor(249, 115, 22);
    doc.rect(20, yPos - 5, 5, 5, 'F');
    addText(service.name, 30, 12, 'bold');
    yPos += 7;

    // Description
    doc.setFont('helvetica', 'normal');
    const descLines = doc.splitTextToSize(service.description, pageWidth - 50);
    descLines.forEach((line: string) => {
      doc.text(line, 30, yPos);
      yPos += 6;
    });

    yPos += 3;

    // Scope details
    const scope = data.serviceScopes[service.id] || {};
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);

    if (service.id === 'social-media' && scope.platforms) {
      doc.text(`• Platforms: ${scope.platforms.join(', ')}`, 30, yPos);
      yPos += 5;
      doc.text(`• ${scope.postsPerMonth || 20} posts per month`, 30, yPos);
      yPos += 5;
      doc.text(`• ${scope.reelsPerMonth || 8} reels per month`, 30, yPos);
      yPos += 5;
    }

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    yPos += 10;

    if (index < selectedServices.length - 1) {
      addLine();
    }
  });

  // Pricing
  checkNewPage(60);
  yPos += 10;
  
  doc.setFillColor(245, 245, 245);
  doc.rect(20, yPos - 5, pageWidth - 40, 50, 'F');
  
  yPos += 5;
  addText('INVESTMENT SUMMARY', 25, 14, 'bold');
  yPos += 10;

  // Subtotal
  doc.setFont('helvetica', 'normal');
  doc.text('Subtotal:', 25, yPos);
  doc.text(`₹${data.pricing.subtotal.toLocaleString('en-IN')}`, pageWidth - 70, yPos);
  yPos += 8;

  // Discount
  if (data.pricing.discount > 0) {
    doc.setTextColor(34, 197, 94); // Green
    doc.text('Bundle Discount:', 25, yPos);
    doc.text(`-₹${data.pricing.discount.toLocaleString('en-IN')}`, pageWidth - 70, yPos);
    doc.setTextColor(0, 0, 0);
    yPos += 8;
  }

  // Total
  doc.setDrawColor(200, 200, 200);
  doc.line(25, yPos - 2, pageWidth - 25, yPos - 2);
  yPos += 5;
  
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(249, 115, 22);
  doc.text('Total Monthly Retainer:', 25, yPos);
  doc.text(`₹${data.pricing.total.toLocaleString('en-IN')}`, pageWidth - 70, yPos);
  
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);

  yPos += 20;

  // Payment Terms
  checkNewPage(50);
  addText('PAYMENT TERMS', 20, 14, 'bold');
  yPos += 8;

  const terms = [
    '• Payment: 50% advance, 50% on 15th of the month',
    '• GST: 18% (additional to the quoted amount)',
    '• Validity: 30 days from proposal date',
    '• Contract: Month-to-month or annual (15% discount on annual)',
    '• Cancellation: 30 days notice required',
  ];

  doc.setFont('helvetica', 'normal');
  terms.forEach((term) => {
    doc.text(term, 20, yPos);
    yPos += 7;
  });

  yPos += 10;
  addLine();

  // Next Steps
  checkNewPage(50);
  addText('NEXT STEPS', 20, 14, 'bold');
  yPos += 8;

  const steps = [
    '1. Review this proposal carefully',
    '2. Schedule a strategy call to discuss details',
    '3. Sign the agreement and make initial payment',
    '4. We kick off within 48 hours!',
  ];

  doc.setFont('helvetica', 'normal');
  steps.forEach((step) => {
    doc.text(step, 20, yPos);
    yPos += 7;
  });

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.text('AstraVeda | hello@astraveda.io | +91 86600 25993 | Udupi, India', 20, pageHeight - 10);

  // Generate blob
  return doc.output('blob');
}

export function downloadPDF(blob: Blob, filename: string = 'astraveda-proposal.pdf') {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

