"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close sidebar when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      const sidebar = document.getElementById('sidebar');
      const menuButton = document.getElementById('menu-button');
      
      if (isOpen && sidebar && !sidebar.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle smooth scrolling
  const handleScroll = (path: string) => {
    setIsOpen(false); // Close mobile menu if open
    
    // For anchor links, use smooth scrolling
    if (path.startsWith('#')) {
      const targetId = path.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Donation', path: '#donation' },
    { name: 'Mission', path: '#mission' },
    { name: 'Volunteer', path: '#volunteer' },
    { name: 'About us', path: '/about' },
    { name: 'News', path: '#news' },
  ];

  return (
    <>
      <nav className="relative px-2 md:px-11">
        <div className="flex flex-row justify-between items-center py-8 px-4 text-white">
          {/* NGO Title */}
          <div>
            <Link className="text-2xl font-bold cursor-pointer" href="/">
              Zunj Divyang Institute and Training Center
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-row gap-9">
            {navItems.map((item) => (
              item.path.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="hover:text-blue-200 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScroll(item.path);
                  }}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  className="hover:text-blue-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Donate Button (Desktop) */}
          <button 
            className="hidden md:block px-5 py-2 rounded-md border border-white hover:bg-white hover:text-blue-600 transition-colors"
            onClick={() => handleScroll('#donation')}
          >
            Donate Now
          </button>

          {/* Mobile Menu Button */}
          <button
            id="menu-button"
            className="md:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div
          id="sidebar"
          className={`fixed top-0 right-0 h-full w-64 bg-[#0D7C66] transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden z-50`}
        >
          <div className="flex flex-col h-full">
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="p-4 text-white hover:bg-[#1c5e51] text-left"
            >
              <X size={24} />
            </button>

            {/* Navigation Items */}
            <div className="flex flex-col">
              {navItems.map((item) => (
                item.path.startsWith('#') ? (
                  <a
                    key={item.name}
                    href={item.path}
                    className="px-6 py-4 text-white hover:bg-[#1e6154] transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(item.path);
                    }}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="px-6 py-4 text-white hover:bg-[#1e6154] transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Donate Button */}
            <div className="mt-auto p-6">
              <button 
                className="w-full px-5 py-2 rounded-md border border-white text-white hover:bg-white hover:text-[#0D7C66] transition-colors"
                onClick={() => handleScroll('#donation')}
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;