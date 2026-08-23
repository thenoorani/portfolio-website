import React from 'react';

function App() {
  return (
    <div className="page-container">
      
      {/* HEADER */}
      <header>
        {/* Title Block */}
        <div className="cv-grid" style={{ marginTop: '59px', marginBottom: '24px' }}>
          <div></div>
          <h1 className="style-section-title">Victor Noorani</h1>
        </div>

        {/* Contact Block */}
        <div className="cv-grid" style={{ marginBottom: '100px' }}>
          <div className="style-date">Contact:</div>
          <div className="style-contact">
            <a href="mailto:victornoorani@gmail.com">victornoorani@gmail.com</a>
            <a href="https://linkedin.com">linkedIn</a>
            <a href="https://github.com">GitHub</a>
          </div>
        </div>
      </header>

      <main>
        {/* BIO */}
        <section className="mb-70">
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Bio</h2>
          </div>
          <div className="cv-grid">
            <div></div>
            <div>
              <div className="gallery-scroll" style={{ marginTop: 0 }}>
                <div className="gallery-paragraph style-paragraph">
                  Multi-disciplinary creative based in London. Specializing in spatial design, engineering, and media production.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AWARDS & PUBLIC ENGAGEMENT */}
        <section className="mb-70">
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Awards & Public Engagement</h2>
          </div>
          
          {/* Experience 1 */}
          <div className="cv-grid">
            <div className="style-date">April 2026</div>
            <div>
              <div className="style-role-title">1st Place — Solid Hackathon</div>
              <div className="style-employee">Open Data Institute</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Built “Bunbury” - a decentralised calling card platform built on the Solid protocol to facilitate secure, peer-to-peer sharing of sovereign personal data based on physical proximity.
                </div>
                <img src="/hackathon-win.jpg" alt="1st Place Solid Hackathon" className="gallery-landscape" />
                <img src="/bunbury-app.png" alt="Bunbury Application" className="gallery-square" />
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="cv-grid">
            <div className="style-date">Jan 2026</div>
            <div>
              <div className="style-role-title">Panelist: Social Media Influencers in Politics</div>
              <div className="style-employee">Political Tech Conference, Berlin</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Spoke about influencers as emergent political actors, the impact of attention economies on discourse, parasocial trust dynamics, and the shift toward decentralised political communication.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE */}
        <section className="mb-70">
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Professional Experience</h2>
          </div>
          
          <div className="cv-grid">
            <div className="style-date">Aug 2026</div>
            <div>
              <div className="style-role-title">Founder & AI Engineer</div>
              <div className="style-employee">Flee Mag</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Orchestrated a multi-agent pipeline using Gemini Pro, separating concerns between Data Normalization, Editorial Curation, and Art Direction agents, safely constrained by deterministic Zod schema validation and Human-In-The-Loop (HITL) approvals.
                </div>
                <div className="gallery-landscape"></div>
                <div className="gallery-square"></div>
              </div>
            </div>
          </div>

          <div className="cv-grid">
            <div className="style-date">July 2026 –<br/>Aug 2026</div>
            <div>
              <div className="style-role-title">Spatial design</div>
              <div className="style-employee">Freelance</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Led spatial design for Nike ARENA Event & NTS Show featuring Erykah Badu. Developed the design all the way from concept stage to fabrication and instillation.
                </div>
                <div className="gallery-landscape"></div>
                <div className="gallery-square"></div>
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph"></div>
                <div className="gallery-landscape"></div>
                <div className="gallery-square"></div>
              </div>
            </div>
          </div>

          <div className="cv-grid">
            <div className="style-date">Dec 2025 –<br/>Feb 2026</div>
            <div>
              <div className="style-role-title">Research and Coordination Assistant</div>
              <div className="style-employee">Attia & Co, Remote</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Assisted a private firm that advises founders on capital structure and public positioning.
                </div>
              </div>
            </div>
          </div>

          <div className="cv-grid">
            <div className="style-date">Oct 2023 –<br/>Oct 2025</div>
            <div>
              <div className="style-role-title">Assistant Structural Engineer</div>
              <div className="style-employee">Foster + Partners</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Collaborated in a multidisciplinary team of 300+ on Stage 4 delivery for Poland’s CPK Airport Project. Extracted, cleaned, and manipulated complex data from global FEA models (ETABS). Designed & documented a bus station structure.
                </div>
                <div className="gallery-landscape"></div>
                <div className="gallery-square"></div>
              </div>
            </div>
          </div>
          
          <div className="cv-grid">
            <div className="style-date">Jan 2020 –<br/>Jan 2021</div>
            <div>
              <div className="style-role-title">Freelance Director / Producer</div>
              <div className="style-employee">Creative Campaigns & Media</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Directed and produced branded content for clients including Converse, Levis, and Axel Arigato. Led production crews of 50+ for music videos with artists signed to Epic and Atlantic Records. Achieved CPV of ~0.4p.
                </div>
                <div className="gallery-landscape"></div>
                <div className="gallery-square"></div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATIONAL EXPERIENCE */}
        <section className="mb-70">
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
        <section style={{ paddingBottom: '70px' }}>
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Skills</h2>
          </div>
          <div className="cv-grid">
            <div></div>
            <div>
              <div className="gallery-scroll" style={{ marginTop: 0 }}>
                <div className="gallery-paragraph style-paragraph">
                  Spatial Design, Structural Engineering (ETABS, BIM), Video Production, Web Development (React, Vercel), AI Automation (Gemini Pro, Agentic Workflows)
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;
