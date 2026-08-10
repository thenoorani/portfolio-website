import React from 'react';
import { Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="py-16 md:py-32 animate-fade-in text-center">
        <h1 className="text-4xl font-normal uppercase tracking-widest mb-4">Victor Noorani</h1>
        <p className="text-lg text-accent">Curriculum Vitae</p>
      </header>

      {/* Main CV Content */}
      <main className="pb-32 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        
        {/* Professional Experience */}
        <section className="mb-16">
          <h2 className="text-sm uppercase font-bold text-accent mb-8 pb-2 border-b" style={{ borderBottom: '1px solid var(--color-border)' }}>Professional Experience</h2>
          
          <div className="flex flex-col gap-12">
            
            <div className="cv-grid">
              <div className="text-sm text-accent">Aug 2026</div>
              <div>
                <h3 className="text-lg font-medium">Founder & AI Engineer</h3>
                <p className="text-sm text-accent mb-2">Flee Mag, London</p>
                <p className="text-sm">Orchestrated a multi-agent pipeline using Gemini Pro, separating concerns between Data Normalization, Editorial Curation, and Art Direction agents, safely constrained by deterministic Zod schema validation and Human-In-The-Loop (HITL) approvals.</p>
              </div>
            </div>

            <div className="cv-grid">
              <div className="text-sm text-accent">July 2026 – Aug 2026</div>
              <div>
                <h3 className="text-lg font-medium">Freelance Spatial Design</h3>
                <p className="text-sm text-accent mb-2">Self-Employed, London</p>
                <ul className="text-sm list-disc list-inside" style={{ marginLeft: '1rem', listStyleType: 'disc' }}>
                  <li>Led spatial design for Nike ARENA Event & NTS Show featuring Erykah Badu.</li>
                  <li>Developed design from concept stage through to fabrication and instillation.</li>
                </ul>
              </div>
            </div>

            <div className="cv-grid">
              <div className="text-sm text-accent">Dec 2025 – Feb 2026</div>
              <div>
                <h3 className="text-lg font-medium">Research and Coordination Assistant</h3>
                <p className="text-sm text-accent mb-2">Attia & Co, Remote</p>
                <p className="text-sm">Assisted a private firm that advises founders on capital structure and public positioning.</p>
              </div>
            </div>

            <div className="cv-grid">
              <div className="text-sm text-accent">Oct 2023 – Oct 2025</div>
              <div>
                <h3 className="text-lg font-medium">Assistant Structural Engineer</h3>
                <p className="text-sm text-accent mb-2">Foster + Partners, London</p>
                <ul className="text-sm list-disc list-inside" style={{ marginLeft: '1rem', listStyleType: 'disc' }}>
                  <li>Collaborated in a multidisciplinary team of 300+ on Stage 4 delivery for Poland’s CPK Airport Project.</li>
                  <li>Extracted, cleaned, and manipulated complex data from global FEA models (ETABS).</li>
                  <li>Developed BIM models and coordinated between structural and envelope teams.</li>
                  <li>Designed & documented a bus station structure in collaboration with Buro Happold under tight deadlines.</li>
                </ul>
              </div>
            </div>

            <div className="cv-grid">
              <div className="text-sm text-accent">Jan 2020 – Jan 2021</div>
              <div>
                <h3 className="text-lg font-medium">Freelance Director / Producer</h3>
                <p className="text-sm text-accent mb-2">Self-Employed, London</p>
                <ul className="text-sm list-disc list-inside" style={{ marginLeft: '1rem', listStyleType: 'disc' }}>
                  <li>Directed and produced branded content for clients including Converse, Levis, and Axel Arigato.</li>
                  <li>Led production crews of 50+ for music videos with artists signed to Epic and Atlantic Records.</li>
                  <li>Applied project management, creative strategy, and stakeholder engagement to achieve production cost-per-view (~0.4p) below typical YouTube paid CPV rates.</li>
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* Awards */}
        <section className="mb-16">
          <h2 className="text-sm uppercase font-bold text-accent mb-8 pb-2 border-b" style={{ borderBottom: '1px solid var(--color-border)' }}>Awards & Recognition</h2>
          
          <div className="flex flex-col gap-12">
            <div className="cv-grid">
              <div className="text-sm text-accent">April 2026</div>
              <div>
                <h3 className="text-lg font-medium">1st Place — Solid (Social Linked Data) Hackathon</h3>
                <p className="text-sm text-accent mb-2">Open Data Institute, London</p>
                <p className="text-sm">Built “Bunbury” - a decentralised calling card platform built on the Solid protocol to facilitate secure, peer-to-peer sharing of sovereign personal data based on physical proximity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Public Engagement */}
        <section className="mb-16">
          <h2 className="text-sm uppercase font-bold text-accent mb-8 pb-2 border-b" style={{ borderBottom: '1px solid var(--color-border)' }}>Public Engagement</h2>
          
          <div className="flex flex-col gap-12">
            <div className="cv-grid">
              <div className="text-sm text-accent">Jan 2026</div>
              <div>
                <h3 className="text-lg font-medium">Panelist</h3>
                <p className="text-sm text-accent mb-2">Political Tech Conference, Berlin</p>
                <p className="text-sm">Spoke on "The Role of Social Media Influencers in Contemporary Politics". Discussed influencers as emergent political actors, the impact of attention economies on discourse, parasocial trust dynamics, and the shift toward decentralised political communication.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Development */}
        <section className="mb-16">
          <h2 className="text-sm uppercase font-bold text-accent mb-8 pb-2 border-b" style={{ borderBottom: '1px solid var(--color-border)' }}>Education & Certifications</h2>
          
          <div className="flex flex-col gap-12">
            <div className="cv-grid">
              <div className="text-sm text-accent">2025</div>
              <div>
                <h3 className="text-lg font-medium">Certificate in Machine Learning & Artificial Intelligence</h3>
                <p className="text-sm text-accent">Imperial College London (Remote)</p>
              </div>
            </div>
            
            <div className="cv-grid">
              <div className="text-sm text-accent"></div>
              <div>
                <h3 className="text-lg font-medium">Certificate in Real Estate Finance & Economics</h3>
                <p className="text-sm text-accent"></p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer & Contact */}
      <footer className="py-16 border-t flex flex-col md:flex-row justify-between items-center gap-8" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex gap-8">
          <a href="mailto:victornoorani@gmail.com" className="flex items-center gap-2 text-sm hover:text-accent transition-colors" style={{ display: 'flex', alignItems: 'center' }}>
            <Mail size={16} /> victornoorani@gmail.com
          </a>
          <a href="tel:+447751751011" className="flex items-center gap-2 text-sm hover:text-accent transition-colors" style={{ display: 'flex', alignItems: 'center' }}>
            <Phone size={16} /> +44 7751751011
          </a>
        </div>
        <p className="text-sm text-accent">© {new Date().getFullYear()} Victor Noorani. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
