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

  const MediaVideo = ({ src, className, style }) => (
    <video 
      src={src} 
      className={className}
      autoPlay 
      loop 
      muted 
      playsInline 
      onClick={() => setFullScreenMedia(src)}
      style={{ cursor: 'zoom-in', objectFit: 'cover', ...style }}
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
              <div className="style-role-title">Co-Founder & AI Engineer</div>
              <div className="style-employee">Peace4</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Co-founded with Cosimo de Barry, Peace4 is a city guide for London. It focuses on aggregating and curating the "long tail" of the city's cultural life, with the aim of helping young people explore slightly alternative and rewarding experiences.
                </div>
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Peace4 can also be understood as an agentic organisation; its real-life analogue being The Village Voice, LA Weekly or Time Out. Peace4 has been structured as a directed acyclic graph, with four stages: Data Ingestion, Curation, Composition, Distribution + Maintenance. Human-in-the-loop has been implemented at critical junctures.
                </div>
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
                  Central to our proposed concept was the combination of a high gloss surface with a low LED screen. This was both a nod to the visual language of basketball, but also a decision to focus on creating a heightened performance space to elevate the artistry of the talent.
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
                  My two years at Foster + Partners, on Poland's CPK Airport, taught me how complex systems of massive scale are shipped. Within a team of over 300 people, I worked at the intersection of raw data and spatial integration.
                </div>
                <div className="gallery-paragraph style-paragraph">
                  I extracted and cleaned heavy datasets from global computational models (ETABS) and managed the structural coordination with the architectural envelope. It was an intensive masterclass in cross-functional collaboration, technical communication, and high-stakes delivery.
                </div>
                <MediaImage src="/cpk-1.png" alt="CPK Airport Aerial" className="gallery-landscape" style={{ filter: 'grayscale(100%)' }} />
                <MediaImage src="/cpk-2.jpg" alt="CPK Airport Night Visual" className="gallery-landscape" style={{ filter: 'grayscale(100%)' }} />
                <MediaImage src="/cpk-3.jpg" alt="CPK Airport Retail Level" className="gallery-landscape" style={{ filter: 'grayscale(100%)' }} />
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  My time at Foster + Partners also exposed me to a culture of craft and innovation. While I ultimately decided to leave the AEC industry, it was a privilege to see and participate in a process that consistently produces groundbreaking work.
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
                  "Bunbury" is a decentralized, proximity-based calling card application built for the Open Data Institute’s (ODI) Socially Linked Data Hackathon, where it was awarded First Place. It reimagines digital networking by allowing users to securely exchange highly contextual "projections" of their personal data with people physically nearby, completely independent of centralized databases.
                </div>
                <MediaImage src="/hackathon-win.jpg" alt="1st Place Solid Hackathon" className="gallery-landscape" />
                <div className="gallery-paragraph style-paragraph">
                  A Solid Pod (Personal Online Data store) is a secure, personal web server that gives users total sovereign ownership over their data. Instead of handing personal information over to a corporation's centralized database, users bring their own Pod to the Bunbury application, granting temporary access for the app to read their profile and store their calling cards locally.
                </div>
                <div className="gallery-paragraph style-paragraph">
                  The Solid Protocol is a set of open web standards—championed by Sir Tim Berners-Lee—designed to decentralize the web. Bunbury leverages these protocols (including WebID for universal authentication and RDF/vCard ontologies for structured data) to ensure that users' identities and connections are interoperable and not locked into any single ecosystem.
                </div>
                <MediaImage src="/bunbury-app.png" alt="Bunbury Application" className="gallery-square" style={{ alignSelf: 'flex-start' }} />
                <div className="gallery-paragraph style-paragraph">
                  The diagrams illustrate Bunbury's "severed storage" and peer-to-peer approach. The React application hosts only the UI and business logic on the client's browser, meaning when two users cross paths, the app facilitates a direct, decentralized handshake: writing access permissions directly from User A's Pod to User B's Pod without a central server ever seeing the data.
                </div>
                <MediaImage src="/solid-diagram-1.png" alt="Bunbury Architecture Diagram" className="gallery-square" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
                <MediaImage src="/solid-diagram-2.png" alt="Peer to Peer Handshake Diagram" className="gallery-square" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
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
                  Thanks to the Evens Foundation I had a chance to speak about the intersection of attention economies, parasocial trust, and decentralized political communication. With a longstanding interest in political science and media theory I drew on the ideas of Max Weber and Marshall McLuhan to try to articulate my own perception of the media environment my generation inhabits.
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
                <div className="gallery-paragraph style-paragraph">
                  My initial pipeline was a complex, six-stage architecture that ran parallel face, pose, and mask models, relying on custom association logic to untangle overlapping individuals and score extraction quality.
                </div>
                <MediaImage src="/jamat-2.png" alt="Flowchart Pipeline" className="gallery-square" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
                <div className="gallery-paragraph style-paragraph">
                  I ultimately pivoted to a streamlined, two-stage approach that uses YOLO for robust instance segmentation and physically isolates each subject before passing them through BiRefNet. This revised architecture proved vastly superior because it eliminated the massive computational overhead of redundant feature extraction while delivering much cleaner, photographic-quality alpha mattes around fine details like hair and clothing.
                </div>
                <MediaImage src="/jamat-5.png" alt="Revised Architecture Flowchart" className="gallery-landscape" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
                <MediaImage src="/jamat-3.jpg" alt="Extracted Subjects Grid" className="gallery-landscape" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
                <div className="gallery-paragraph style-paragraph">
                  I now sought a way to go from the fragment to the the whole character. My attempts to use pose-guided person image synthesis where far from successful. The best result was obtained with pose-constrained and multi-focal conditioned latent diffusion, but even here the slender physiques and form-fitting garments prevalent in its fashion heavy training data made it unsuitable.
                </div>
                <MediaImage src="/jamat-4.png" alt="PC-MCLD Transformation" className="gallery-landscape" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
                <div className="gallery-paragraph style-paragraph">
                  I finally succeeded with a Gemini (Imagen 3). Most suprising was how it outperformed Flux 2; its multimodal architecture proved far more capable at simultaneously reasoning across distinct visual inputs and it accurately transferred the vintage photo's identity and specific pose into the three-view layout template. In contrast, FLUX struggled to reconcile competing visual references and maintain multi-angle character consistency.
                </div>
                <MediaImage src="/jamat-arch.png" alt="Architecture Comparison" className="gallery-landscape" style={{ objectFit: 'contain' }} />
                <MediaImage src="/jamat-characters.png" alt="Character Extraction" className="gallery-square" style={{ objectFit: 'contain', backgroundColor: 'black' }} />
              </div>
            </div>
          </div>

          <div className="cv-grid">
            <div className="style-date">June 2026</div>
            <div>
              <div className="style-role-title">Cut Out Pipeline</div>
              <div className="style-employee">Study</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  With this study my goal was to engineer a system that could intelligently identify the salient focal points of an image, such as a character's face or silhouette, and then crop the image as though the main subject had been cut out with a pair of scissors. This pipeline would be only one module in a system handling a large number of images. A key requirement was to minimise any false positives. My goal was quality over quantity.
                </div>
                <div className="gallery-paragraph style-paragraph">
                  Initially, I experimented with multimodal LLMs to generate bounding boxes for the subjects. However, these models hallucinated coordinates and produced rigid rectangles that couldn't handle organic silhouettes. I then tested general segmentation models like SAM, but they easily became confused by chaotic cinematic backgrounds, generating fragmented masks and unacceptable false positives.
                </div>
                <MediaImage src="/cutout-flow1.png" alt="LLM to SAM Flowchart" className="gallery-landscape" style={{ objectFit: 'contain', backgroundColor: 'white', width: '473px', height: '278px' }} />
                <div className="gallery-paragraph style-paragraph">
                  To achieve strict quality control, I abandoned LLM spatial reasoning in favor of a deterministic computer vision pipeline. I implemented an OpenCV Deep Neural Network as a strict validation gate: if the system couldn't confidently detect a human face or if the subject was too small, the image was safely skipped. For approved images, the pipeline ran parallel, specialized segmentation models to guarantee the subject was perfectly isolated.
                </div>
                <MediaImage src="/cutout-flow2.png" alt="OpenCV Flowchart" className="gallery-landscape" style={{ objectFit: 'contain', backgroundColor: 'white', width: '473px', height: '278px' }} />
                <div className="gallery-paragraph style-paragraph">
                  To achieve the clean, 'scissor-cut' aesthetic required for professional layouts, I processed the raw segmentation masks through a series of morphological transformations. By stretching a mathematical Convex Hull around the subject and simplifying the vertices, the engine successfully converted noisy AI pixel-data into a sharp, geometric safety-margin ready for automated typography wrapping.
                </div>
                <MediaImage src="/cutout-flow3.png" alt="Morphological Flowchart" className="gallery-landscape" style={{ objectFit: 'contain', backgroundColor: 'white', width: '473px', height: '278px' }} />
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
                <MediaImage src="/network-5.jpg" alt="Graph" className="gallery-square" style={{ objectFit: 'contain', backgroundColor: 'white' }} />
              </div>
            </div>
          </div>

          <div className="cv-grid mt-40">
            <div className="style-date">Jan 2025</div>
            <div>
              <div className="style-role-title">Mining & Urban Development in Kolwezi, DRC</div>
              <div className="style-employee">Research Assistant</div>
              
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Exploring another tech frontier, I acted as a research assistant for a Cambridge University dissertation, travelling to South Congo to conduct on-the-ground spatial research and analyze the impact of industrial mining on urban development.
                </div>
                <MediaImage src="/congo-1.jpg" alt="Kolwezi Landscape 1" className="gallery-landscape" />
                <MediaImage src="/congo-2.jpg" alt="Kolwezi Landscape 2" className="gallery-landscape" style={{ objectPosition: 'bottom' }} />
                <MediaImage src="/congo-3.jpg" alt="Kolwezi Landscape 3" className="gallery-landscape" />
                <MediaImage src="/congo-4.jpg" alt="Kolwezi Portrait" className="gallery-square" style={{ objectPosition: 'bottom' }} />
                <MediaImage src="/congo-5.jpg" alt="Kolwezi Landscape 4" className="gallery-landscape" />
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
                <div className="gallery-paragraph style-paragraph">
                  My interdisciplinary master's degree combined architecture, environmental, and structural engineering. The most demanding projects began with fuzzy, ambiguous briefs that required synthesizing all three disciplines. Because design problems are inherently under-defined, offering infinite valid solutions and countless variables to optimize, success required exploring broadly to develop a distinct perspective.
                </div>
                <div className="gallery-paragraph style-paragraph">
                  Once that perspective was established one would impose rigorous logical constraints, formalise the messy problem space, and build a structural argument to defend the final proposal.
                </div>
                <MediaImage src="/bartlett-section.jpg" alt="Architecture Section" className="gallery-landscape" />
              </div>
              <div className="gallery-scroll">
                <div className="gallery-paragraph style-paragraph">
                  Throughout my architectural education I gravitated towards computational tools and programatic problem solving over traditional design methods. This culminated in my final year dissertation in which I used advanced numerical simulations to predict failure in epoxy-tied pre-tensioned structures under thermal stress.
                </div>
                <MediaPdf src="/dissertation.pdf" thumbnailSrc="/dissertation-thumb.jpg" alt="Dissertation Document" className="gallery-square" />
                <div className="gallery-paragraph style-paragraph">
                  In an early design project I prototyped accross hardware and software, exploring primitive computer vision algorithms. I had been briefed to create a visual representation of an enviromental phemonema at a site. I ended up building an array of windcatchers, tracking them from above and ploting the resultant movements.
                </div>
                <MediaVideo src="/surf-features.mov" className="gallery-landscape" style={{ objectFit: 'contain' }} />
                <MediaImage src="/uni-1.jpg" alt="University Installation Structure" className="gallery-square" style={{ filter: 'grayscale(100%)' }} />
                <MediaImage src="/uni-2.jpg" alt="Installation Motor Detail" className="gallery-landscape" style={{ filter: 'grayscale(100%)' }} />
                <MediaImage src="/uni-3.jpg" alt="Installation Interaction" className="gallery-landscape" style={{ filter: 'grayscale(100%)' }} />
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
