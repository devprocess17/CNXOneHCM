'use client';

import { User, UserCog, TrendingUp, CheckCircle } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: User,
      title: "Pour les employés",
      items: [
        "Autonomie accrue (self-service RH)",
        "Visibilité sur le parcours professionnel",
        "Accès facilité aux opportunités",
        "Processus simplifiés",
        "Développement personnalisé"
      ]
    },
    {
      icon: UserCog,
      title: "Pour les managers",
      items: [
        "Outils d'aide à la décision",
        "Suivi simplifié des équipes",
        "Tâches administratives allégées",
        "Meilleure gestion des talents",
        "Visibilité sur les compétences"
      ]
    },
    {
      icon: TrendingUp,
      title: "Pour la fonction RH",
      items: [
        "Centralisation des données RH",
        "Fiabilisation des processus",
        "Pilotage stratégique facilité",
        "Réduction des tâches à faible valeur",
        "Conformité réglementaire"
      ]
    }
  ];

  return (
    <section id="benefices" className="py-20 px-4 sm:px-6 lg:px-8 degrader">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-6 lg:mb-6 leading-tight sm:leading-normal lg:leading-normal">
            Les bénéfices clés de CNXOne HCM<sup>&#174;</sup>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Notre solution apporte une valeur ajoutée significative à chaque niveau de
            l&apos;organisation, de l&apos;employé aux dirigeants.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div
                key={index}
                className="text-center bg-white p-4 sm:p-6 rounded-xl shadow-lg card-hover"
              >
                <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="text-3xl cnx-cyan" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  {benefit.title}
                </h3>
                <div className="space-y-4">
                  {benefit.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-left">
                      <CheckCircle className="cnx-green mr-3 flex-shrink-0 w-5 h-5" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}