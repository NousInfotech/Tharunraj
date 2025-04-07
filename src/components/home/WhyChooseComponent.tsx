
import React from 'react';
import Image from 'next/image';
import { Feature } from './Feature';

interface FeatureProps {
    title: string;
    description: string;
  }
  
interface WhyChooseProps {
  title: string;
  features: FeatureProps[];
  imageSrc: string;
  imageAlt: string;
}

export const WhyChooseComponent: React.FC<WhyChooseProps> = ({
  title,
  features,
  imageSrc,
  imageAlt
}) => {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-[var(--primary-text)] font-[var(--font-family)]">
      <div className="container mx-auto">
        <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-8 py-2">{title}</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Features List */}
          <div className="w-full lg:w-3/6">
            {features.map((feature, index) => (
              <Feature
                key={index}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          {/* Image */}
          <div className="w-full lg:w-[50%] my-auto">
            <div className="bg-[var(--gray-bg)] rounded-md overflow-hidden h-[240px] sm:h-[300px] md:h-[350px] md:justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={500}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};