'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'glass' | 'hover';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  onClick,
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-white border border-charcoal-200 shadow-lg',
    glass: 'glass-card',
    hover: 'bg-white border border-charcoal-200 shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer',
  };
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const classes = `${baseStyles} ${variants[variant]} ${paddings[padding]} ${className}`;

  if (variant === 'hover' || onClick) {
    return (
      <motion.div
        className={classes}
        whileHover={{ y: -5 }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={classes}>{children}</div>;
}

