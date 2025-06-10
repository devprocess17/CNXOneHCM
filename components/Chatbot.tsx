'use client';

import { useState } from 'react';
import { MessageCircle, X, Phone, Send } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showInterface, setShowInterface] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'Bonjour ! Je suis votre assistant virtuel CNXOne HCM®. 👋<br />Comment puis-je vous aider aujourd\'hui ?'
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const keywords = {
    greetings: {
      patterns: ['bonjour', 'salut', 'bonsoir', 'hello', 'hey'],
      responses: [
        'Bonjour ! Comment puis-je vous aider aujourd\'hui ?',
        'Salut ! Ravi de vous accueillir. Que puis-je faire pour vous ?',
        'Bonjour ! Je suis là pour répondre à vos questions sur CNXOne HCM.'
      ]
    },
    farewell: {
      patterns: ['au revoir', 'bye', 'à bientôt', 'merci', 'bonne journée'],
      responses: [
        'Au revoir ! N\'hésitez pas à revenir si vous avez d\'autres questions.',
        'Merci de votre visite ! Passez une excellente journée.',
        'À bientôt ! Je reste disponible pour toute autre question.'
      ]
    },
    product: {
      patterns: ['fonctionnalités', 'features', 'produit', 'solution', 'logiciel', 'outil', 'système', 'plateforme', 'application', 'app'],
      responses: [
        'CNXOne HCM est une solution Cloud de gestion du Capital Humain qui comprend :\n• Gestion des talents\n• Évaluation des performances\n• Formation et développement\n• Gestion administrative\n• Analyses et reporting\n\nQuel aspect vous intéresse le plus ?',
        'Notre solution s\'adapte à tous les secteurs d\'activité. Voulez-vous en savoir plus sur une fonctionnalité particulière ?'
      ]
    },
    pricing: {
      patterns: ['prix', 'tarif', 'coût', 'budget', 'devis', 'combien', 'investissement', 'package', 'offre'],
      responses: [
        'Nos tarifs sont personnalisés selon vos besoins. Souhaitez-vous être contacté par notre équipe commerciale ?',
        'Le prix dépend de plusieurs facteurs (nombre d\'utilisateurs, modules souhaités...). Je peux vous mettre en relation avec un conseiller.'
      ]
    },
    demo: {
      patterns: ['démonstration', 'demo', 'essai', 'test', 'voir', 'présentation', 'découvrir', 'tester'],
      responses: [
        'Je peux organiser une démonstration personnalisée avec l\'un de nos experts. Quel serait le meilleur moment pour vous ?',
        'Excellent choix ! Une démo est le meilleur moyen de découvrir CNXOne HCM. Souhaitez-vous être contacté pour planifier une session ?'
      ]
    },
    help: {
      patterns: ['aide', 'help', 'support', 'question', 'problème', 'besoin', 'comment', 'quoi'],
      responses: [
        'Je suis là pour vous aider ! Pouvez-vous me préciser votre question ?',
        'Bien sûr, je peux vous aider. Quel aspect de CNXOne HCM vous intéresse ?'
      ]
    }
  };

  const findKeywordMatch = (message: string) => {
    const normalizedMessage = message.toLowerCase();

    for (const [category, data] of Object.entries(keywords)) {
      for (const pattern of data.patterns) {
        if (normalizedMessage.includes(pattern)) {
          return {
            category,
            response: data.responses[Math.floor(Math.random() * data.responses.length)]
          };
        }
      }
    }
    return null;
  };

  const addMessage = (text: string, type: 'user' | 'bot') => {
    setMessages(prev => [...prev, { type, text }]);
  };

  const handleQuickAction = (action: string) => {
    const responses = {
      features: keywords.product.responses[0],
      demo: keywords.demo.responses[0],
      pricing: keywords.pricing.responses[0]
    };

    addMessage(responses[action as keyof typeof responses], 'bot');
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      addMessage(inputValue, 'user');
      
      const match = findKeywordMatch(inputValue);
      setTimeout(() => {
        if (match) {
          addMessage(match.response, 'bot');
        } else {
          addMessage(
            'Je comprends votre intérêt. Pour mieux vous répondre, souhaitez-vous :\n• En savoir plus sur nos fonctionnalités ?\n• Obtenir une démonstration ?\n• Discuter avec un conseiller ?\n\nVous pouvez aussi nous appeler directement au +241 076402886.',
            'bot'
          );
        }
      }, 500);
      
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot">
      <div 
        className="chatbot-bubble"
        onClick={() => setIsOpen(true)}
      >
        <MessageCircle className="text-white w-6 h-6" />
      </div>

      {/* Chatbot Panel (Choice) */}
      {isOpen && !showInterface && (
        <div className="fixed bottom-24 right-8 w-80 bg-white rounded-lg shadow-xl z-50 flex flex-col max-h-80">
          <button
            onClick={() => setShowInterface(true)}
            className="flex items-center gap-2 px-4 py-4 text-cnx-green font-semibold text-sm hover:bg-green-100 border-b border-gray-200"
          >
            <MessageCircle className="text-green-800 w-4 h-4" />
            Discuter maintenant
          </button>
          <div className="flex items-center gap-2 px-4 py-4 hover:bg-green-100">
            <Phone className="text-green-800 w-4 h-4" />
            <div>
              <div className="text-gray-700 font-medium text-sm">
                Appeler l&apos;équipe commerciale
              </div>
              <a
                href="tel:+241076402886"
                className="text-sm font-bold text-gray-900 block"
              >
                +241 076402886
              </a>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Chatbot Interface */}
      {showInterface && (
        <div className="fixed bottom-24 right-8 w-80 bg-white rounded-lg shadow-xl z-50 max-h-[80vh] flex flex-col top-20">
          {/* Header */}
          <div className="p-3 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h3 className="text-base font-semibold text-gray-800">
                CNXOne HCM<sup>&#174;</sup>
              </h3>
              <button 
                onClick={() => {
                  setShowInterface(false);
                  setIsOpen(false);
                }}
                className="focus:outline-none"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chat Messages Container */}
          <div className="p-3 overflow-y-auto space-y-3 flex-grow bg-green-200 max-h-64">
            {messages.map((message, index) => (
              <div key={index} className={`flex items-start ${message.type === 'user' ? 'justify-end' : ''}`}>
                {message.type === 'bot' && (
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-cnx-green flex items-center justify-center">
                      <i className="fas fa-robot text-white text-xs"></i>
                    </div>
                  </div>
                )}
                <div className={`${
                  message.type === 'user'
                    ? 'bg-cnx-green text-white'
                    : 'bg-gray-100 text-gray-800'
                } rounded-lg p-2 ${message.type === 'bot' ? 'ml-2' : ''} max-w-[85%]`}>
                  <p 
                    className="text-xs text-gray-800 leading-snug"
                    dangerouslySetInnerHTML={{ __html: message.text.replace(/\n/g, '<br>') }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="p-2 border-t border-gray-200 space-y-1">
            <button
              onClick={() => handleQuickAction('features')}
              className="w-full text-left p-2 rounded font-semibold hover:bg-gray-100 transition-colors text-base"
            >
              <i className="fas fa-list-ul mr-2 text-cnx-green"></i>
              Liste des fonctionnalités
            </button>
            <button
              onClick={() => handleQuickAction('demo')}
              className="w-full text-left p-2 rounded font-semibold hover:bg-gray-100 transition-colors text-base"
            >
              <i className="fas fa-desktop mr-2 text-cnx-green"></i>
              Demander une démo
            </button>
          </div>

          {/* Message Input */}
          <div className="p-2 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Écrivez votre message..."
                className="flex-1 p-1.5 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-cnx-green"
              />
              {inputValue.trim() && (
                <button
                  onClick={handleSendMessage}
                  className="px-3 py-1.5 bg-cnx-green text-white rounded-lg hover:bg-cnx-dark-green transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}