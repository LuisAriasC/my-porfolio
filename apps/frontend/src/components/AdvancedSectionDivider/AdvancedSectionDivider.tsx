import React from 'react';
import './AdvancedSectionDivider.scss';

const AdvancedSectionDivider: React.FC = () => {
  return (
    <div className="animated-divider">
      <svg
        className="divider-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        {/* Primary Wave */}
        <path
          className="divider-path primary-wave"
          d="M0,160 C120,200 240,120 360,160 C480,200 600,280 720,240 C840,200 960,120 1080,160 C1200,200 1320,280 1440,240 L1440,320 L0,320 Z"
        ></path>

        {/* Secondary Wave */}
        <path
          className="divider-path secondary-wave"
          d="M0,240 C120,280 240,200 360,240 C480,280 600,200 720,280 C840,360 960,280 1080,320 C1200,360 1320,280 1440,320 L1440,320 L0,320 Z"
        ></path>
      </svg>
    </div>
  );
};

export default AdvancedSectionDivider;