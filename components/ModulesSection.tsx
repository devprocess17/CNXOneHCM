'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  Shield, 
  Lock, 
  Link, 
  Scale, 
  IdCard, 
  FileText, 
  Settings 
} from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheckCircle,
  faStar,
  faRocket,
  faLightbulb,
  faChartLine,
  faShieldAlt,
  faLock,
  faLink,
  faScaleBalanced,
  faIdCard,
  faFileAlt,
  faCog,
  faUsers,
  faCheck,
  faArrowRight,
  faHandshake,
  faAward,
  faThumbsUp,
  faChartBar,
  faUserShield,
  faFileContract,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';

export default function ModulesSection() {
  const [activeModule, setActiveModule] = useState('analyses');

  const modules = [
    {
      id: 'analyses',
      icon: BarChart3,
      title: 'Analyses décisionnelles',
      description: 'Tableaux de bord dynamiques et rapports intelligents permettant aux décideurs RH d\'accéder aux insights stratégiques pour optimiser la gestion des talents et la performance organisationnelle.',
      features: [
        'Tableaux de bord temps réel',
        'Indicateurs RH personnalisables',
        'Rapports automatisés',
        'Analyse prédictive'
      ],
      benefits: [
        'Prise de décision éclairée',
        'Optimisation des ressources',
        'Anticipation des tendances',
        'ROI mesurable'
      ]
    },
    {
      id: 'risques',
      icon: Shield,
      title: 'Gestion des risques',
      description: 'Identification proactive, évaluation et atténuation des risques RH avec des alertes automatiques et des plans d\'action pour assurer la continuité des opérations et la conformité.',
      features: [
        'Cartographie des risques',
        'Alertes automatiques',
        'Plans d\'action préventifs',
        'Suivi des incidents'
      ],
      benefits: [
        'Réduction des incidents',
        'Conformité assurée',
        'Continuité d\'activité',
        'Protection juridique'
      ]
    },
    {
      id: 'securite',
      icon: Lock,
      title: 'Sécurité & fiabilité système',
      description: 'Protection robuste des données sensibles des employés grâce à un chiffrement avancé, des contrôles d\'accès granulaires et des audits de sécurité réguliers conformes aux normes internationales.',
      features: [
        'Chiffrement des données',
        'Contrôles d\'accès granulaires',
        'Audit de sécurité',
        'Conformité RGPD',
        'Performance',
        'Fiabilité'
      ],
      benefits: [
        'Protection des données',
        'Confiance des employés',
        'Conformité réglementaire',
        'Réputation préservée',
        'Productivité accrue',
        'Disponibilité continue'
      ]
    },
    {
      id: 'interfacage',
      icon: Link,
      title: 'Interfaçage systèmes',
      description: 'Connexions fluides avec vos systèmes existants (paie, ERP, outils collaboratifs) grâce à des API robustes et des connecteurs prédéfinis, éliminant les silos d\'information.',
      features: [
        'API REST robustes',
        'Connecteurs prédéfinis',
        'Synchronisation temps réel',
        'Mapping de données',
        'Architecture modulaire'
      ],
      benefits: [
        'Élimination des silos',
        'Données unifiées',
        'Efficacité opérationnelle',
        'ROI optimisé',
        'Évolutivité garantie'
      ]
    },
    {
      id: 'conformite',
      icon: Scale,
      title: 'Conformité légale',
      description: 'Respect automatisé des obligations légales et réglementaires en matière RH avec mises à jour régulières pour s\'adapter aux évolutions législatives et minimiser les risques juridiques.',
      features: [
        'Veille réglementaire',
        'Mises à jour programmable',
        'Contrôles de conformité',
        'Documentation légale'
      ],
      benefits: [
        'Risques juridiques minimisés',
        'Conformité garantie',
        'Processus sécurisés',
        'Tranquillité d\'esprit'
      ]
    },
    {
      id: 'infos_employes',
      icon: IdCard,
      title: 'Gestion Informations employés',
      description: 'Centralisez et sécurisez toutes les données de vos collaborateurs, des informations personnelles aux documents contractuels, pour une gestion administrative simplifiée et une meilleure vision d\'ensemble.',
      features: [
        'Profil numérique complet des employés',
        'Organigramme fonctionnel et interactif',
        'Portail employé personnalisable',
        'Gestion fine des profils et autorisations'
      ],
      benefits: [
        'Données centralisées, sécurisées et facilement accessibles',
        'Vision claire et à jour de la structure organisationnelle',
        'Autonomie et expérience employé améliorées',
        'Conformité et confidentialité des données renforcées'
      ]
    },
    {
      id: 'documents',
      icon: FileText,
      title: 'Gestion des documents',
      description: 'Simplifiez la gestion de tous vos documents RH, des contrats aux attestations, grâce à une plateforme centralisée, sécurisée et facile d\'accès, avec des fonctionnalités d\'archivage, de recherche et de partage avancées.',
      features: [
        'Centralisation des documents (réglementaires, entreprise, employés)',
        'Modèles de documents personnalisables et génération facile',
        'Suivi des dates d\'expiration avec notifications',
        'Signature électronique intégrée (E-signature)'
      ],
      benefits: [
        'Accès rapide, sécurisé et centralisé à tous les documents',
        'Optimisation des processus administratifs et gain de temps',
        'Conformité assurée et réduction des risques liés aux échéances',
        'Dématérialisation et réduction de l\'usage du papier'
      ]
    },
    {
      id: 'exigences_non_fonc',
      icon: Settings,
      title: 'Support',
      description: 'Bénéficiez d\'un accompagnement personnalisé et d\'un support réactif pour optimiser l\'utilisation de votre solution RH. Notre équipe dédiée vous assure une transition en douceur, une formation complète et un suivi continu pour maximiser votre satisfaction et votre réussite.',
      features: [
        'Mises à jour programmables',
        'Interface intuitive et facilité d\'utilisation',
        'Service de migration des données sécurisé',
        'Support réactif 24/7'
      ],
      benefits: [
        'Maintien des performances optimales et des dernières fonctionnalités',
        'Réduction du temps de formation et adoption rapide par les équipes',
        'Transition fluide sans perte de données',
        'Résolution rapide des problèmes et assistance continue'
      ]
    }
  ];

  const currentModule = modules.find(module => module.id === activeModule);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Modules transversaux CNXOne HCM<sup>&#174;</sup>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre solution complète s&apos;appuie sur des modules transversaux qui assurent
            la cohérence et l&apos;efficacité de l&apos;ensemble de votre écosystème RH.
          </p>
        </div>

        <div className="relative">
          {/* Central Circle */}
          <div className="flex justify-center mb-8 sm:mb-16">
            <div className="central-circle w-36 h-36 sm:w-48 sm:h-48 rounded-full flex flex-col items-center justify-center text-white shadow-2xl text-center p-2">
              <i className="fas fa-users text-4xl mb-2"></i>
              <h3 className="text-xl font-bold">CNXOne HCM<sup>&#174;</sup></h3>
            </div>
          </div>

          {/* Surrounding Modules */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-6 px-0">
            {modules.map((module, index) => {
              const IconComponent = module.icon;
              const isActive = activeModule === module.id;
              return (
                <div
                  key={module.id}
                  className={`module-card cursor-pointer w-full min-h-[120px] rounded-xl flex flex-col items-center justify-center shadow-lg p-4 hover:shadow-xl transition-all border
                    ${isActive ? 'bg-cnx-green text-white border-cnx-green' : 'bg-white text-cnx-green border-gray-200'}`}
                  onClick={() => setActiveModule(module.id)}
                >
                  <IconComponent className={`mb-2 text-2xl sm:text-3xl ${isActive ? 'text-white' : 'text-cnx-green'}`} />
                  <h4 className={`text-center text-sm sm:text-base font-semibold leading-tight ${isActive ? 'text-white' : 'text-cnx-green'}`}>
                    {module.title}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Module Descriptions */}
          <div className="max-w-4xl lg:max-w-full md:w-4xl mx-auto">
            {currentModule && (
              <div className="module-description active bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold cnx-green mb-4">
                  {currentModule.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {currentModule.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 cnx-green flex items-center">
                      <FontAwesomeIcon icon={faRocket} className="mr-2" />
                      Fonctionnalités clés:
                    </h4>
                    <ul className="space-y-3">
                      {currentModule.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="bg-cnx-green text-white rounded-full flex items-center justify-center w-6 h-6 mr-3 shadow-md">
                            <FontAwesomeIcon icon={faCheck} className="text-xs" />
                          </span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 cnx-green flex items-center">
                      <FontAwesomeIcon icon={faStar} className="mr-2" />
                      Bénéfices:
                    </h4>
                    <ul className="space-y-3">
                      {currentModule.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <span className="bg-cnx-green text-white rounded-full flex items-center justify-center w-6 h-6 mr-3 shadow-md">
                            <FontAwesomeIcon icon={faCheckCircle} className="text-xs" />
                          </span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}