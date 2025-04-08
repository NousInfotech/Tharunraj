"use client";

import React, { useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import LaunchPadProps from '@/types/index'

import { Crimson_Text} from 'next/font/google';
import ButtonLink from '../common/ButtonLink';
import ContactPopup from '../common/ContactPopup';
// import { images } from '../../../public/assets';


const crimson = Crimson_Text({
    subsets: ['latin'],
    weight: ['700'],
  });
const LaunchPad: React.FC<LaunchPadProps> = ({
  title,
  description,
//   ctaText,
//   ctaLink,
  imageSrc,
  imageAlt,
  logo  = '../../../public/Images/logo.png',
}) => {
    // State to control popup visibility
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Functions to handle popup state
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <section className="w-full py-8 mt-[90px] px-4 md:px-8 bg-[#f9f9f9] font-[var(--font-family)]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* Image Container - Left side */}
          <div className="w-full md:max-w-[46%]">
            <div className="bg-gray-200 rounded-2xl overflow-hidden aspect-[4/3] w-full">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={400}
                height={300}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Content Container - Right side */}
          <div className="w-full md:w-7/12 flex flex-col justify-center">
          <h2
  className={`text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text ${crimson.className}`}
  style={{
    backgroundImage: 'linear-gradient(90deg, #894520 0%, #C87B45 100%)',
  }}
>
  {title}
</h2>

            
            <div className="mt-2 w-fit ">
            <ButtonLink
  href=""
  label="Apply Now"
  fontSize="text-lg"
  fontWeight="font-bold"
  onClick={openPopup}
/>

            </div>
            
        
          </div>
        </div>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed mt-14 mb-4">
              {description}
            </p>

           
      </div>
         {/* Contact Popup Component */}
         <ContactPopup 
        isOpen={isPopupOpen}
        onClose={closePopup}
        logo={logo}
      />
    </section>
  );
};

export default LaunchPad;
