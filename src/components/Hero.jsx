import React from 'react';

export default function Hero() {
  return (
    <header id="hero" className="hero-section">
      <div className="ocean-glow-orb"></div>
      <div className="hero-title-wrapper">
        <h1 className="hero-big-text">PORTFOLIO</h1>
      </div>
      <p className="hero-subtitle">
        แฟ้มสะสมผลงานดิจิทัล | <strong>นางสาวจุไรรัตน์ แสงกือ</strong> (ตาว)
      </p>
      <div className="hero-badges">
        <span className="hero-badge">
          <i className="fa-solid fa-chart-line"></i> MARKETING &amp; DESIGN
        </span>
        <span className="hero-badge">
          <i className="fa-solid fa-users-gear"></i> HUMAN RESOURCES (HR)
        </span>
        <span className="hero-badge">
          <i className="fa-solid fa-graduation-cap"></i> GPA 3.75 (เกียรตินิยม)
        </span>
      </div>
      <a href="#profile" className="scroll-down-cue" title="เลื่อนลงดูข้อมูล">
        <i className="fa-solid fa-chevron-down"></i>
      </a>
    </header>
  );
}
