import React from 'react';

function App() {
  return (
    <div className="page-container">
      
      {/* Header */}
      <header className="header-grid">
        <div className="style-date pt-1">Contact</div>
        <div>
          <h1 className="style-section-title" style={{ fontSize: '24px', marginBottom: '16px' }}>Victor Noorani</h1>
          <div className="flex flex-col gap-1 style-contact">
            <a href="mailto:victornoorani@gmail.com" className="hover:opacity-60">victornoorani@gmail.com</a>
            <a href="https://linkedin.com" className="hover:opacity-60">LinkedIn</a>
            <a href="https://github.com" className="hover:opacity-60">GitHub</a>
          </div>
        </div>
      </header>

      <main>
        {/* BIO */}
        <section className="mb-16">
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Bio</h2>
          </div>
          <div className="cv-grid">
            <div className="style-date"></div>
            <div>
              <p className="style-paragraph max-w-2xl">
                Multi-disciplinary creative based in London. Specializing in spatial design, engineering, and media production.
              </p>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="mb-16">
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Professional Experience</h2>
          </div>
          
          {/* Experience 1 */}
          <div className="cv-grid">
            <div className="style-date">Aug 2026 – Present</div>
            <div>
              <div className="style-role-title">Founder & AI Engineer</div>
              <div className="style-employee">Flee Mag</div>
              
              {/* Horizontal Gallery */}
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Orchestrated a multi-agent pipeline using Gemini Pro, separating concerns between Data Normalization, Editorial Curation, and Art Direction agents, safely constrained by deterministic Zod schema validation and Human-In-The-Loop (HITL) approvals.
                </div>
                <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80" alt="Flee Mag" className="gallery-landscape" />
                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80" alt="Flee Mag Tech" className="gallery-square" />
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="cv-grid">
            <div className="style-date">July 2026 – Aug 2026</div>
            <div>
              <div className="style-role-title">Freelance Spatial Design</div>
              <div className="style-employee">Nike ARENA Event & NTS Show</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Led spatial design for Nike ARENA Event & NTS Show featuring Erykah Badu. Developed the design all the way from concept stage to fabrication and instillation.
                </div>
                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80" alt="Nike Event" className="gallery-landscape" />
                <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80" alt="Nike Setup" className="gallery-square" />
              </div>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="cv-grid">
            <div className="style-date">Oct 2023 – Oct 2025</div>
            <div>
              <div className="style-role-title">Assistant Structural Engineer</div>
              <div className="style-employee">Foster + Partners</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Collaborated in a multidisciplinary team of 300+ on Stage 4 delivery for Poland’s CPK Airport Project. Extracted, cleaned, and manipulated complex data from global FEA models (ETABS). Designed & documented a bus station structure.
                </div>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" alt="Foster + Partners Architecture" className="gallery-landscape" />
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80" alt="Structural Details" className="gallery-square" />
              </div>
            </div>
          </div>
          
          {/* Experience 4 */}
          <div className="cv-grid">
            <div className="style-date">Jan 2020 – Jan 2021</div>
            <div>
              <div className="style-role-title">Freelance Director / Producer</div>
              <div className="style-employee">Creative Campaigns & Media</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Directed and produced branded content for clients including Converse, Levis, and Axel Arigato. Led production crews of 50+ for music videos with artists signed to Epic and Atlantic Records. Achieved CPV of ~0.4p.
                </div>
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" alt="Production Set" className="gallery-landscape" />
                <img src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80" alt="Camera" className="gallery-square" />
              </div>
            </div>
          </div>
        </section>

        {/* AWARDS & PUBLIC ENGAGEMENT */}
        <section className="mb-16">
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Awards & Public Engagement</h2>
          </div>
          
          <div className="cv-grid">
            <div className="style-date">April 2026</div>
            <div>
              <div className="style-role-title">1st Place — Solid Hackathon</div>
              <div className="style-employee">Open Data Institute</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Built “Bunbury” - a decentralised calling card platform built on the Solid protocol to facilitate secure, peer-to-peer sharing of sovereign personal data based on physical proximity.
                </div>
                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80" alt="Solid Hackathon" className="gallery-landscape" />
              </div>
            </div>
          </div>

          <div className="cv-grid">
            <div className="style-date">Jan 2026</div>
            <div>
              <div className="style-role-title">Panelist: The Role of Social Media Influencers in Contemporary Politics</div>
              <div className="style-employee">Political Tech Conference, Berlin</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Spoke about influencers as emergent political actors, the impact of attention economies on discourse, parasocial trust dynamics, and the shift toward decentralised political communication.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATIONAL EXPERIENCE */}
        <section className="mb-16">
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Educational Experience</h2>
          </div>
          
          <div className="cv-grid">
            <div className="style-date">2025</div>
            <div>
              <div className="style-role-title">Certificate in Machine Learning & AI</div>
              <div className="style-employee">Imperial College London</div>
            </div>
          </div>
          
          <div className="cv-grid">
            <div className="style-date"></div>
            <div>
              <div className="style-role-title">Certificate in Real Estate Finance & Economics</div>
              <div className="style-employee"></div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-32">
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Skills</h2>
          </div>
          <div className="cv-grid">
            <div className="style-date"></div>
            <div>
              <p className="style-paragraph">
                Spatial Design, Structural Engineering (ETABS, BIM), Video Production, Web Development (React, Vercel), AI Automation (Gemini Pro, Agentic Workflows)
              </p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
