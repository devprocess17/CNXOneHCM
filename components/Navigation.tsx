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
      className={`fixed w-full transition-all duration-300 top-0 z-50 px-4 lg:px-0 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="https://cnxlink.cnx4-0.com">
              <Image 
                className="w-32" 
                src="/img/logo_1.png" 
                alt="cnx-logo" 
                width={128}
                height={64}
              />
            </a>
          </div>
          
          <div className="hidden lg:block md:block text-xs">
            <div className="ml-10 flex items-baseline space-x-4">
              <button
                onClick={() => scrollToSection('solution')}
                className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Notre solution CNXOne HCM<sup>&#174;</sup>
              </button>
              <button
                onClick={() => scrollToSection('parcours')}
                className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Le parcours employé
              </button>
              <button
                onClick={() => scrollToSection('benefices')}
                className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Bénéfices clés
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contactez-nous
              </button>
              <button
                onClick={onDemoClick}
                className="bg-green-800 text-white px-6 py-2 rounded-full text-sm font-medium"
              >
                <FontAwesomeIcon icon={faCalendar} className="mr-2" />Demander une démo
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-40 z-50">
              <div className="absolute top-0 right-0 w-3/4 max-w-xs bg-white h-full shadow-lg p-6 flex flex-col space-y-4">
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="self-end mb-4 text-gray-700 focus:outline-none"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => scrollToSection('solution')}
                  className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium text-left"
                >
                  Notre solution CNXOne HCM<sup>&#174;</sup>
                </button>
                <button
                  onClick={() => scrollToSection('parcours')}
                  className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium text-left"
                >
                  Le parcours employé
                </button>
                <button
                  onClick={() => scrollToSection('benefices')}
                  className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium text-left"
                >
                  Bénéfices clés
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-700 hover:text-green-800 px-3 py-2 rounded-md text-sm font-medium text-left"
                >
                  Contactez-nous
                </button>
                <button
                  onClick={onDemoClick}
                  className="bg-green-700 text-white px-6 py-2 text-sm rounded-full font-medium"
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