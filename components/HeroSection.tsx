'use client';

import Image from 'next/image';
import { Calendar } from 'lucide-react';

interface HeroSectionProps {
  onDemoClick: () => void;
}

export default function HeroSection({ onDemoClick }: HeroSectionProps) {
  return (
    <section className="hero-gradient py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          <div className="lg:text-left md:text-center text-center animate-fade-in order-last md:order-first">
            <h1 className="text-4xl sm:text-xl md:text-6xl font-bold text-gray-900 mb-6">
              Oubliez la gestion RH d&apos;hier.
            </h1>
            <p className="text-xl sm:text-lg md:text-xl text-gray-700 mb-8 font-medium">
              Avec{' '}
              <span className="font-semibold text-green-800">
                CNXOne HCM<sup>&#174;</sup>
              </span>
              , la solution de gestion du{' '}
              <span className="font-semibold text-green-800">Capital Humain</span>
              , 100 % gabonaise, conçue pour transformer votre organisation en un
              modèle de performance et d&apos;agilité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
              <button
                onClick={onDemoClick}
                className="border-2 border-green-700 gradient-text w-fit px-6 py-3 rounded-full text-base font-medium hover:bg-green-50 transition-colors mx-auto mt-2 mb-6 sm:w-auto sm:px-8 sm:py-4 sm:text-lg sm:mx-0 sm:mt-0 sm:mb-0"
              >
                <Calendar className="inline w-4 h-4 mr-2" />
                Demander une démo
              </button>
            </div>
          </div>
          
          <div className="relative lg:top-14 flex justify-center md:justify-end">
            {/* Decorative shapes */}
            <div
              className="decorative-shape shape-circle"
              style={{ width: '150px', height: '150px', top: '-50px', right: '-10px' }}
            ></div>
            <div
              className="decorative-shape shape-square"
              style={{ width: '100px', height: '100px', bottom: '20px', left: '-10px' }}
            ></div>
            <div
              className="decorative-shape shape-line"
              style={{
                width: '150px',
                top: '70%',
                right: '10%',
                transform: 'rotate(45deg)',
              }}
            ></div>
            
            {/* Image container */}
            <div className="hero-image-container">
              <Image
                src="/img/gpec_mocup-remove.png"
                alt="CNXOne HCM Interface"
                width={500}
                height={400}
                className="mx-auto w-full max-w-xs sm:max-w-md md:max-w-full h-auto rounded-lg animate-float"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}