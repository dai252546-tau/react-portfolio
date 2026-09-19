import React from 'react';
import {
  pdf_page_2_png,
  talent_singing_jpg,
  talent_wedding_model_jpg,
  talent_makeup_jpg,
  talent_flower_wire_jpg,
  talent_nail_art_jpg,
  talent_bracelet_png,
} from '../assets/images';

export default function Talent({ onOpenLightbox }) {
  const talents = [
    {
      title: 'ร้องเพลง',
      icon: 'fa-microphone-lines',
      tag: 'Music & Performance',
      desc: 'ความสามารถด้านการขับร้อง ถ่ายทอดอารมณ์เพลง และสร้างบรรยากาศสนุกสนานบนเวทีในกิจกรรมต่าง ๆ',
      color: '#0284c7',
      image: talent_singing_jpg,
      caption: 'ความสามารถพิเศษ: ร้องเพลงบนเวที'
    },
    {
      title: 'ถ่ายแบบชุดแต่งงาน',
      icon: 'fa-camera-retro',
      tag: 'Modeling & Personality',
      desc: 'ประสบการณ์ถ่ายแบบชุดวิวาห์ สื่อสารบุคลิกภาพสง่างาม ทัศนคติมั่นใจ และสะท้อนภาพลักษณ์ที่ดีของแบรนด์',
      color: '#0ea5e9',
      image: talent_wedding_model_jpg,
      caption: 'ความสามารถพิเศษ: ถ่ายแบบชุดแต่งงาน'
    },
    {
      title: 'แต่งหน้า',
      icon: 'fa-wand-magic-sparkles',
      tag: 'Beauty & Makeup Art',
      desc: 'ทักษะศิลปะการแต่งหน้า เสริมสร้างบุคลิกภาพความมั่นใจสำหรับออกงาน พิธีการ และถ่ายภาพโปรไฟล์',
      color: '#38bdf8',
      image: talent_makeup_jpg,
      caption: 'ความสามารถพิเศษ: ช่างแต่งหน้าและเสริมสร้างบุคลิกภาพ'
    },
    {
      title: 'ดอกไม้จากลวดกำมะหยี่',
      icon: 'fa-spa',
      tag: 'Handmade Craft',
      desc: 'งานประดิษฐ์ช่อดอกไม้แฮนด์เมดจากลวดกำมะหยี่อย่างประณีต ใช้ความคิดสร้างสรรค์และความอดทนสูง',
      color: '#06b6d4',
      image: talent_flower_wire_jpg,
      caption: 'ความสามารถพิเศษ: งานประดิษฐ์ดอกไม้จากลวดกำมะหยี่'
    },
    {
      title: 'เพ้นท์เล็บปลอม',
      icon: 'fa-hand-sparkles',
      tag: 'Nail Art Design',
      desc: 'ออกแบบลวดลายเพ้นท์เล็บปลอมตามเทรนด์แฟชั่น ผสมผสานคู่สีและดีไซน์ประณีต',
      color: '#0284c7',
      image: talent_nail_art_jpg,
      caption: 'ความสามารถพิเศษ: ออกแบบและเพ้นท์เล็บปลอม'
    },
    {
      title: 'สร้อยข้อมือลูกปัด (IG: Jewelrybirdstudio)',
      icon: 'fa-gem',
      tag: 'Craft & Small Business',
      desc: 'ร้อยสร้อยข้อมือและเครื่องประดับลูกปัดดีไซน์น่ารัก พร้อมบริหารร้านออนไลน์บน Instagram',
      color: '#0ea5e9',
      image: talent_bracelet_png,
      caption: 'ความสามารถพิเศษ: งานร้อยสร้อยข้อมือลูกปัดแฮนด์เมด (IG: Jewelrybirdstudio)'
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

        {/* แบนเนอร์พรีวิวภาพถ่ายความสามารถพิเศษจาก PDF หน้า 2 */}
        <div 
          style={{
            background: 'white',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            marginBottom: '32px',
            boxShadow: '0 8px 24px rgba(0, 119, 182, 0.08)',
            cursor: 'pointer'
          }}
          onClick={() => onOpenLightbox && onOpenLightbox(pdf_page_2_png, 'ภาพความสามารถพิเศษ (Talent Showcase)', 'ร้องเพลง, ถ่ายแบบชุดแต่งงาน, แต่งหน้า, ดอกไม้ลวดกำมะหยี่, เพ้นท์เล็บปลอม, สร้อยข้อมือลูกปัด')}
          title="คลิกเพื่อดูภาพความสามารถพิเศษขนาดเต็ม"
        >
          <div style={{ position: 'relative', width: '100%', maxHeight: '380px', overflow: 'hidden', background: '#f1f5f9' }}>
            <img 
              src={pdf_page_2_png} 
              alt="Talent Showcase" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              background: 'rgba(5, 22, 42, 0.8)',
              color: 'white',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '0.82rem',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <i className="fa-solid fa-magnifying-glass-plus"></i> คลิกเพื่อดูภาพหน้า Talent จากแฟ้มสะสมผลงาน
            </div>
          </div>
          <div style={{ padding: '16px 24px', background: '#fafbfc', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.85rem', color: 'var(--ocean-navy)', fontWeight: 600 }}>
              <i className="fa-solid fa-images" style={{ color: 'var(--ocean-primary)' }}></i> แกลเลอรีภาพความสามารถพิเศษ 6 ด้าน (จากหน้า 2 ของแฟ้มสะสมผลงาน)
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--ocean-primary)', fontWeight: 600 }}>
              เปิดดูขนาดเต็ม &raquo;
            </span>
          </div>
        </div>

        <div className="hard-skills-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {talents.map((item, idx) => (
            <div 
              key={idx} 
              className="hard-card" 
              style={{ 
                padding: '0',
                overflow: 'hidden',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 16px rgba(0,0,0,0.04)'
              }}
            >
              <div>
                {/* ภาพถ่ายความสามารถพิเศษของแต่ละหัวข้อ */}
                <div 
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '220px',
                    overflow: 'hidden',
                    background: '#f1f5f9',
                    cursor: onOpenLightbox ? 'pointer' : 'default',
                    borderBottom: '1px solid #e2e8f0'
                  }}
                  onClick={() => onOpenLightbox && onOpenLightbox(item.image, item.title, item.caption)}
                  title="คลิกเพื่อดูภาพขยายขนาดเต็ม"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 30%',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    background: 'rgba(5, 22, 42, 0.75)',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <i className="fa-solid fa-magnifying-glass-plus"></i> ดูรูปภาพ
                  </div>
                </div>

                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      fontSize: '0.75rem', 
                      fontWeight: 600, 
                      color: item.color,
                      background: `${item.color}15`,
                      padding: '4px 10px',
                      borderRadius: '12px'
                    }}>
                      {item.tag}
                    </span>
                    <div 
                      className="hard-icon-box" 
                      style={{ 
                        background: `linear-gradient(135deg, var(--ocean-navy), ${item.color})`,
                        width: '36px',
                        height: '36px',
                        fontSize: '1rem',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}
                    >
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                  </div>

                  <h4 style={{ fontSize: '1.12rem', color: 'var(--ocean-navy)', marginBottom: '8px' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
