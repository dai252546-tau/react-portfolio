import React from 'react';

export default function HardSkills() {
  const skills = [
    {
      icon: 'fa-bezier-curve',
      title: 'Graphic & Layout Design',
      desc: 'การออกแบบสื่อสิ่งพิมพ์และกราฟิกออนไลน์',
    },
    {
      icon: 'fa-desktop',
      title: 'Presentation Design',
      desc: 'ออกแบบสไลด์นำเสนอทางธุรกิจให้น่าสนใจ',
    },
    {
      icon: 'fa-photo-film',
      title: 'Image & Video Editing',
      desc: 'ตัดต่อวิดีโอสั้นและตกแต่งภาพโปรโมต',
    },
    {
      icon: 'fa-wand-magic-sparkles',
      title: 'การสร้างสื่อด้วย AI',
      desc: 'Generative AI สำหรับงานกราฟิกและคอนเทนต์',
    },
    {
      icon: 'fa-bullhorn',
      title: 'สื่อประชาสัมพันธ์ & ใบประกาศ',
      desc: 'จัดทำใบรับสมัคร สื่อองค์กร และประกาศต่างๆ',
    },
    {
      icon: 'fa-chart-pie',
      title: 'แผนธุรกิจเบื้องต้น',
      desc: 'การวิเคราะห์ตลาด 4Ps และกลยุทธ์บริการ',
    },
  ];

  return (
    <section id="hard-skills" className="section-wrap">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">TECHNICAL COMPETENCIES</span>
          <h2 className="section-title">
            <i className="fa-solid fa-laptop-code"></i> Hard Skills
          </h2>
          <p className="section-desc">ทักษะทางเทคนิคเฉพาะทางด้านการตลาด สื่อ และการจัดการ</p>
        </div>

        <div className="hard-skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="hard-card">
              <div className="hard-icon-box">
                <i className={`fa-solid ${skill.icon}`}></i>
              </div>
              <div>
                <h4>{skill.title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
