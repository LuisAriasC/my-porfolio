import React from 'react';
import './DynamicParagraph.scss';

interface DynamicParagraphProps {
  className?: string; // Optional custom classes
  children: React.ReactNode;
}

export const DynamicParagraph: React.FC<DynamicParagraphProps> = ({ className, children }) => {
  return <p className={`dynamic-paragraph ${className || ''}`}>{children}</p>;
};