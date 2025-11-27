import React from 'react';

const AnalyzeIcon = ({ className = '', size = 48 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Microchip outline */}
            <rect x="14" y="14" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Chip pins - left */}
            <line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="24" x2="14" y2="24" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="30" x2="14" y2="30" stroke="currentColor" strokeWidth="1.5" />

            {/* Chip pins - right */}
            <line x1="34" y1="18" x2="38" y2="18" stroke="currentColor" strokeWidth="1.5" />
            <line x1="34" y1="24" x2="38" y2="24" stroke="currentColor" strokeWidth="1.5" />
            <line x1="34" y1="30" x2="38" y2="30" stroke="currentColor" strokeWidth="1.5" />

            {/* Chip pins - top */}
            <line x1="18" y1="10" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="10" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" />
            <line x1="30" y1="10" x2="30" y2="14" stroke="currentColor" strokeWidth="1.5" />

            {/* Chip pins - bottom */}
            <line x1="18" y1="34" x2="18" y2="38" stroke="currentColor" strokeWidth="1.5" />
            <line x1="24" y1="34" x2="24" y2="38" stroke="currentColor" strokeWidth="1.5" />
            <line x1="30" y1="34" x2="30" y2="38" stroke="currentColor" strokeWidth="1.5" />

            {/* Neural network nodes inside */}
            <circle cx="20" cy="20" r="2" fill="currentColor" />
            <circle cx="28" cy="20" r="2" fill="currentColor" />
            <circle cx="24" cy="24" r="2" fill="currentColor" />
            <circle cx="20" cy="28" r="2" fill="currentColor" />
            <circle cx="28" cy="28" r="2" fill="currentColor" />

            {/* Neural connections */}
            <line x1="20" y1="20" x2="24" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="28" y1="20" x2="24" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="24" y1="24" x2="20" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="24" y1="24" x2="28" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
    );
};

export default AnalyzeIcon;
