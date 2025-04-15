"use client"
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import EventShowcase from '@/components/home/EventShowcase';
import Footer from '@/components/home/Footer';
import AuthModal from '@/components/auth/AuthModal';

const HomePage = () => {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  
  const handleAuthClick = () => {
    setAuthModalOpen(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onAuthClick={handleAuthClick} />
      <main className="flex-grow">
        <Hero onGetStarted={handleAuthClick} />
        <Features />
        <EventShowcase />
      </main>
      <Footer />
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </div>
  );
};

export default HomePage;
