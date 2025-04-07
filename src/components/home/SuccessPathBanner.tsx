"use client";

import React from 'react';
import Link from 'next/link';

interface SuccessPathBannerProps {
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export const SuccessPathBanner: React.FC<SuccessPathBannerProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundColor = '#F8E1D5',
  textColor = '#8B4513',
  accentColor = '#8B4513'
}) => {
  return (
    <div className="w-full flex justify-center my-16 px-4">
      <section
        className="w-full max-w-7xl py-10 px-6 md:px-12 mx-4 rounded-xl font-[var(--font-family)]"
        style={{ backgroundColor }}
      >
        <div className="container mx-auto max-w-4xl">
          <h2
            className="text-center text-2xl md:text-3xl font-bold mb-4"
            style={{ color: textColor }}
          >
            {title}
          </h2>
          
          <p className="text-center text-base md:text-lg leading-relaxed mb-2">
            {description}
          </p>
          
          <div className="text-center">
            <Link href={ctaLink}>
              <span
                className="inline-block cursor-pointer text-base md:text-lg  transition-all duration-200 hover:underline"
                style={{ color: accentColor }}
              >
                {ctaText}
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessPathBanner;