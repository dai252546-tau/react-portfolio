import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Education from './components/Education';
import Talent from './components/Talent';
import Certificates from './components/Certificates';
import Performance from './components/Performance';
import SoftSkills from './components/SoftSkills';
import HardSkills from './components/HardSkills';
import Tools from './components/Tools';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LightboxModal from './components/LightboxModal';

export default function App() {
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    imgSrc: '',
    title: '',
    desc: '',
  });

  const handleOpenLightbox = (imgSrc, title, desc) => {
    setLightbox({
      isOpen: true,
      imgSrc,
      title,
      desc,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Profile onOpenLightbox={handleOpenLightbox} />
      <Education onOpenLightbox={handleOpenLightbox} />
      <Talent />
      <Certificates />
      <Performance onOpenLightbox={handleOpenLightbox} />
      <SoftSkills />
      <HardSkills />
      <Tools />
      <Activities onOpenLightbox={handleOpenLightbox} />
      <Contact />
      <Footer />
      <LightboxModal
        isOpen={lightbox.isOpen}
        imgSrc={lightbox.imgSrc}
        title={lightbox.title}
        desc={lightbox.desc}
        onClose={handleCloseLightbox}
      />
    </>
  );
}
