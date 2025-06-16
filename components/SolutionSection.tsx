'use client';

import Image from 'next/image';
import { Cloud, Rocket, Lock } from 'lucide-react';

export default function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:items-center">
          {/* Image à gauche */}
          <div className="relative mb-8 md:mb-0 hidden md:hidden lg:flex lg:justify-center">
            <div className="relative z-10">
              <Image
                src="/images/groupe_mockup.png"
                alt="Organisation mockup"
                width={600}
                height={400}
                className="w-full lg:mt-40 rounded-lg mx-auto animate-float"
                style={{ animation: 'float 6s ease-in-out infinite' }}
              />
            </div>
          </div>

          {/* Contenu à droite */}
          <div className="space-y-8 text-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">
                CNXOne HCM<sup>&#174;</sup> est une solution RH de nouvelle génération
              </h2>
              <p className="text-lg lg:text-xl text-gray-600 text-center">
                Modulaire, intelligente et 100 % cloud, CNXOne HCM conjugue innovation
                technologique, sécurité et conformité réglementaire pour unifier tous vos
                processus RH, façonner une expérience collaborateur cohérente et faire du
                capital humain un levier d&apos;excellence organisationnelle
              </p>
            </div>

            {/* Solutions de gestion du capital humain */}
            <div className="grid gap-6">
              {/* Modulaire, intelligente et 100 % cloud */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover flex flex-row items-center gap-4 w-full">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Cloud className="text-xl cnx-green" />
                </div>
                <div className="text-left w-full">
                  <h3 className="text-lg font-semibold mb-1 text-left md:text-left">
                    Modulaire, intelligente et 100 % cloud
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Automatisez vos processus RH grâce à l&apos;IA et gagnez en efficacité
                    sur les tâches administratives dans une architecture modulaire,
                    évolutive et entièrement cloud
                  </p>
                </div>
              </div>

              {/* Innovation technologique */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover flex flex-row items-center gap-4 w-full">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-xl cnx-green" />
                </div>
                <div className="text-left w-full">
                  <h3 className="text-lg font-semibold mb-1 text-left md:text-left">
                    Innovation technologique
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Exploitez tout le potentiel des technologies RH les plus avancées,
                    via une interface intuitive et fluide.
                  </p>
                </div>
              </div>

              {/* Conformité et sécurité des données */}
              <div className="bg-white p-6 rounded-xl shadow-lg card-hover flex flex-row items-center gap-4 w-full">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Lock className="text-xl cnx-green" />
                </div>
                <div className="text-left w-full">
                  <h3 className="text-lg font-semibold mb-1 text-left md:text-left">
                    Conformité et sécurité des données
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Assurez la conformité aux réglementations gabonaises tout en
                    garantissant une protection optimale de vos données sensibles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}