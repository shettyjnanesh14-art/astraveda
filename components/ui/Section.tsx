import { ReactNode } from 'react';
import Container from './Container';

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'full';
  background?: 'white' | 'gray' | 'dark';
  noPadding?: boolean;
  id?: string;
}

export default function Section({
  children,
  className = '',
  containerSize = 'lg',
  background = 'white',
  noPadding = false,
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-charcoal-50',
    dark: 'bg-charcoal-900 text-white',
  };

  return (
    <section id={id} className={`${!noPadding ? 'section-padding' : ''} ${backgrounds[background]} ${className}`}>
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}

