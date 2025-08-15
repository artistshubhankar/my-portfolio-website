import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Dummy images and resume file paths
const artworks = [
   {
    src: '/my-portfolio-website/images/img1.jpg',
    alt: 'Artwork 1',
    title: 'Shattered Reflection Banaras Then and Now',
    description: 'Medium: Glass, Size: 13.8 × 18 Inches, Year - 2025',
  },
  {
    src: '/my-portfolio-website/images/img2.jpg',
    alt: 'Artwork 2',
    title: ' Echo Of Heart',
    description: 'Medium: Glass, Size: 9×6 Inches, Year - 2024',
  },
  {
    src: '/my-portfolio-website/images/img3.png',
    alt: 'Artwork 3',
    title: 'Carrying Life',
    description: 'Medium: Glass, Size: 12×12 Inches, Year - 2024',
  },
  {
    src: '/my-portfolio-website/images/img8.png',
    alt: 'Artwork 8',
    title: 'Cat',
    description: 'Medium: Glass, Size: 3× 5 Inches, Year - 2024',
  },
   {
    src: '/my-portfolio-website/images/img4.jpg',
    alt: 'Artwork 4',
    title: 'Raku Pottery',
    description: 'Handcrafted ceramic vase with unique glazing technique.',
  },
  {
    src: '/my-portfolio-website/images/img6.jpg',
    alt: 'Artwork 6',
    title: 'Raku Pottery',
    description: 'Handcrafted ceramic vase with unique glazing technique.',
  },
  {
    src: '/my-portfolio-website/images/img7.jpg',
    alt: 'Artwork 7',
    title: 'Raku Pottery',
    description: 'Handcrafted ceramic vase with unique glazing technique.',
  },
  {
    src: '/my-portfolio-website/images/img9.jpg',
    alt: 'Artwork 9',
    title: 'Raku Pottery',
    description: 'Handcrafted ceramic vase with unique glazing technique.',
  },
  {
    src: '/my-portfolio-website/images/img17.jpg',
    alt: 'Artwork 17',
    title: 'Raku Pottery',
    description: 'Handcrafted ceramic vase with unique glazing technique.',
  },
  {
    src: '/my-portfolio-website/images/img10.png',
    alt: 'Artwork 10',
    title: 'Architectural Tea Pot',
    description: 'Medium: Ceramics, Size: 13× 9.5 Inches, Year - 2025',
  },
  {
    src: '/my-portfolio-website/images/img15.png',
    alt: 'Artwork 15',
    title: 'Architectural Tea Pot',
    description: 'Medium: Ceramics, Size: 13× 9.5 Inches, Year - 2025',
  },
  {
    src: '/my-portfolio-website/images/img16.png',
    alt: 'Artwork 16',
    title: 'Architectural Tea Pot',
    description: 'Medium: Ceramics, Size: 13× 9.5 Inches, Year - 2025',
  },
  {
    src: '/my-portfolio-website/images/img13.png',
    alt: 'Artwork 13',
    title: 'Hands That Carry',
    description: 'Medium: Ceramics, Size: 6×2 Inches (per hands), Year - 2025',
  },
];
const exhibition1 = [
  { src: '/my-portfolio-website/images/exi2.jpg', alt: 'Exhibition 1-1' },
  { src: '/my-portfolio-website/images/exi3.jpg', alt: 'Exhibition 1-2' },
  { src: '/my-portfolio-website/images/exi4.jpg', alt: 'Exhibition 1-3' },
];

const exhibition2 = [
  { src: '/my-portfolio-website/images/exi5.jpg', alt: 'Exhibition 2-1' },
  { src: '/my-portfolio-website/images/exi6.jpg', alt: 'Exhibition 2-2' },
  { src: '/my-portfolio-website/images/exi7.jpg', alt: 'Exhibition 2-3' },
  { src: '/my-portfolio-website/images/exi8.jpg', alt: 'Exhibition 2-4' },
];

function Slideshow({ images, onImageClick }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, images.length]);

  return (
    <div className="slideshow-container" onClick={onImageClick}>
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="slideshow-img"
        style={{ cursor: 'pointer' }}
      />
      <div className="slideshow-dots">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`dot${idx === current ? ' active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(idx);
            }}
          />
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section>
      <h2>About Me</h2>
      <p>
        I am <strong>Shubhankar Kumar Biswas</strong>, a final-year Bachelor of Fine Arts (BFA) student at
        Kala Bhavan, Visva-Bharati University, Santiniketan, specializing in <strong>Ceramics and Glass</strong> (Graduating 2026). 
        My artistic practice engages deeply with pottery sculpture, glasswork, and interdisciplinary material exploration. 
        I work extensively with slumping, fusing, casting, molding, and kiln firing processes, while also incorporating surface 
        sensitivity influenced by my elective training in printmaking.
      </p>
      <p>
        I have participated in multiple national and international workshops that expanded my technical vocabulary and collaborative 
        skills, including in ceramics, installation, and glass art. These experiences inform my evolving approach to installation art, 
        process-based making, and material. Through exhibitions, public projects, and hands-on experimentation, I aim to build a distinct 
        yet adaptive visual language rooted in both tradition and contemporary inquiry.
      </p>
    </section>
  );
}

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <a
        href="/my-portfolio-website/resume.pdf"
        download
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume (PDF)
      </a>
      <div style={{ marginTop: '24px', width: '100%', height: '600px' }}>
        <iframe
          src="/my-portfolio-website/resume.pdf"
          title="Resume"
          width="100%"
          height="100%"
          style={{ border: '1px solid #eee', borderRadius: '8px' }}
        />
      </div>
    </section>
  );
}

function Artworks() {
  return (
    <section>
      <h2>Artworks</h2>
      <div className="gallery">
        {artworks.map((art, idx) => (
          <div key={idx} style={{ textAlign: 'center', padding: '8px' }}>
            <img src={art.src} alt={art.alt} className="gallery-img" />
            <h3 style={{ margin: '8px 0 4px 0' }}>{art.title}</h3>
            <p style={{ fontSize: '0.95rem', color: '#444', margin: 0 }}>{art.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


function Exhibition() {
  return (
    <section>
      <h2>Exhibitions</h2>
      <div id="exhibition1" style={{ marginBottom: '40px' }}>
        <Slideshow images={exhibition1} onImageClick={() => {}} />
        <h3>Nandan Gallery</h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '16px' }}>
          Group Exhibition – Nandan Gallery – Santiniketan – 2025
        </p>
      </div>
      <div id="exhibition2">
        <Slideshow images={exhibition2} onImageClick={() => {}} />
        <h3>Hues of Bengal</h3>
        <p style={{ textAlign: 'center', color: '#444', marginBottom: '16px' }}>
          Exploring the boundaries of glass art and mixed media installations in contemporary practice.
        </p>
      </div>
    </section>
  );
}
function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <div className="contact-info">
        <p>
          <strong>📧 Email:</strong> 
          <a href="mailto:artistshubhankar@gmail.com"> artistshubhankar@gmail.com</a>
        </p>
        <p>
          <strong>📞 Phone:</strong> 
          <a href="tel:+919555452173"> +91 95554 52173</a>
        </p>
        <p>
          <strong>💼 LinkedIn:</strong> 
          <a href="https://www.linkedin.com/in/shubhankar-kumar-biswas-28745a24b/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
        </p>
        <p>
          <strong>📷 Instagram:</strong> 
          <a href="https://www.instagram.com/shubhankar_ceramics?igsh=MWlqZ2lxMHVpemN5Yg==" target="_blank" rel="noopener noreferrer"> @shubhankar_ceramics</a>
        </p>
      </div>
    </section>
  );
}
function App() {
  // Scroll to Artworks section on slideshow click
  const handleSlideshowClick = () => {
    const artworksSection = document.getElementById('artworks');
    if (artworksSection) {
      artworksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Shubhankar Kumar Biswas</h1>
        <h3>Ceramics and Glass Artworks</h3>
        <nav>
          <a href="/my-portfolio-website#about">About</a>
          <a href="/my-portfolio-website#resume">Resume</a>
          <a href="/my-portfolio-website#artworks">Artworks</a>
          <a href="/my-portfolio-website#exhibition">Exhibition</a>
          <a href="/my-portfolio-website#Contact">Contact</a>
        </nav>
      </header>
      <main>
        <Slideshow images={artworks.slice(0, 5)} onImageClick={handleSlideshowClick} />
        <div id="about"><About /></div>
        <div id="resume"><Resume /></div>
        <div id="artworks"><Artworks /></div>
        <div id="exhibition"><Exhibition /></div>
        <div id="contact"><Contact /></div>
      </main>
    </div>
  );
}

export default App;