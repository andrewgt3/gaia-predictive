import React from 'react';

const LineGraphIcon = ({ className = '', size = 48 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Grid lines */}
            <line x1="8" y1="12" x2="40" y2="12" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <line x1="8" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <line x1="8" y1="28" x2="40" y2="28" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
            <line x1="8" y1="36" x2="40" y2="36" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />

            {/* Axes */}
            <line x1="8" y1="8" x2="8" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="8" y1="40" x2="40" y2="40" stroke="currentColor" strokeWidth="2" />

            {/* Line graph with anomaly */}
            <polyline
                points="10,35 16,32 22,30 28,18 34,28 38,26"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
            />

            {/* Data points */}
            <circle cx="10" cy="35" r="2" fill="currentColor" />
            <circle cx="16" cy="32" r="2" fill="currentColor" />
            <circle cx="22" cy="30" r="2" fill="currentColor" />

            {/* Anomaly point - highlighted */}
            <circle cx="28" cy="18" r="3" fill="currentColor" />
            <circle cx="28" cy="18" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" />

            <circle cx="34" cy="28" r="2" fill="currentColor" />
            <circle cx="38" cy="26" r="2" fill="currentColor" />
        </svg>
    );
};

export default LineGraphIcon;
