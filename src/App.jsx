import React from 'react';
import { TopAnnouncementBar } from './components/TopAnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TrustBar } from './components/TrustBar';
import { LiftingConcept } from './components/LiftingConcept';
import { ProceduresGrid } from './components/ProceduresGrid';
import { ComparativeMatrix } from './components/ComparativeMatrix';
import { ManifestoAbout } from './components/ManifestoAbout';
import { Testimonials } from './components/Testimonials';
import { PreFooterCTA } from './components/PreFooterCTA';
import { Footer } from './components/Footer';
import { WhatsAppFloatingDock } from './components/WhatsAppFloatingDock';

function App() {
  return (
    <div className="min-h-screen bg-canvas text-graphite font-sans antialiased selection:bg-matte-gold selection:text-graphite">
      {/* 1. Announcement bar at very top */}
      <TopAnnouncementBar />

      {/* 2. Modern boutique header */}
      <Header />

      {/* 3. Main content stream */}
      <main>
        {/* Hero presentation with official portrait */}
        <HeroSection />

        {/* Clinical authority badges bar */}
        <TrustBar />

        {/* Lifting Facial Não Cirúrgico - Concept & Pillars */}
        <LiftingConcept />

        {/* 6 High-converting signature procedures */}
        <ProceduresGrid />

        {/* Comparative matrix: Dra. Patrícia vs Market */}
        <ComparativeMatrix />

        {/* Manifesto & Biomédica Esteta background */}
        <ManifestoAbout />

        {/* Verified testimonials */}
        <Testimonials />

        {/* Full-width 100% solid pre-footer CTA */}
        <PreFooterCTA />
      </main>

      {/* 4. Minimalist footer */}
      <Footer />

      {/* 5. Floating WhatsApp action dock */}
      <WhatsAppFloatingDock />
    </div>
  );
}

export default App;
