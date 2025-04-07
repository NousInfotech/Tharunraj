"use client";

import React from 'react';


interface FeatureProps {
  title: string;
  description: string;
}

export const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="flex gap-3 mb-5">
      <div className="flex-shrink-0 text-[var(--primary-bg)] mt-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-7 md:h-7">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
      </div>
      <div>
       
        <p className="text-[var(--light-bg)] text-base md:text-lg  leading-snug">{title} {description}</p>
      </div>
    </div>
  );
};


