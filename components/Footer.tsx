'use client';

import Image from 'next/image';
import { MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center md:items-start">
            <a href="https://cnxlink.cnx4-0.com" className="inline-block mb-4">
              <Image 
                src="/img/logo_1.png" 
                className="w-32" 
                alt="CNX 4.0 Logo" 
                width={128}
                height={64}
              />
            </a>
            <div className="space-y-3">
              <p className="text-gray-400">
                Votre spécialiste en architecture d&apos;affaires.
              </p>
              <p className="text-gray-400">
                CNX 4.0 accompagne les entreprises dans leur transformation pour
                atteindre l&apos;excellence opérationnelle.
              </p>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:pl-8 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">Solutions</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition-colors flex items-center justify-center md:justify-start"
                >
                  <span>CNXOne HCM<sup>&#174;</sup></span>
                </a>
              </li>
              <li>
                <a
                  href="https://cnxlink.cnx4-0.com/one-paie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors flex items-center justify-center md:justify-start"
                >
                  <span>CNXOne Paie<sup>&#174;</sup></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Localisation */}
          <div className="lg:pl-4 flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">Localisation</h4>
            <div className="text-gray-400">
              <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-3">
                <MapPin className="mt-1 w-5 h-5" />
                <p className="leading-relaxed text-center text-base md:text-left">
                  Ancienne Sobraga, Immeuble La Vénézienne, Rez de Chaussée, Porte
                  Gauche, Libreville, GA
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de séparation */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Copyright et liens légaux */}
        <div className="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
          <p className="text-gray-400 text-sm text-center md:text-left">
            &copy; 2025 CNX 4.0. Tous droits réservés.
          </p>
          <p className="text-gray-400 text-sm ml text-center md:text-left">
            CNXOne HCM<sup>&#174;</sup> by Eden Technology.
          </p>
          <div className="flex flex-col items-center space-y-3 md:flex-row md:space-y-0 md:space-x-6">
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-green-400 transition-colors"
            >
              Mentions Légales
            </a>
            <a
              href="#"
              className="text-sm text-gray-400 hover:text-green-400 transition-colors"
            >
              Politique de Confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}