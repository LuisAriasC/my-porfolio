import React from 'react';
import './DynamicLayout.scss';

export interface DynamicLayoutProps {
  children: React.ReactNode;
  direction?: 'row' | 'column'; // Flex direction
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch'; // Flex alignment
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around'; // Justify content
  gap?: number; // Spacing between children
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'; // Flex wrap
  style?: React.CSSProperties; // Additional custom styles
  className?: string; // Additional custom class names
}

export const DynamicLayout: React.FC<DynamicLayoutProps> = ({
  children,
  direction = 'column',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  gap = 0,
  wrap = 'nowrap',
  style,
  className,
}) => {
  return (
    <div
      className={`dynamic-layout ${className || ''}`}
      style={{
        display: 'flex',
        flexDirection: direction,
        flexWrap: wrap, // Apply wrap property
        alignItems,
        justifyContent,
        gap: `${gap}px`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};