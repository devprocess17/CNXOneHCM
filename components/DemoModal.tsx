'use client';

import { useState, useEffect } from 'react';
import { X, Calendar } from 'lucide-react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { French } from 'flatpickr/dist/l10n/fr.js';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (details: { date: string; time: string }) => void;
}

export default function DemoModal({ isOpen, onClose, onConfirm }: DemoModalProps) {
  const [formData, setFormData] = useState({
    fullname: '',
    company: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });
  const [selectedTime, setSelectedTime] = useState('');
  const [showTimeSlots, setShowTimeSlots] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const timeSlots = ['9:00', '10:30', '14:00', '15:30', '17:00'];

  useEffect(() => {
    if (isOpen) {
      const dateInput = document.getElementById('demo-date') as HTMLInputElement;
      if (dateInput) {
        flatpickr(dateInput, {
          locale: French,
          minDate: 'today',
          dateFormat: 'd/m/Y',
          disable: [(date) => date.getDay() === 0 || date.getDay() === 6],
          onChange: (selectedDates, dateStr) => {
            setFormData(prev => ({ ...prev, date: dateStr }));
            setShowTimeSlots(true);
          },
          enableTime: false,
          altInput: true,
          altFormat: 'j F Y',
          monthSelectorType: 'static',
        });
      }
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    
    if (!formData.fullname) newErrors.push('Nom complet');
    if (!formData.email) newErrors.push('Email professionnel');
    if (!formData.date) newErrors.push('Date souhaitée');
    if (!selectedTime) newErrors.push('Créneau horaire');

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      onConfirm({ date: formData.date, time: selectedTime });
      // Reset form
      setFormData({
        fullname: '',
        company: '',
        email: '',
        phone: '',
        date: '',
        message: ''
      });
      setSelectedTime('');
      setShowTimeSlots(false);
      setErrors([]);
    }
  };

  const handleClose = () => {
    setFormData({
      fullname: '',
      company: '',
      email: '',
      phone: '',
      date: '',
      message: ''
    });
    setSelectedTime('');
    setShowTimeSlots(false);
    setErrors([]);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center modal">
      <div className="modal-container w-full max-w-md md:max-w-xl m-4">
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="gradient-bg text-white px-6 py-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Réserver une démonstration</h3>
              <button onClick={handleClose} className="focus:outline-none">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Découvrez comment notre solution CNXOne HCM<sup>&#174;</sup> peut
                répondre à vos besoins spécifiques. Choisissez un créneau qui vous
                convient pour une démonstration personnalisée.
              </p>
            </div>

            {errors.length > 0 && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
                <p className="text-red-600 font-medium mb-2">
                  Veuillez compléter les informations suivantes :
                </p>
                <ul className="text-red-600 text-sm list-disc list-inside">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Entreprise
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="demo-date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date et heure souhaitées
                </label>
                <input
                  type="text"
                  id="demo-date"
                  name="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Choisir une date"
                />
              </div>

              {showTimeSlots && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Créneaux disponibles
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => handleTimeSelect(time)}
                        className={`px-3 py-2 border rounded-md hover:bg-green-50 hover:border-green-500 focus:outline-none ${
                          selectedTime === time
                            ? 'bg-green-50 border-green-500 text-green-700'
                            : 'border-gray-300'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message (optionnel)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-6 py-3 border border-gray-300 rounded-md mr-4 hover:bg-gray-50"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700"
                >
                  Confirmer la réservation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}