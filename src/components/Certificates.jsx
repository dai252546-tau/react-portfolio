import React, { useState } from 'react';

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState('all');

  const certificates = [
    {
      title: 'การอบรมเชิงปฏิบัติการ AI เพื่อการจัดการสารสนเทศ',
      subtitle: 'การเขียนบรรณานุกรม และการจัดทำดัชนีคำ',
      issuer: 'สำนักวิทยบริการและเทคโนโลยีสารสนเทศ มรภ.กำแพงเพชร',
      date: '24 มิถุนายน 2567',
      category: 'tech',
      badge: 'AI & Information Management',
      color: '#0284c7',
      icon: 'fa-robot'
    },
    {
      title: 'Workshop การพัฒนาทักษะอาชีพ 2 อาชีพช่างแต่งหน้าและทำผม',
      subtitle: 'กิจกรรมส่งเสริมทักษะอาชีพและบุคลิกภาพ',
      issuer: 'สำนักบริการวิชาการและจัดหารายได้ มรภ.กำแพงเพชร',
      date: '4 กรกฎาคม 2567',
      category: 'skill',
      badge: 'Workshop ทักษะอาชีพที่ 2',
      color: '#f43f5e',
      icon: 'fa-wand-magic-sparkles'
    },
    {
      title: 'รางวัลชมเชย การแข่งขันนำเสนอแผนธุรกิจ',
      subtitle: 'ภายใต้แนวคิด "สร้างสรรค์อัตลักษณ์สินค้าชุมชนไทยก้าวสู่ Soft Power" ระดับอุดมศึกษา',
      issuer: 'คณะวิทยาการจัดการ มรภ.กำแพงเพชร',
      date: '20 พฤศจิกายน 2567',
      category: 'business',
      badge: '🏆 รางวัลชมเชย แผนธุรกิจ',
      color: '#eab308',
      icon: 'fa-trophy'
    },
    {
      title: 'การอบรมเชิงปฏิบัติการ "การจัดทำแผนธุรกิจ"',
      subtitle: 'ภายใต้โครงการ FMS Young Startup เสริมสร้างศักยภาพผู้ประกอบการรุ่นใหม่',
      issuer: 'คณะวิทยาการจัดการ มรภ.กำแพงเพชร',
      date: '8 พฤศจิกายน 2567',
      category: 'business',
      badge: 'FMS Young Startup',
      color: '#10b981',
      icon: 'fa-lightbulb'
    },
    {
      title: 'การแข่งขันทักษะด้านการจัดการธุรกิจ',
      subtitle: 'โครงการแข่งขันทักษะวิชาชีพ หลักสูตรบริหารธุรกิจบัณฑิต',
      issuer: 'โปรแกรมวิชาการจัดการธุรกิจ คณะวิทยาการจัดการ มรภ.กำแพงเพชร',
      date: '16 กุมภาพันธ์ 2568',
      category: 'business',
      badge: 'แข่งขันทักษะธุรกิจ',
      color: '#6366f1',
      icon: 'fa-briefcase'
    },
    {
      title: 'การอบรมเชิงปฏิบัติการเตรียมความพร้อมการสอบวัดมาตรฐานภาษาอังกฤษ (TOEIC)',
      subtitle: 'ยกระดับทักษะภาษาอังกฤษเพื่อการสื่อสารและการทำงานระดับสากล',
      issuer: 'คณะวิทยาการจัดการ มรภ.กำแพงเพชร',
      date: '18 มกราคม 2568',
      category: 'language',
      badge: 'TOEIC Preparation',
      color: '#0ea5e9',
      icon: 'fa-language'
    }
  ];

  const filtered = activeCategory === 'all' 
    ? certificates 
    : certificates.filter(c => c.category === activeCategory);

  return (
    <section id="certificates" className="section-wrap">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">HONORS &amp; CERTIFICATES</span>
          <h2 className="section-title">
            <i className="fa-solid fa-certificate"></i> เกียรติบัตรและการเข้าร่วมกิจกรรม
          </h2>
          <p className="section-desc">
            หลักฐานความมุ่งมั่นในการเรียนรู้ พัฒนาทักษะวิชาชีพ และการเข้าร่วมแข่งขันในระดับอุดมศึกษา
          </p>

          {/* Filter Buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'ทั้งหมด (6 ใบ)' },
              { id: 'business', label: 'แผนธุรกิจ & Startup' },
              { id: 'tech', label: 'เทคโนโลยี & AI' },
              { id: 'skill', label: 'ทักษะอาชีพ' },
              { id: 'language', label: 'ภาษาอังกฤษ (TOEIC)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  background: activeCategory === tab.id ? 'var(--ocean-primary)' : 'white',
                  color: activeCategory === tab.id ? 'white' : 'var(--text-main)',
                  border: `1px solid ${activeCategory === tab.id ? 'var(--ocean-primary)' : '#cbd5e1'}`,
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeCategory === tab.id ? '0 4px 12px rgba(2,132,199,0.3)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="edu-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {filtered.map((cert, idx) => (
            <div 
              key={idx} 
              className="edu-card" 
              style={{ 
                borderTop: `4px solid ${cert.color}`,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 700, 
                    color: cert.color,
                    background: `${cert.color}15`,
                    padding: '4px 10px',
                    borderRadius: '12px'
                  }}>
                    {cert.badge}
                  </span>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: `${cert.color}20`,
                    color: cert.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem'
                  }}>
                    <i className={`fa-solid ${cert.icon}`}></i>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--ocean-navy)', marginBottom: '8px', lineHeight: '1.4' }}>
                  {cert.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '12px', lineHeight: '1.5' }}>
                  {cert.subtitle}
                </p>
              </div>

              <div style={{ 
                borderTop: '1px solid #f1f5f9', 
                paddingTop: '12px', 
                marginTop: '12px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.82rem',
                color: '#64748b'
              }}>
                <span><i className="fa-solid fa-university"></i> {cert.issuer}</span>
                <span style={{ fontWeight: 600, color: 'var(--ocean-navy)' }}>
                  <i className="fa-regular fa-calendar"></i> {cert.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
