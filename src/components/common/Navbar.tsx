"use client";

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { images } from '../../../public/assets';
import ButtonLink from './ButtonLink';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  const linkClasses = (href: string) => `
    font-medium relative transition-colors duration-200 
    ${pathname === href 
      ? 'text-[var(--primary-text)] after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-[var(--primary-text)]' 
      : 'text-black hover:text-[var(--primary-text)]'
    }
  `;

  const handleDropdownHover = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const booksItems = [
    { href: "/books/category1", label: "Category 1" },
    { href: "/books/category2", label: "Category 2" },
    { href: "/books/category3", label: "Category 3" },
  ];

  const videoLecturesItems = [
    { href: "/lectures/advanced", label: "Advanced Lectures" },
    { href: "/lectures/beginner", label: "Beginner Lectures" },
    { href: "/lectures/specialized", label: "Specialized Topics" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 bg-[var(--background)] py-3 px-4 md:px-8 font-[var(--font-family)] text-[var(--foreground)] text-[16px] transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src={images.png.logo}
            alt="Tharun's Brainery Logo" 
            width={135}
            height={63}
            className="mr-2"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>

          {/* Books Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => handleDropdownHover('books')}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="flex items-center space-x-1 cursor-pointer group-hover:text-[var(--primary-text)] text-black font-medium">
              <span>Books</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'books' ? 'rotate-180 text-[var(--primary-text)]' : 'text-black group-hover:text-[var(--primary-text)]'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {activeDropdown === 'books' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 transform transition-all duration-200 opacity-100 scale-100">
                {booksItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--primary-text)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Video Lectures Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => handleDropdownHover('lectures')}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="flex items-center space-x-1 cursor-pointer group-hover:text-[var(--primary-text)] text-black font-medium">
              <span>Video Lectures</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'lectures' ? 'rotate-180 text-[var(--primary-text)]' : 'text-black group-hover:text-[var(--primary-text)]'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {activeDropdown === 'lectures' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 transform transition-all duration-200 opacity-100 scale-100">
                {videoLecturesItems.map((item) => (
                  <Link 
                    key={item.href} 
                    href={item.href} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[var(--primary-text)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/combos" className={linkClasses("/combos")}>
            Combos
          </Link>
        </div>

        {/* Contact & Profile */}
        <div className="flex items-center">
          <Link href="/contact" className="mr-4">
            <button className="bg-[var(--primary-bg)] hover:bg-amber-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200">
              Contact Us
            </button>
          </Link>
          <div className="hidden sm:block">
            <Image 
              src={images.png.profile}
              alt="Profile" 
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          
          {/* Hamburger Menu Button */}
          <button 
            className="ml-4 md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span 
              className={`w-full h-0.5 bg-black transition-all transform duration-300 ease-in-out ${
                mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span 
              className={`w-full h-0.5 bg-black transition-all duration-200 ease-in-out ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            ></span>
            <span 
              className={`w-full h-0.5 bg-black transition-all transform duration-300 ease-in-out ${
                mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      ></div>

      {/* Mobile Menu Panel */}
      <div 
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="text-black hover:text-[var(--primary-text)]"
            aria-label="Close mobile menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="px-4 py-2">
          <Link 
            href="/" 
            className={`block py-3 ${pathname === "/" ? 'text-[var(--primary-text)]' : 'text-black'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          
          {/* Mobile Books Dropdown */}
          <div className="py-3">
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setActiveDropdown(activeDropdown === 'mobile-books' ? null : 'mobile-books')}
            >
              <span className={activeDropdown === 'mobile-books' ? 'text-[var(--primary-text)]' : 'text-black'}>Books</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === 'mobile-books' ? 'rotate-180 text-[var(--primary-text)]' : 'text-black'
                }`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div 
              className={`pl-4 overflow-hidden transition-all duration-300 ${
                activeDropdown === 'mobile-books' ? 'max-h-40 mt-2' : 'max-h-0'
              }`}
            >
              {booksItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="block py-2 text-sm text-gray-700 hover:text-[var(--primary-text)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile Video Lectures Dropdown */}
          <div className="py-3">
            <div 
              className="flex items-center justify-between cursor-pointer "
              onClick={() => setActiveDropdown(activeDropdown === 'mobile-lectures' ? null : 'mobile-lectures')}
            >
              <span className={activeDropdown === 'mobile-lectures' ? 'text-[var(--primary-text)]' : 'text-black'}>Video Lectures</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 transition-transform duration-300 ${
                  activeDropdown === 'mobile-lectures' ? 'rotate-180 text-[var(--primary-text)]' : 'text-black'
                }`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            <div 
              className={`pl-4 overflow-hidden transition-all duration-300 ${
                activeDropdown === 'mobile-lectures' ? 'max-h-40 mt-2' : 'max-h-0'
              }`}
            >
              {videoLecturesItems.map((item) => (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className="block py-2 text-sm text-gray-700 hover:text-[var(--primary-text)]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            href="/combos" 
            className={`block py-3 ${pathname === "/combos" ? 'text-[var(--primary-text)]' : 'text-black'}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Combos
          </Link>
          
          <div className="mt-4">
          <ButtonLink
  href="/contact"
  label="Contact Us"
  onClick={() => setMobileMenuOpen(false)}
  fontSize="text-base"
  fontWeight="font-normal"
/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;