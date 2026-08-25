import React, { useState } from 'react';

function App() {
  const [fullScreenMedia, setFullScreenMedia] = useState(null);

  const MediaImage = ({ src, alt, className, style }) => (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      onClick={() => setFullScreenMedia(src)}
      style={{ cursor: 'zoom-in', ...style }}
    />
  );

  const MediaVideo = ({ src, className }) => (
    <video 
      src={src} 
      className={className}
      autoPlay 
      loop 
      muted 
      playsInline 
      onClick={() => setFullScreenMedia(src)}
      style={{ cursor: 'zoom-in', objectFit: 'cover' }}
    />
  );

  const MediaPdf = ({ src, thumbnailSrc, alt, className, style, imgStyle }) => (
    <div className={className} style={{ position: 'relative', cursor: 'zoom-in', overflow: 'hidden', ...style }} onClick={() => setFullScreenMedia(src)}>
      <img src={thumbnailSrc} alt={alt} style={{ width: '100%', height: 'auto', display: 'block', ...imgStyle }} />
    </div>
  );

  return (
    <div className="page-container">
      
      {/* HEADER */}
      <header>
        {/* Title Block */}
        <div className="cv-grid" style={{ marginTop: '59px', marginBottom: '100px' }}>
          <div></div>
          <h1 className="style-section-title">Victor Noorani</h1>
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
                {/* Contact block added as a second paragraph in Bio */}
                <div className="gallery-paragraph style-paragraph">
                  <div className="style-contact">
                    <a href="mailto:victornoorani@gmail.com">victornoorani@gmail.com</a>
                    <a href="https://linkedin.com">linkedIn</a>
                    <a href="https://github.com">GitHub</a>
                  </div>
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
            <div className="style-date">June 2026 –<br/>Ongoing</div>
            <div>
              <div className="style-role-title">Founder & AI Engineer</div>
              <div className="style-employee">Peace4</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Orchestrated a multi-agent pipeline using Gemini Pro, separating concerns between Data Normalization, Editorial Curation, and Art Direction agents, safely constrained by deterministic Zod schema validation and Human-In-The-Loop (HITL) approvals.
                </div>
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph"></div>
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph"></div>
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph"></div>
              </div>
            </div>
          </div>

          <div className="cv-grid">
            <div className="style-date">July 2026 –<br/>Aug 2026</div>
            <div>
              <div className="style-role-title">Spatial design</div>
              <div className="style-employee">Freelance x Cosimo de Barry</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  This work was done in collaboration with Cosimo de Barry. Together we led spatial design for Nike's ARENA Event. Working closely with Evening Studio we designed and managed spatial design from concept stage all the way to fabrication and installation.
                </div>
                <MediaImage src="/nike-setup.png" alt="Nike Setup" className="gallery-landscape" />
                <MediaImage src="/nike-cube.jpg" alt="Nike Arena Cube" className="gallery-square" />
                <MediaVideo src="/social-impact.mov" className="gallery-landscape" />
                <div className="gallery-paragraph style-paragraph">
                  Central to our proposal was the combination of a high gloss performance surface with a low LED screen.
                </div>
                <MediaPdf src="/nike-shadow.pdf" thumbnailSrc="/nike-shadow-thumb.jpg" alt="Nike Shadow Treatment" className="gallery-landscape" imgStyle={{ height: '100%', objectFit: 'cover' }} />
                <MediaPdf src="/nike-set.pdf" thumbnailSrc="/nike-set-thumb.jpg" alt="Nike Set Treatment" className="gallery-landscape" imgStyle={{ height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Our second project was for an Erykah Badu x The Alchemist live show hosted by NTS.
                </div>
                <MediaImage src="/nts-flyer.jpg" alt="NTS Flyer" className="gallery-square" style={{ objectPosition: 'top' }} />
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
                <MediaImage src="/foster-sketch.jpg" alt="Structural Engineering Sketch" className="gallery-landscape" />
              </div>
            </div>
          </div>
          
          <div className="cv-grid">
            <div className="style-date">Jan 2020 –<br/>Jan 2021</div>
            <div>
              <div className="style-role-title">Music Promo Video Direction</div>
              <div className="style-employee">Freelance x Tom Emmerson</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  For Col3trane and Mahalia's 'Pretty', we crafted a juxtaposition of elegance and chaos
                </div>
                <MediaImage src="/promo-r1-1.jpg" alt="Music Promo 1" className="gallery-square" />
                <MediaImage src="/promo-r1-2.jpg" alt="Music Promo 2" className="gallery-landscape" />
                <MediaImage src="/promo-r1-3.jpg" alt="Music Promo 3" className="gallery-square" />
                <MediaImage src="/promo-r1-4.jpg" alt="Music Promo 4" className="gallery-landscape" />
                <MediaImage src="/promo-r1-5.jpg" alt="Music Promo 5" className="gallery-square" />
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  For our, and Mimi Webb's, first music video, we captured a visual journey of fading romance on film. The decision to go analogue was a deliberate choice, our intention being to strip back the pop gloss and present an image of authenticity.
                </div>
                <MediaImage src="/promo-1.jpg" alt="Music Promo Set" className="gallery-landscape" />
                <MediaImage src="/promo-2.jpg" alt="Music Promo Crew" className="gallery-landscape" />
                <MediaImage src="/promo-3.jpg" alt="Music Promo Car" className="gallery-landscape" />
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
                <MediaImage src="/hackathon-win.jpg" alt="1st Place Solid Hackathon" className="gallery-landscape" />
                <MediaImage src="/bunbury-app.png" alt="Bunbury Application" className="gallery-square" />
              </div>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="cv-grid">
            <div className="style-date">Jan 2026</div>
            <div>
              <div className="style-role-title">Panelist: Young Creators as Power Brokers in Politics</div>
              <div className="style-employee">Political Tech Conference, Berlin</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Spoke about influencers as emergent political actors, the impact of attention economies on discourse, parasocial trust dynamics, and the shift toward decentralised political communication.
                </div>
                <MediaVideo src="/linkedin-panel.mp4" className="gallery-landscape" />
              </div>
            </div>
          </div>
        </section>

        {/* PERSONAL WORK */}
        <section className="mb-70">
          <div className="cv-grid">
            <div></div>
            <h2 className="style-section-title">Personal Work</h2>
          </div>

          <div className="cv-grid">
            <div className="style-date">April 2026</div>
            <div>
              <div className="style-role-title">Ismaili Ancestors</div>
              <div className="style-employee">Studies</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  With these studies I attempt to use AI to resurrect my ancestors: turn of the century immigrants who left India for Zanzibar. Working from old photos my first goal was to extract each individual and, filling in the blanks, create a character.
                </div>
                <MediaImage src="/jamat-1.png" alt="Jamat Tanzania Image 1" className="gallery-square" style={{ objectFit: 'contain' }} />
                <MediaImage src="/jamat-0.png" alt="Jamat Tanzania Image 2" className="gallery-square" style={{ objectFit: 'contain' }} />
                <MediaImage src="/jamat-2.png" alt="Flowchart Pipeline" className="gallery-square" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
                <MediaImage src="/jamat-3.jpg" alt="Extracted Subjects Grid" className="gallery-landscape" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
                <MediaImage src="/jamat-4.png" alt="PC-MCLD Transformation" className="gallery-landscape" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
                <MediaImage src="/jamat-arch.png" alt="Architecture Comparison" className="gallery-landscape" style={{ objectFit: 'contain' }} />
                <MediaImage src="/jamat-characters.png" alt="Character Extraction" className="gallery-square" style={{ objectFit: 'contain', backgroundColor: 'black' }} />
              </div>
            </div>
          </div>

          <div className="cv-grid">
            <div className="style-date">March 2026</div>
            <div>
              <div className="style-role-title">Network State</div>
              <div className="style-employee">Essay</div>
              
              <div className="gallery-scroll">
                <a href="https://thenoorani.substack.com/p/network-states-preferable-by-which" target="_blank" rel="noreferrer" className="gallery-paragraph style-paragraph" style={{ display: 'block' }}>
                  In my search for the tech frontier I spent the month of March at Balaji's Network School, in Johor. During this time I shared an essay with my fellow NS members; by borrowing from moral philosophy my aim was to ask the practical question of by what tangible metrics one could judge such an experimental society as a network state.
                </a>
                <MediaImage src="/network-1.jpg" alt="Network School Chess" className="gallery-square" />
                <MediaImage src="/network-2.jpg" alt="Johor Skyline" className="gallery-landscape" />
                <MediaImage src="/network-3.jpg" alt="Beach" className="gallery-landscape" />
                <MediaImage src="/network-4.jpg" alt="Refugees" className="gallery-landscape" />
                <MediaImage src="/network-5.jpg" alt="Graph" className="gallery-square" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
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
          
          {/* University Work with Triple Gallery */}
          <div className="cv-grid">
            <div className="style-date">2018 –<br/>2023</div>
            <div>
              <div className="style-role-title">MEng, Engineering and Architectural Design</div>
              <div className="style-employee">The Bartlett School of Architecture, UCL</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph"></div>
                <MediaImage src="/bartlett-section.jpg" alt="Architecture Section" className="gallery-landscape" />
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph"></div>
                <MediaPdf src="/dissertation.pdf" thumbnailSrc="/dissertation-thumb.jpg" alt="Dissertation Document" className="gallery-square" />
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph"></div>
                <MediaImage src="/uni-1.jpg" alt="University Installation Structure" className="gallery-square" />
                <MediaImage src="/uni-2.jpg" alt="Installation Motor Detail" className="gallery-landscape" />
                <MediaImage src="/uni-3.jpg" alt="Installation Interaction" className="gallery-landscape" />
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* FULL SCREEN MODAL */}
      {fullScreenMedia && (
        <div 
          className="fullscreen-modal" 
          onClick={() => setFullScreenMedia(null)}
          style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(255, 255, 255, 0.95)', zIndex: 9999,
            display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'zoom-out'
          }}
        >
          <div 
            style={{ position: 'absolute', top: '20px', right: '30px', color: 'black', fontSize: '40px', cursor: 'pointer', zIndex: 10000 }}
            onClick={(e) => { e.stopPropagation(); setFullScreenMedia(null); }}
          >
            &times;
          </div>
          {fullScreenMedia.endsWith('.mov') || fullScreenMedia.endsWith('.mp4') ? (
            <video 
              src={fullScreenMedia} 
              autoPlay 
              loop 
              muted 
              playsInline 
              style={{ maxWidth: '90vw', maxHeight: '90vh' }} 
              onClick={(e) => e.stopPropagation()}
              controls
            />
          ) : fullScreenMedia.endsWith('.pdf') ? (
            <iframe 
              src={fullScreenMedia} 
              title="PDF Document"
              style={{ width: '90vw', height: '90vh', border: 'none' }} 
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img 
              src={fullScreenMedia} 
              alt="Fullscreen view" 
              style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} 
            />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
