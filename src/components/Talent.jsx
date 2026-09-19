import React from 'react';

export default function Talent() {
  const talents = [
    {
      title: 'ร้องเพลง',
      icon: 'fa-microphone-lines',
      tag: 'Music & Performance',
      desc: 'ความสามารถด้านการขับร้อง ถ่ายทอดอารมณ์เพลง และสร้างบรรยากาศสนุกสนานบนเวทีในกิจกรรมต่าง ๆ',
      color: '#0284c7'
    },
    {
      title: 'ถ่ายแบบชุดแต่งงาน',
      icon: 'fa-camera-retro',
      tag: 'Modeling & Personality',
      desc: 'ประสบการณ์ถ่ายแบบชุดวิวาห์ สื่อสารบุคลิกภาพสง่างาม ทัศนคติมั่นใจ และสะท้อนภาพลักษณ์ที่ดีของแบรนด์',
      color: '#0ea5e9'
    },
    {
      title: 'แต่งหน้า',
      icon: 'fa-wand-magic-sparkles',
      tag: 'Beauty & Makeup Art',
      desc: 'ทักษะศิลปะการแต่งหน้า เสริมสร้างบุคลิกภาพความมั่นใจสำหรับออกงาน พิธีการ และถ่ายภาพโปรไฟล์',
      color: '#38bdf8'
    },
    {
      title: 'ดอกไม้จากลวดกำมะหยี่',
      icon: 'fa-spa',
      tag: 'Handmade Craft',
      desc: 'งานประดิษฐ์ช่อดอกไม้แฮนด์เมดจากลวดกำมะหยี่อย่างประณีต ใช้ความคิดสร้างสรรค์และความอดทนสูง',
      color: '#06b6d4'
    },
    {
      title: 'เพ้นท์เล็บปลอม',
      icon: 'fa-hand-sparkles',
      tag: 'Nail Art Design',
      desc: 'ออกแบบลวดลายเพ้นท์เล็บปลอมตามเทรนด์แฟชั่น ผสมผสานคู่สีและดีไซน์ประณีต',
      color: '#0284c7'
    },
    {
      title: 'สร้อยข้อมือลูกปัด (IG: Jewelrybirdstudio)',
      icon: 'fa-gem',
      tag: 'Craft & Small Business',
      desc: 'ร้อยสร้อยข้อมือและเครื่องประดับลูกปัดดีไซน์น่ารัก พร้อมบริหารร้านออนไลน์บน Instagram',
      color: '#0ea5e9'
    }
  ];

  return (
    <section id="talents" className="section-wrap" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">SPECIAL TALENTS</span>
          <h2 className="section-title">
            <i className="fa-solid fa-star"></i> ความสามารถพิเศษ (Talent)
          </h2>
          <p className="section-desc">
            ทักษะความคิดสร้างสรรค์ ศิลปะ และความสามารถเฉพาะตัวที่ช่วยเติมเต็มบุคลิกภาพและสร้างมูลค่าเพิ่ม
          </p>
        </div>

        <div className="hard-skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
          {talents.map((item, idx) => (
            <div key={idx} className="hard-card" style={{ padding: '24px', alignItems: 'flex-start' }}>
              <div 
                className="hard-icon-box" 
                style={{ 
                  background: `linear-gradient(135deg, var(--ocean-navy), ${item.color})`,
                  width: '52px',
                  height: '52px',
                  fontSize: '1.4rem'
                }}
              >
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{item.title}</h4>
                </div>
                <span style={{ 
                  display: 'inline-block', 
                  fontSize: '0.75rem', 
                  fontWeight: 600, 
                  color: 'var(--ocean-primary)',
                  background: '#e0f2fe',
                  padding: '2px 8px',
                  borderRadius: '12px',
                  marginBottom: '8px'
                }}>
                  {item.tag}
                </span>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
