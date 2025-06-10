'use client';

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SolutionSection from '@/components/SolutionSection';
import TransformationSection from '@/components/TransformationSection';
import PaieSection from '@/components/PaieSection';
import ModulesSection from '@/components/ModulesSection';
import BenefitsSection from '@/components/BenefitsSection';
import TagsSection from '@/components/TagsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import DemoModal from '@/components/DemoModal';
import ConfirmationModal from '@/components/ConfirmationModal';
import Chatbot from '@/components/Chatbot';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [confirmationDetails, setConfirmationDetails] = useState({ date: '', time: '' });

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);
  
  const openConfirmationModal = (details: { date: string; time: string }) => {
    setConfirmationDetails(details);
    setIsDemoModalOpen(false);
    setIsConfirmationModalOpen(true);
  };
  
  const closeConfirmationModal = () => setIsConfirmationModalOpen(false);

  return (
    <>
      <Navigation onDemoClick={openDemoModal} />
      <HeroSection onDemoClick={openDemoModal} />
      <SolutionSection />
      <TransformationSection />
      <PaieSection />
      <ModulesSection />
      <BenefitsSection />
      <TagsSection />
      <CTASection onDemoClick={openDemoModal} />
      <Footer />
      
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={closeDemoModal}
        onConfirm={openConfirmationModal}
      />
      
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        onClose={closeConfirmationModal}
        details={confirmationDetails}
      />
      
      <Chatbot />
      <BackToTop />
    </>
  );
}