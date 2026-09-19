import React from 'react';

export default function Tools() {
  const tools = [
    {
      icon: 'fa-brands fa-microsoft',
      title: 'Microsoft Office',
      sub: 'Word, Excel, PowerPoint',
    },
    {
      icon: 'fa-brands fa-google',
      title: 'Google Workspace',
      sub: 'Docs, Sheets, Drive, Meet',
    },
    {
      icon: 'fa-solid fa-chart-simple',
      title: 'Data Studio',
      sub: 'Looker Studio (Dashboard)',
    },
    {
      icon: 'fa-solid fa-bell',
      title: 'Forms & Line',
      sub: 'Google Forms - Line Notify',
    },
    {
      icon: 'fa-solid fa-palette',
      title: 'Canva',
      sub: 'Graphic, Poster & Slides',
    },
    {
      icon: 'fa-solid fa-video',
      title: 'CapCut',
      sub: 'Reels, TikTok & Video Edit',
    },
  ];

  return (
    <section id="tools" className="section-wrap">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SOFTWARE STACK</span>
          <h2 className="section-title">
            <i className="fa-solid fa-screwdriver-wrench"></i> Tools &amp; Technologies
          </h2>
          <p className="section-desc">โปรแกรมและระบบดิจิทัลที่ใช้งานได้อย่างคล่องแคล่ว</p>
        </div>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-box">
              <i className={tool.icon}></i>
              <h4>{tool.title}</h4>
              <span>{tool.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
