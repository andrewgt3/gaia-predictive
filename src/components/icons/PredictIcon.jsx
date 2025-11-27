import React from 'react';

const PredictIcon = ({ className = '', size = 48 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Bullseye circles */}
            <circle cx="24" cy="24" r="14" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <circle cx="24" cy="24" r="2" fill="currentColor" />

            {/* Arrow pointing to center */}
            <path
                d="M 38 10 L 28 20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />

            {/* Arrow head */}
            <path
                d="M 28 20 L 26 16 M 28 20 L 32 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            {/* Priority badge/shield outline */}
            <path
                d="M 36 8 L 40 8 L 40 12 L 38 14 L 36 12 Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
                strokeLinejoin="round"
            />

            {/* Priority indicator */}
            <circle cx="38" cy="10" r="1" fill="currentColor" />
        </svg>
    );
};

export default PredictIcon;
