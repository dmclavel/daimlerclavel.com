import React, { useState } from 'react';

import AnimatedBorders from '../AnimatedBorders';

const CoolLogo = () => {
    const [ logoHovered, setLogoHovered ] = useState(false);

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

    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    return (
        <div
            role="img"
            onKeyPress={() => {}}
            onClick={handleClick}
            onMouseOverCapture={handleHover}
            onMouseOutCapture={handleMouseOut}
            className="relative flex justify-center items-center p-1 w-10 h-10 cursor-pointer"
        >
            <AnimatedBorders hovered={logoHovered} />
            <span className="font-sans font-bold text-lg text-blue-light dark:text-mint-light">
                D
            </span>
        </div>
    );
};

export default CoolLogo;