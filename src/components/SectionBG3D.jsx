import React from 'react';
import Spline from '@splinetool/react-spline';

// Decorative 3D background strip for sections
// This component is non-interactive (pointer-events-none) so it won't block scrolling or clicks
const SectionBG3D = ({ height = 260, className = '' }) => {
  return (
    <div className={`pointer-events-none absolute inset-x-0 top-0 mx-auto w-full ${className}`} style={{ height }}>
      <Spline
        scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black" />
    </div>
  );
};

export default SectionBG3D;
