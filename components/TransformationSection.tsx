'use client';

import { useState } from 'react';
import { Search, Handshake, BarChart, ArrowUp, DoorOpen } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBullseye, 
  faNetworkWired, 
  faFilter, 
  faCalendarCheck, 
  faCheckCircle, 
  faClipboardList, 
  faChartLine, 
  faEnvelopeOpenText,
  faRoute,
  faUsers,
  faGraduationCap,
  faComments,
  faFileAlt,
  faPlaneDeparture,
  faHeartbeat,
  faAward,
  faStar,
  faHandshake,
  faBrain,
  faChalkboardTeacher,
  faRoad,
  faRandom,
  faUserShield,
  faClock,
  faExchange
} from '@fortawesome/free-solid-svg-icons';

export default function TransformationSection() {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      icon: Search,
      title: "1. Identification & Acquisition des talents",
      content: {
        title: "Identification & Acquisition des Talents",
        features: [
          {
            icon: faBullseye,
            title: "Définition du Besoin",
            description: "Spécification des profils alignés aux objectifs stratégiques."
          },
          {
            icon: faNetworkWired,
            title: "Sourcing Multi-canal",
            description: "Recherche multicanale pour maximiser diversité et qualité."
          },
          {
            icon: faFilter,
            title: "Présélection Intelligente",
            description: "IA pour filtrer, scorer et prioriser les candidatures."
          },
          {
            icon: faCalendarCheck,
            title: "Gestion des Entretiens",
            description: "Planification centralisée avec scoring et validation."
          },
          {
            icon: faCheckCircle,
            title: "Décision & Proposition",
            description: "Consolidation des retours et génération équitable des offres."
          },
          {
            icon: faClipboardList,
            title: "Journal d'activité",
            description: "Suivi des actions et étapes du recrutement en temps réel."
          },
          {
            icon: faChartLine,
            title: "Rapport de recrutement",
            description: "Génération de rapports sur la performance du processus."
          },
          {
            icon: faEnvelopeOpenText,
            title: "Modèles d'e-mails personnalisés",
            description: "Création et envoi d'e-mails adaptés à chaque étape du processus."
          }
        ],
        keywords: ["Recrutement", "Candidatures", "Processus", "Décision"]
      }
    },
    {
      id: 2,
      icon: Handshake,
      title: "2. Intégration & Socialisation",
      content: {
        title: "Intégration & Socialisation",
        features: [
          {
            icon: faClipboardList,
            title: "Préparation d'Arrivée",
            description: "Checklist automatisée et préparation du poste de travail."
          },
          {
            icon: faRoute,
            title: "Parcours d'Intégration",
            description: "Parcours personnalisé avec formation et découverte de l'entreprise."
          },
          {
            icon: faUsers,
            title: "Socialisation",
            description: "Mise en relation avec l'équipe et assignation d'un parrain/mentor."
          },
          {
            icon: faGraduationCap,
            title: "Formation Initiale",
            description: "Modules de formation obligatoires et spécifiques au poste."
          },
          {
            icon: faComments,
            title: "Suivi & Feedback",
            description: "Points d'étape réguliers et collecte de feedback sur l'intégration."
          },
          {
            icon: faFileAlt,
            title: "Fiche de poste / mission",
            description: "Clarification des attentes et rattachement au profil du collaborateur."
          }
        ],
        keywords: ["Parcours", "Socialisation", "Formation", "Fiche de poste"]
      }
    },
    {
      id: 3,
      icon: BarChart,
      title: "3. Engagement & Performance",
      content: {
        title: "Engagement & Performance",
        features: [
          {
            icon: faNetworkWired,
            title: "Force de Travail",
            description: "Analyse intelligente de la main-d'œuvre, prévision des besoins RH et allocation optimisée des ressources."
          },
          {
            icon: faPlaneDeparture,
            title: "Gestion des congés",
            description: "Suivi automatisé des absences, politiques flexibles, synchronisation des calendriers et archivage sécurisé."
          },
          {
            icon: faCalendarCheck,
            title: "Présences & Temps",
            description: "Suivi des horaires, heures supplémentaires, conformité légale et rapports en temps réel."
          },
          {
            icon: faBullseye,
            title: "Objectifs & KPIs",
            description: "Définition collaborative d'objectifs SMART/OKR alignés sur la stratégie de l'entreprise."
          },
          {
            icon: faChartLine,
            title: "Suivi de Performance",
            description: "Suivi en continu des résultats, détection des écarts et actions correctives avec alertes."
          },
          {
            icon: faHeartbeat,
            title: "Engagement",
            description: "Mesurez l'engagement via des sondages eNPS et agissez pour renforcer la motivation."
          },
          {
            icon: faAward,
            title: "Reconnaissance",
            description: "Valorisez les contributions par des programmes formels et informels de reconnaissance."
          },
          {
            icon: faStar,
            title: "Évaluations",
            description: "Auto-évaluation, évaluation par les pairs et feedback manager pour un suivi objectif."
          },
          {
            icon: faHandshake,
            title: "Dialogue Social",
            description: "Gestion des IRP, élections, indicateurs sociaux, enquêtes et reporting automatisé."
          }
        ],
        keywords: ["Performance", "Objectifs", "Engagement", "Présences", "Dialogue social"]
      }
    },
    {
      id: 4,
      icon: ArrowUp,
      title: "4. Développement des employés",
      content: {
        title: "Développement des employés",
        features: [
          {
            icon: faBrain,
            title: "Gestion des Compétences (GPEC)",
            description: "Cartographiez, évaluez et développez les compétences en lien avec les besoins stratégiques de l'entreprise."
          },
          {
            icon: faChalkboardTeacher,
            title: "Formation Continue",
            description: "Gérez un catalogue de formations en ligne ou en présentiel avec suivi du budget, des participants et des résultats."
          },
          {
            icon: faRoad,
            title: "Plans de Carrière",
            description: "Aidez les collaborateurs à visualiser leur évolution professionnelle et les étapes clés à franchir."
          },
          {
            icon: faRandom,
            title: "Mobilité Interne",
            description: "Mettez en place un processus transparent pour postuler aux opportunités internes et favoriser la fidélisation."
          },
          {
            icon: faUserShield,
            title: "Plan de Succession",
            description: "Identifiez et préparez les talents pour les postes clés, assurant la continuité des activités à long terme."
          }
        ],
        keywords: ["Compétences", "Formation", "Carrière", "Mobilité", "Succession"]
      }
    },
    {
      id: 5,
      icon: DoorOpen,
      title: "5. Transition & Départ",
      content: {
        title: "Transition & Départ",
        features: [
          {
            icon: faClock,
            title: "Préparation de Départ",
            description: "Checklist des actions à réaliser avant le départ d'un employé, comme la restitution du matériel ou la clôture des comptes et initialiser le et workflow de Départ."
          },
          {
            icon: faExchange,
            title: "Transfert de Connaissances",
            description: "Processus structuré pour documenter et transmettre les savoirs critiques à l'équipe ou au successeur."
          },
          {
            icon: faComments,
            title: "Entretien de Sortie",
            description: "Entretien confidentiel pour recueillir le feedback de l'employé sur son expérience et identifier des axes d'amélioration."
          },
          {
            icon: faFileAlt,
            title: "Formalités Administratives",
            description: "Gestion des documents légaux et administratifs liés au départ, comme le solde de tout compte ou le certificat de travail."
          },
          {
            icon: faNetworkWired,
            title: "Réseau Alumni",
            description: "Plateforme pour maintenir le contact avec les anciens employés, favorisant le networking et les opportunités futures."
          }
        ],
        keywords: ["Départ", "Connaissances", "Sortie", "Formalités", "Alumni"]
      }
    }
  ];

  const currentStep = steps.find(step => step.id === activeStep);

  return (
    <section id="parcours" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            La transformation RH en action
          </h2>
          <p className="text-lg md:text-xl lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez comment notre solution CNXOne HCM<sup>&#174;</sup> accompagne chaque
            étape du parcours employé, de l&apos;attraction des talents à leur développement et
            fidélisation.
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="grid grid-cols-2 gap-3 mb-8 text-sm w-full md:flex md:flex-row md:justify-center md:gap-4 md:mb-12 md:w-auto">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <button
                key={step.id}
                className={`step-button px-3 py-2 rounded-full transition-all text-xs w-full md:w-auto ${
                  activeStep === step.id ? 'active' : ''
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <IconComponent className="inline w-3 h-3 mr-1" />
                {step.title}
              </button>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="max-w-6xl mx-auto">
          {currentStep && (
            <div className="step-content active">
              <div className="bg-gray-50 rounded-2xl p-2 sm:p-4 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  {currentStep.content.title}
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 md:text-sm lg:text-sm">
                  <div className="space-y-6">
                    {currentStep.content.features.slice(0, Math.ceil(currentStep.content.features.length / 2)).map((feature, index) => (
                      <div key={index} className="flex flex-row items-center gap-3 w-full">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={feature.icon} className="text-green-800" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-6">
                    {currentStep.content.features.slice(Math.ceil(currentStep.content.features.length / 2)).map((feature, index) => (
                      <div key={index} className="flex flex-row items-center gap-3 w-full">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <FontAwesomeIcon icon={feature.icon} className="text-green-800" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}

                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">
                        Mots-clés CNXOne HCM :
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {currentStep.content.keywords.map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}