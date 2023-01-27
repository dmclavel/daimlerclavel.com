import React, { useState } from 'react';

import AnimatedBorders from '../AnimatedBorders';

function CoolLogo() {
  const [logoHovered, setLogoHovered] = useState(false);

  const handleClick = () => {
    setLogoHovered(!logoHovered);
  };

  const handleHover = () => {
    if (!logoHovered) {
      setLogoHovered(true);
    }
  };

  const handleMouseOut = () => {
    if (logoHovered) {
      setLogoHovered(false);
    }
  };

  return (
    <button
      type="button"
      tabIndex={-1}
      onClick={handleClick}
      onMouseOverCapture={handleHover}
      onMouseOutCapture={handleMouseOut}
      className="relative flex justify-center items-center p-1 w-10 h-10 cursor-pointer"
    >
      <AnimatedBorders hovered={logoHovered} />
      <span className="font-sans font-bold text-lg text-green-dark dark:text-mint-light">
        D
      </span>
    </button>
  );
}

export default CoolLogo;
