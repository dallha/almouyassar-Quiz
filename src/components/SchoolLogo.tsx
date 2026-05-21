import React from 'react';

interface SchoolLogoProps {
  className?: string;
  size?: number | string;
}

export default function SchoolLogo({ className = '', size = 48 }: SchoolLogoProps) {
  const pixelSize = typeof size === 'number' ? size : parseInt(size.toString(), 10) || 48;

  return (
    <div
      className={`inline-flex items-center justify-center bg-white rounded-full p-0.5 border border-[#D0A21C] shadow-sm transition-all duration-300 shrink-0 ${className}`}
      style={{
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
      }}
    >
      <img
        src="/images/logo.png"
        alt="Logo officiel de l'Institut Al-Mouyassar"
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  );
}
