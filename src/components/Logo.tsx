import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* UA Designs Logo */}
      <img
        src="/ua-designs-logo.png"
        alt="UA Designs Logo"
        className="w-full h-full object-contain"
        onError={(e) => {
          // Fallback to text if image fails to load
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            parent.innerHTML = `
              <div class="w-full h-full bg-primary rounded-full flex items-center justify-center">
                <span class="text-white font-bold text-lg">UA</span>
              </div>
              <div class="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                <span class="text-xs font-cursive text-primary tracking-wider">designs</span>
              </div>
            `;
          }
        }}
      />
    </div>
  );
} 