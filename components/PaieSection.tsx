'use client';

import Image from 'next/image';
import { PlayCircle } from 'lucide-react';

export default function PaieSection() {
  return (
    <section id="information-paie" className="py-20 px-4 sm:px-6 lg:px-8 bg-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-center lg:text-left md:text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                CNXOne Paie<sup>&#174;</sup> : La solution intelligente de gestion de la paie
              </h2>
              <p className="text-lg md:text-xl lg:text-xl text-gray-600">
                Automatisez et sécurisez votre processus de paie avec une solution
                innovante qui garantit conformité, précision et efficacité. Transformez
                la gestion de votre paie en un véritable levier de performance RH.
              </p>
            </div>
            <div className="pt-4 flex justify-center md:justify-start">
              <a
                href="https://cnxlink.cnx4-0.com/one-paie"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-800 text-white px-8 py-3 rounded-full text-base font-medium hover:bg-red-700 transition-colors duration-300"
              >
                <PlayCircle className="inline w-5 h-5 mr-2" />
                Découvrir CNXOne Paie<sup>&#174;</sup>
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center p-6">
            <div className="relative w-full max-w-md mx-auto rounded-xl p-4">
              <Image
                src="/img/var_paie.png"
                alt="cnx-paie"
                width={400}
                height={300}
                className="w-full h-auto object-contain max-h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}