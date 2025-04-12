import React from 'react'
import LaunchPad from './LaunchPad'
import features from '@/JSON//features.json';
import { WhyChooseComponent } from './WhyChooseComponent';
import { SuccessPathBanner } from './SuccessPathBanner';
import { images } from '../../../public/assets';


export default function LandingPage() {
  return (
    <div>
    <LaunchPad 
    title="CA & CMA Foundation Launch Pad!"
    description="The CA & CMA Foundation is the first and most important step in your Commerce journey—where your path to success begins. The name Launch Pad reflects exactly that: it's where we build your strong foundation, focusing on essential concepts for your future studies and giving you an exam-oriented approach for quick results. At Tharun's Brainery, we ensure you not only understand the fundamentals but are also fully prepared for your exams. With our structured approach, we'll launch you toward success and prepare you to take on the challenges of the CA & CMA journey ahead!"
    ctaText="Apply Now"
    ctaLink="/apply"
    imageSrc={images.png.img1.src}
    imageAlt="CA Foundation Course"
    logo=''
  />
  <WhyChooseComponent
  title="Why Choose CA & CMA Foundation Launch Pad?"
  features={features}
  imageSrc={images.png.img3.src}
  imageAlt="CA Foundation Students"
/>
<SuccessPathBanner
      title="Your Path to Success Starts Here"
      description="Don't overthink about the Foundation; trust us to guide you through it. With our exam-focused approach and expert support, you're ready to conquer the CA Foundation exams and move toward a successful career."
      ctaText="Join now, and let's make your CA dreams a reality!"
      ctaLink="/join"
      backgroundColor="#F4D7C6"
      textColor="#8B4513"
      accentColor="#8B4513"
    />
</div>
  )
}
