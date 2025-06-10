'use client';

import { useState } from 'react';
import { Calendar, Phone, Mail, Send } from 'lucide-react';

interface CTASectionProps {
  onDemoClick: () => void;
}

export default function CTASection({ onDemoClick }: CTASectionProps) {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:support@cnx4-0.com?subject=Contact depuis le site web&body=Mon email : ${email}`;
    window.location.href = mailtoLink;
    setEmail('');
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-cnx-green">
      <div className="max-w-4xl lg:text-center mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Prêt à transformer votre capital humain ?
        </h2>
        <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
          Le CNXOne HCM<sup>&#174;</sup> accompagne la transformation RH de votre
          entreprise, positionnant la fonction Capital Humain comme un véritable
          partenaire stratégique.
        </p>
        
        <div className="flex flex-col md:flex-row gap-8 justify-between items-center mt-12">
          <button
            onClick={onDemoClick}
            className="bg-white text-green-800 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            <Calendar className="inline w-5 h-5 mr-2" />
            Demander une démo
          </button>

          <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Contactez-nous
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <a
                href="tel:+241076402886"
                className="flex items-center text-gray-600 hover:text-green-800 transition-colors"
              >
                <Phone className="text-green-800 mr-2 w-4 h-4" />
                <span className="text-xs lg:text-base md:text-base">
                  +241 076402886
                </span>
              </a>
              <a
                href="mailto:support@cnx4-0.com"
                className="flex items-center text-gray-600 hover:text-green-600 transition-colors"
              >
                <Mail className="text-green-600 mr-2 w-4 h-4" />
                <span>Nous écrire</span>
              </a>
            </div>

            <form onSubmit={handleEmailSubmit} className="mt-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-200 text-sm"
                  placeholder="Votre email pour être recontacté"
                />
                <button
                  type="submit"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}