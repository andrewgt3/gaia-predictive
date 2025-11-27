import React from 'react';

const IngestIcon = ({ className = '', size = 48 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Cloud at top */}
            <path
                d="M 16 14 Q 16 10 20 10 Q 22 8 24 8 Q 28 8 30 10 Q 34 10 34 14 Q 36 14 36 16 Q 36 18 34 18 L 16 18 Q 14 18 14 16 Q 14 14 16 14 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
            />

            {/* Funnel */}
            <path
                d="M 18 20 L 22 28 L 22 32 L 26 32 L 26 28 L 30 20 Z"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
            />

            {/* Database cylinder */}
            <ellipse cx="24" cy="36" rx="8" ry="3" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="16" y1="36" x2="16" y2="40" stroke="currentColor" strokeWidth="2" />
            <line x1="32" y1="36" x2="32" y2="40" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="24" cy="40" rx="8" ry="3" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Data flow arrows */}
            <path d="M 22 24 L 24 26 L 26 24" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M 22 30 L 24 32 L 26 30" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default IngestIcon;
