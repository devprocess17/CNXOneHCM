'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

interface NavigationProps {
  onDemoClick: () => void;
}

export default function Navigation({ onDemoClick }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full transition-all duration-300 top-0 z-50 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1920px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="https://cnxlink.cnx4-0.com" className="block">
              <Image 
                className="w-24 sm:w-28 md:w-32 lg:w-36 transition-all duration-300" 
                src="/img/logo_1.png" 
                alt="cnx-logo" 
                width={144}
                height={72}
                priority
              />
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2 lg:space-x-4">
              <button
                onClick={() => scrollToSection('solution')}
                className="text-gray-700 hover:text-green-800 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors"
              >
                Notre solution CNXOne HCM<sup>&#174;</sup>
              </button>
              <button
                onClick={() => scrollToSection('parcours')}
                className="text-gray-700 hover:text-green-800 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors"
              >
                Le parcours employé
              </button>
              <button
                onClick={() => scrollToSection('benefices')}
                className="text-gray-700 hover:text-green-800 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors"
              >
                Bénéfices clés
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-green-800 px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors"
              >
                Contactez-nous
              </button>
              <button
                onClick={onDemoClick}
                className="bg-green-800 text-white px-4 lg:px-6 py-2 rounded-full text-xs lg:text-sm font-medium hover:bg-green-700 transition-colors"
              >
                <FontAwesomeIcon icon={faCalendar} className="mr-2" />Demander une démo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 focus:outline-none p-2"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-50">
              <div className="absolute top-0 right-0 w-[85%] max-w-[320px] sm:max-w-[360px] bg-white h-full shadow-lg p-4 sm:p-6 flex flex-col space-y-3 sm:space-y-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="self-end mb-2 sm:mb-4 text-gray-700 focus:outline-none p-2"
                  aria-label="Fermer le menu"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                
                <button
                  onClick={() => scrollToSection('solution')}
                  className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium text-left w-full"
                >
                  Notre solution CNXOne HCM<sup>&#174;</sup>
                </button>
                <button
                  onClick={() => scrollToSection('parcours')}
                  className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium text-left w-full"
                >
                  Le parcours employé
                </button>
                <button
                  onClick={() => scrollToSection('benefices')}
                  className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium text-left w-full"
                >
                  Bénéfices clés
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium text-left w-full"
                >
                  Contactez-nous
                </button>
                <button
                  onClick={onDemoClick}
                  className="bg-green-700 text-white px-6 py-2 text-sm rounded-full font-medium w-full hover:bg-green-600 transition-colors"
                >
                  <FontAwesomeIcon icon={faCalendar} className="mr-2" />Demander une démo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}