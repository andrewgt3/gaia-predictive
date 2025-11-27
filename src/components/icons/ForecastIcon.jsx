import React from 'react';

const ForecastIcon = ({ className = '', size = 48 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Clock circle */}
            <circle cx="20" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Clock center dot */}
            <circle cx="20" cy="24" r="1.5" fill="currentColor" />

            {/* Clock hands */}
            <line x1="20" y1="24" x2="20" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="24" x2="26" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />

            {/* Timeline extending to the right */}
            <line x1="34" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="2" />

            {/* Forward arrow */}
            <path
                d="M 38 20 L 42 24 L 38 28"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />

            {/* Timeline markers */}
            <line x1="36" y1="22" x2="36" y2="26" stroke="currentColor" strokeWidth="1.5" />
            <line x1="39" y1="22" x2="39" y2="26" stroke="currentColor" strokeWidth="1.5" />
        </svg>
    );
};

export default ForecastIcon;
