import { useState } from "react";

interface HafizAvatarProps {
  className?: string;
  externalSrc?: string;
}

export default function HafizAvatar({ className = "", externalSrc }: HafizAvatarProps) {
  const [imageError, setImageError] = useState(false);

  // If there is an external source provided and it hasn't errored out yet, try rendering it
  if (externalSrc && !imageError) {
    return (
      <img
        id="hafiz-avatar-img"
        src={externalSrc}
        alt="Hafiz Ali Hasnain"
        referrerPolicy="no-referrer"
        onError={() => setImageError(true)}
        className={`${className} object-cover`}
      />
    );
  }

  // Beautiful high-fidelity, creative SVG Illustration as an ultra-premium fallback
  return (
    <svg
      id="hafiz-avatar-svg"
      viewBox="0 0 400 400"
      className={`${className} bg-gradient-to-tr from-sky-600 to-sky-400 select-none`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Sky-blue background gradient */}
        <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        {/* Soft shadow effects for illustrative depth */}
        <filter id="soft-shadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="8" stdDeviation="6" floodOpacity="0.15" />
        </filter>
        <filter id="beard-shadow" x="-5%" y="-5%" width="110%" height="110%">
          <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.2" />
        </filter>
        <linearGradient id="hair-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1a1a" />
          <stop offset="100%" stopColor="#0d0d0d" />
        </linearGradient>
      </defs>

      {/* Sky Blue Ambient Background */}
      <circle cx="200" cy="200" r="200" fill="url(#blue-grad)" />

      {/* Shoulder & Kurta / White Shirt */}
      <path
        d="M100 340 C100 290, 140 270, 200 270 C260 270, 300 290, 300 340 L310 400 L90 400 Z"
        fill="#ffffff"
        filter="url(#soft-shadow)"
      />
      {/* Placket / Kurta neck button strip */}
      <path d="M194 270 H206 V340 H194 Z" fill="#e2e8f0" />
      <circle cx="200" cy="285" r="3" fill="#cbd5e1" />
      <circle cx="200" cy="305" r="3" fill="#cbd5e1" />
      <circle cx="200" cy="325" r="3" fill="#cbd5e1" />

      {/* Neck */}
      <path d="M165 210 V280 C165 295, 235 295, 235 280 V210 Z" fill="#eab38c" />
      {/* Neck Shadow under chin */}
      <path d="M165 210 Q200 245 235 210 V230 Q200 260 165 230 Z" fill="#d4936a" opacity="0.6" />

      {/* Face ears */}
      <circle cx="125" cy="180" r="14" fill="#eab38c" />
      <circle cx="275" cy="180" r="14" fill="#eab38c" />
      {/* Inner Ear canals */}
      <circle cx="125" cy="180" r="7" fill="#d4936a" opacity="0.4" />
      <circle cx="275" cy="180" r="7" fill="#d4936a" opacity="0.4" />

      {/* Face Base */}
      <path
        d="M135 140 C135 100, 265 100, 265 140 V205 C265 245, 135 245, 135 205 Z"
        fill="#f8c39e"
      />

      {/* Cheeks blush / dimension */}
      <circle cx="155" cy="190" r="15" fill="#f43f5e" opacity="0.12" />
      <circle cx="245" cy="190" r="15" fill="#f43f5e" opacity="0.12" />

      {/* Eyes representing fine dark eyes */}
      <ellipse cx="168" cy="165" rx="9" ry="6.5" fill="#ffffff" />
      <ellipse cx="232" cy="165" rx="9" ry="6.5" fill="#ffffff" />
      {/* Pupils */}
      <circle cx="168" cy="165" r="4.5" fill="#1f2937" />
      <circle cx="232" cy="165" r="4.5" fill="#1f2937" />
      {/* Eye catchlights (glimmer) */}
      <circle cx="170" cy="163" r="1.5" fill="#ffffff" />
      <circle cx="234" cy="163" r="1.5" fill="#ffffff" />

      {/* Thick Neat Eyebrows */}
      <path
        d="M152 153 Q168 147 182 154"
        stroke="#111827"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M248 153 Q232 147 218 154"
        stroke="#111827"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Nose */}
      <path
        d="M194 165 Q200 162 206 165 Q204 195 200 195 Q196 195 194 165 Z"
        fill="#eab38c"
        opacity="0.95"
      />
      <path d="M198 193 H202" stroke="#d4936a" strokeWidth="2" strokeLinecap="round" />

      {/* Mouth / Smile */}
      <path d="M185 208 Q200 216 215 208" stroke="#be123c" strokeWidth="2.5" strokeLinecap="round" />

      {/* Mustache */}
      <path
        d="M174 205 Q200 198 226 205 C222 210, 178 210, 174 205 Z"
        fill="url(#hair-gradient)"
      />

      {/* Beautiful Rich Groomed Beard matching user photo */}
      <path
        d="M135 168 C128 225, 150 260, 200 260 C250 260, 272 225, 265 168 C267 195, 260 215, 250 220 C240 235, 230 248, 200 248 C170 248, 160 235, 150 220 C140 215, 133 195, 135 168 Z"
        fill="url(#hair-gradient)"
        filter="url(#beard-shadow)"
      />

      {/* Black styled hair crop */}
      <path
        d="M131 140 C130 90, 170 65, 200 65 C230 65, 270 90, 269 140 C272 110, 265 85, 250 78 C235 71, 200 70, 200 70 C200 70, 165 71, 150 78 C135 85, 128 110, 131 140 Z"
        fill="url(#hair-gradient)"
      />
    </svg>
  );
}
