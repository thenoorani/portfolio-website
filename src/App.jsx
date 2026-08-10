import React from 'react';
import { Mail, Phone } from 'lucide-react';

function App() {
  return (
    <div className="container">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-16 animate-fade-in">
        <div className="text-xl font-medium uppercase">Victor Noorani</div>
        <div className="flex gap-8 text-sm">
          <a href="#work">Work</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-16 md:py-32 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h1 className="text-6xl font-normal leading-tight max-w-3xl">
          Multi-disciplinary creative based in London. Specializing in spatial design, engineering, and media production.
        </h1>
      </section>

      {/* Work */}
      <section id="work" className="py-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <h2 className="text-2xl font-normal mb-8">Selected Work</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Work Item 1 */}
          <div className="work-item">
            <div className="bg-gray-200 aspect-video mb-4 rounded overflow-hidden" style={{ backgroundColor: '#eeeeee', aspectRatio: '16/9' }}>
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=800" alt="Set Design" className="w-full h-full object-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 className="text-lg font-medium">Nike ARENA Event</h3>
            <p className="text-sm text-accent">Spatial Design / Concept to Fabrication</p>
          </div>

          {/* Work Item 2 */}
          <div className="work-item">
            <div className="bg-gray-200 aspect-video mb-4 rounded overflow-hidden" style={{ backgroundColor: '#eeeeee', aspectRatio: '16/9' }}>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" alt="Music Video Production" className="w-full h-full object-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 className="text-lg font-medium">Epic & Atlantic Records</h3>
            <p className="text-sm text-accent">Director / Producer - Music Videos</p>
          </div>

          {/* Work Item 3 */}
          <div className="work-item">
            <div className="bg-gray-200 aspect-video mb-4 rounded overflow-hidden" style={{ backgroundColor: '#eeeeee', aspectRatio: '16/9' }}>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Architecture" className="w-full h-full object-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 className="text-lg font-medium">CPK Airport Project</h3>
            <p className="text-sm text-accent">Stage 4 Delivery / Foster + Partners</p>
          </div>

          {/* Work Item 4 */}
          <div className="work-item">
            <div className="bg-gray-200 aspect-video mb-4 rounded overflow-hidden" style={{ backgroundColor: '#eeeeee', aspectRatio: '16/9' }}>
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" alt="Decentralized Tech" className="w-full h-full object-cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 className="text-lg font-medium">Bunbury (Solid Protocol)</h3>
            <p className="text-sm text-accent">Hackathon 1st Place / Open Data Institute</p>
          </div>
        </div>
      </section>

      {/* CV */}
      <section id="cv" className="py-16 border-t mt-16" style={{ borderTop: '1px solid var(--color-border)' }}>
        <h2 className="text-2xl font-normal mb-16">Curriculum Vitae</h2>

        <div className="flex flex-col gap-16 max-w-4xl">
          {/* Awards */}
          <div>
            <h3 className="text-sm uppercase font-bold text-accent mb-4">Awards</h3>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-lg">Solid (Social Linked Data) Hackathon 1st Place</h4>
                <span className="text-sm text-accent text-right">April 2026</span>
              </div>
              <p className="text-accent text-sm mb-2">Open Data Institute, London</p>
              <p className="text-sm">Built “Bunbury” - a decentralised calling card platform built on the Solid protocol to facilitate secure, peer-to-peer sharing of sovereign personal data based on physical proximity.</p>
            </div>
          </div>

          {/* Public Engagement */}
          <div>
            <h3 className="text-sm uppercase font-bold text-accent mb-4">Public Engagement</h3>
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-lg">Panelist, The Role of Social Media Influencers in Contemporary Politics</h4>
                <span className="text-sm text-accent text-right">Jan 2026</span>
              </div>
              <p className="text-accent text-sm mb-2">Political Tech Conference, Berlin</p>
              <p className="text-sm">Spoke about influencers as emergent political actors, the impact of attention economies on discourse, parasocial trust dynamics, and the shift toward decentralised political communication.</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-sm uppercase font-bold text-accent mb-4">Professional Experience</h3>
            
            <div className="mb-8">
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-lg">Flee Mag</h4>
                <span className="text-sm text-accent text-right">Aug 2026</span>
              </div>
              <p className="text-accent text-sm mb-2">Founder & AI Engineer, London</p>
              <p className="text-sm">Orchestrated a multi-agent pipeline using Gemini Pro, separating concerns between Data Normalization, Editorial Curation, and Art Direction agents, safely constrained by deterministic Zod schema validation and Human-In-The-Loop (HITL) approvals.</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-lg">Freelance Spatial Design</h4>
                <span className="text-sm text-accent text-right">July 2026 – Aug 2026</span>
              </div>
              <p className="text-accent text-sm mb-2">Self-Employed, London</p>
              <ul className="text-sm list-disc list-inside ml-2" style={{ marginLeft: '1rem', listStyleType: 'disc' }}>
                <li>Led spatial design for Nike ARENA Event & NTS Show featuring Erykah Badu.</li>
                <li>Both jobs entailed developing the design all the way from concept stage to fabrication and instillation.</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-lg">Research and Coordination Assistant</h4>
                <span className="text-sm text-accent text-right">Dec 2025 – Feb 2026</span>
              </div>
              <p className="text-accent text-sm mb-2">Attia & Co, Remote</p>
              <p className="text-sm">Assisted a private firm that advises founders on capital structure and public positioning.</p>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-lg">Assistant Structural Engineer</h4>
                <span className="text-sm text-accent text-right">Oct 2023 – Oct 2025</span>
              </div>
              <p className="text-accent text-sm mb-2">Foster + Partners, London</p>
              <ul className="text-sm list-disc list-inside ml-2" style={{ marginLeft: '1rem', listStyleType: 'disc' }}>
                <li>Collaborated in a multidisciplinary team of 300+ on Stage 4 delivery for Poland’s CPK Airport Project.</li>
                <li>Extracted, cleaned, and manipulated complex data from global FEA models (ETABS).</li>
                <li>Developed BIM models and coordinated between structural and envelope teams.</li>
                <li>Designed & documented a bus station structure in collaboration with a local engineering partner (Buro Happold) under tight deadlines.</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-lg">Freelance Director / Producer</h4>
                <span className="text-sm text-accent text-right">Jan 2020 – Jan 2021</span>
              </div>
              <p className="text-accent text-sm mb-2">Self-Employed, London</p>
              <ul className="text-sm list-disc list-inside ml-2" style={{ marginLeft: '1rem', listStyleType: 'disc' }}>
                <li>Directed and produced branded content for clients including Converse, Levis, and Axel Arigato.</li>
                <li>Led production crews of 50+ for music videos with artists signed to Epic and Atlantic Records.</li>
                <li>Applied project management, creative strategy, and stakeholder engagement to achieve production cost-per-view (~0.4p) below typical YouTube paid CPV rates (1p–30p).</li>
              </ul>
            </div>
          </div>

          {/* Development */}
          <div>
            <h3 className="text-sm uppercase font-bold text-accent mb-4">Professional Development</h3>
            
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-lg">Certificate in Machine Learning & Artificial Intelligence</h4>
                <span className="text-sm text-accent text-right">2025</span>
              </div>
              <p className="text-accent text-sm mb-2">Imperial College London, Remote</p>
              <p className="text-sm">Covering machine learning fundamentals.</p>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-baseline">
                <h4 className="font-medium text-lg">Certificate in Real Estate Finance & Economics</h4>
                <span className="text-sm text-accent text-right"></span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 border-t" style={{ borderTop: '1px solid var(--color-border)' }}>
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-normal mb-8">Get in Touch</h2>
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <a href="mailto:victornoorani@gmail.com" className="flex items-center gap-2 text-lg hover:text-accent transition-colors" style={{ display: 'flex', alignItems: 'center' }}>
              <Mail size={20} /> victornoorani@gmail.com
            </a>
            <a href="tel:+447751751011" className="flex items-center gap-2 text-lg hover:text-accent transition-colors" style={{ display: 'flex', alignItems: 'center' }}>
              <Phone size={20} /> +44 7751751011
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t text-sm text-accent flex justify-between items-center" style={{ borderTop: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between' }}>
        <p>© {new Date().getFullYear()} Victor Noorani. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-black transition-colors" style={{ marginLeft: '1rem' }}>LinkedIn</a>
          <a href="#" className="hover:text-black transition-colors" style={{ marginLeft: '1rem' }}>Instagram</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
