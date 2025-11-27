import React from 'react';

const CircuitIcon = ({ className = '', size = 48 }) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Central logic gate */}
            <rect x="18" y="20" width="12" height="8" stroke="currentColor" strokeWidth="2" fill="none" />

            {/* Input nodes */}
            <circle cx="10" cy="22" r="2" fill="currentColor" />
            <circle cx="10" cy="26" r="2" fill="currentColor" />

            {/* Input lines */}
            <line x1="12" y1="22" x2="18" y2="22" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="26" x2="18" y2="26" stroke="currentColor" strokeWidth="1.5" />

            {/* Output node */}
            <circle cx="38" cy="24" r="2" fill="currentColor" />

            {/* Output line */}
            <line x1="30" y1="24" x2="36" y2="24" stroke="currentColor" strokeWidth="1.5" />

            {/* Top branch */}
            <circle cx="24" cy="12" r="2" fill="currentColor" />
            <line x1="24" y1="14" x2="24" y2="20" stroke="currentColor" strokeWidth="1.5" />

            {/* Bottom branch */}
            <circle cx="24" cy="36" r="2" fill="currentColor" />
            <line x1="24" y1="28" x2="24" y2="34" stroke="currentColor" strokeWidth="1.5" />

            {/* Interconnecting nodes */}
            <circle cx="18" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
            <circle cx="30" cy="12" r="1.5" fill="currentColor" opacity="0.6" />
            <circle cx="18" cy="36" r="1.5" fill="currentColor" opacity="0.6" />
            <circle cx="30" cy="36" r="1.5" fill="currentColor" opacity="0.6" />

            {/* Connection lines */}
            <line x1="18" y1="12" x2="24" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="24" y1="12" x2="30" y2="12" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="18" y1="36" x2="24" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            <line x1="24" y1="36" x2="30" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        </svg>
    );
};

export default CircuitIcon;
