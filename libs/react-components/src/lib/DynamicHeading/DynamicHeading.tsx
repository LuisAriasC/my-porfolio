import React from 'react';
import './DynamicHeading.scss';

interface DynamicHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6; // Heading levels
  className?: string; // Optional custom classes
  children: React.ReactNode;
  style?: React.CSSProperties; // Additional custom styles
}

export const DynamicHeading: React.FC<DynamicHeadingProps> = ({ level, className, children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`dynamic-heading ${className || `h${level}`}`}>{children}</Tag>;
};