import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { images } from '../../../public/assets';
import { Crimson_Text} from 'next/font/google';


const crimson = Crimson_Text({
    subsets: ['latin'],
    weight: ['700'],
  });

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  logo: string;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/[^0-9]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      // API call would go here
      alert('Form submitted successfully!');
      handleClose();
    }
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  backdrop-blur-xl">
      <div 
        className={`relative bg-[var(--peach-bg)] max-w-lg w-full mx-4 rounded-lg overflow-hidden shadow-xl transform 
          ${isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'} 
          transition-all duration-300 ease-in-out`}
      >
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-[var(--primary-bg)] hover:text-[#6e3000] transition-colors"
          aria-label="Close popup"
        >
          <IoClose size={24} />
        </button>
        
        {/* Logo and header */}
        <div className="flex flex-col items-center pt-6 pb-4 px-6">
          <div className="relative w-[190px] h-[90px] mb-5">
            <Image 
              src={images.png.logo} 
              alt="Tharun's Brainery" 
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className={`text-2xl text-[var(--primary-bg)] font-semibold text-center ${crimson.className}`}>
  Welcome to Tharun&apos;s Brainery
</h2>

        </div>
        
        {/* Contact form */}
        <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4">
          {/* Full Name and Email side by side */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="fullName" className="block  text-gray-700 text-base mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Your Name"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md bg-[#fbece2] border-[var(--primary-bg)]/50 focus:border-[var(--primary-bg)] focus:ring focus:ring-[var(--primary-bg)] focus:ring-opacity-30 outline-none ${
                  errors.fullName ? 'border-red-500' : ''
                }`}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
              )}
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <label htmlFor="email" className="block text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-2 border rounded-md bg-[#fbece2] border-[var(--primary-bg)]/50 focus:border-[var(--primary-bg)] focus:ring focus:ring-[var(--primary-bg)] focus:ring-opacity-30 outline-none ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className={`w-full p-2 border rounded-md bg-[#fbece2] border-[var(--primary-bg)]/50 focus:border-[var(--primary-bg)] focus:ring focus:ring-[var(--primary-bg)] focus:ring-opacity-30 outline-none ${
                errors.phoneNumber ? 'border-red-500' : ''
              }`}
            />
            {errors.phoneNumber && (
              <p className="mt-1 text-sm text-red-500">{errors.phoneNumber}</p>
            )}
          </div>
          
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write Message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className={`w-full p-2 border rounded-md bg-[#fbece2] border-[var(--primary-bg)]/50 focus:border-[var(--primary-bg)] focus:ring focus:ring-[var(--primary-bg)] focus:ring-opacity-30 outline-none ${
                errors.message ? 'border-red-500' : ''
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          
          <button
  type="submit"
  className="w-full py-2 px-4 text-white font-medium rounded-md hover:bg-[#6e3000] focus:outline-none focus:ring-2 focus:ring-[var(--primary-bg)] focus:ring-opacity-50 transition-colors duration-200"
  style={{ backgroundImage: "var(--primary-gradient)" }}
>
  Apply Now
</button>

        </form>
      </div>
    </div>
  );
};

export default ContactPopup;