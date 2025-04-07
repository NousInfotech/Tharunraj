// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTelegram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { images } from '../../../public/assets';

const Footer: React.FC = () => {
  // Menu items data
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Books & Video Lectures', href: '/books-lectures' },
    { label: 'MCQ Test', href: '/mcq-test' },
    { label: 'F2F Classes', href: '/f2f-classes' },
    { label: 'Downloads', href: '/downloads' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact Us', href: '/contact' }
  ];

  // Social media links data
  const socialLinks = [
    { icon: FaFacebook, href: '#', ariaLabel: 'Facebook' },
    { icon: FaInstagram, href: '#', ariaLabel: 'Instagram' },
    { icon: FaTelegram, href: '#', ariaLabel: 'Telegram' },
    { icon: FaYoutube, href: '#', ariaLabel: 'YouTube' },
    { icon: FaWhatsapp, href: '#', ariaLabel: 'WhatsApp' }
  ];

  // Contact info data
  const contactInfo = [
    { 
      icon: FaWhatsapp, 
      content: <p className="hover:text-[var(--peach-bg)]">9150 938 938 / 9150 939 939</p> 
    },
    { 
      icon: MdEmail, 
      content: <p className="hover:text-[var(--peach-bg)]">admin@tharunraj.com</p> 
    },
    { 
      icon: MdLocationOn, 
      content: (
        <>
          <p>No 16/50, Veerabadran Street,</p>
          <p>Nungambakkam, Chennai - 600034.</p>
          <p>(10 mins walk from ICA!)</p>
        </>
      )
    }
  ];

  // Policy links data
  const policyLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Cancellation/Refund Policy', href: '/refund-policy' },
    { label: 'Shipping Policy', href: '/shipping' },
    { label: 'About Us', href: '/about' }
  ];

  // Common classes
  const linkClasses = "hover:text-[var(--peach-bg)] underline text-[var(--light-bg)]";
  const iconBoxClasses = "bg-[var(--primary-text)] hover:bg-amber-600 p-2 rounded-full";
  const headingClasses = "text-xl mb-4 text-[var(--primary-text)] font-[var(--font-weight-bold)]";

  return (
    <footer className="bg-[var(--primary-bg)] rounded-2xl md:mx-8 mb-10 text-[var(--light-bg)] py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Left Section - Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src={images.png.logof} 
                alt="Tharun's Brainery Logo" 
                width={160} 
                height={63} 
                className="object-cover" 
              />
            </div>
            <p className="text-[var(--font-size-sm)] font-medium">Coaching For CA / CMA</p>
            
            <p className="text-[var(--font-size-sm)] mt-4">
              We support professional students by providing HD Quality Course videos of 
              the best faculties in the subject & Handcrafted Exam related books 
              authored by those faculties at all levels, and also arrange mock tests for them.
            </p>
            
            <p className="text-[var(--font-size-sm)] mt-4">
              Our strength is to combine traditional style of education with latest 
              technology to suit the needs of all the students located in Urban or rural 
              areas of Southern India. We have associated with leading faculties of India 
              to deliver exceptional services to students.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-3 mt-4">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.href} 
                  className={iconBoxClasses}
                  aria-label={social.ariaLabel}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Middle Section - Menus */}
          <div className="lg:mx-auto">
            <h2 className={headingClasses}>Menus</h2>
            <ul className="space-y-3">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className={linkClasses}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Right Section - Contact Info */}
          <div className="space-y-4">
            <h2 className={headingClasses}>Contact Us</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={iconBoxClasses}>
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>{info.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom Links */}
        <div className="border-t border-amber-700 mt-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-20 text-[var(--font-size-sm)]">
            {policyLinks.map((policy, index) => (
              <Link key={index} href={policy.href} className={linkClasses}>
                {policy.label}
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-6 text-[var(--font-size-sm)]">
          &copy; {new Date().getFullYear()} Tharun&apos;s Brainery. All Rights Reserved.
</div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;