import React, { useState } from 'react';
import { mc_activity_jpg, pdf_page_1_png } from '../assets/images';

export default function Education({ onOpenLightbox }) {
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <section id="education" className="section-wrap">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ACADEMIC BACKGROUND</span>
          <h2 className="section-title">
            <i className="fa-solid fa-graduation-cap"></i> ประวัติการศึกษา &amp; ผลการเรียน
          </h2>
          <p className="section-desc">ความมุ่งมั่นทางการศึกษา เกียรตินิยม โครงงานวิจัย และประวัติการฝึกอบรม</p>
        </div>

        <div className="edu-grid">
          {/* การศึกษาระดับปริญญาตรี */}
          <div className="edu-card">
            <div className="edu-card-header">
              <div className="edu-icon">
                <i className="fa-solid fa-university"></i>
              </div>
              <div>
                <h3>ระดับปริญญาตรี (บธ.บ.)</h3>
                <p style={{ color: 'var(--ocean-primary)', fontWeight: 600 }}>
                  มหาวิทยาลัยราชภัฏกำแพงเพชร
                </p>
              </div>
            </div>
            <p>• คณะวิทยาการจัดการ สาขาวิชาบริหารธุรกิจ (การจัดการธุรกิจ)</p>
            <p>• นักศึกษาชั้นปีที่ 4 (รหัสนักศึกษา 661420417 เข้าปี 2566)</p>
            <p>• จำนวนหน่วยกิตสะสม: 108 หน่วยกิต | ค่าคะแนนเฉลี่ย: 405.0/108</p>
            <div className="edu-status-badge" style={{ marginBottom: '12px' }}>
              <i className="fa-solid fa-star" style={{ color: '#ffd166' }}></i> ผลการเรียนเฉลี่ยสะสม (GPA) : 3.75
            </div>

            {/* การทดสอบมาตรฐานทักษะ */}
            <div style={{ background: '#f0f9ff', padding: '12px', borderRadius: '8px', border: '1px solid #bae6fd', marginBottom: '14px' }}>
              <h5 style={{ fontSize: '0.85rem', color: 'var(--ocean-navy)', marginBottom: '4px' }}>
                <i className="fa-solid fa-certificate" style={{ color: 'var(--ocean-primary)' }}></i> ผลการทดสอบทักษะมาตรฐาน:
              </h5>
              <p style={{ fontSize: '0.8rem', color: '#334155', margin: '2px 0' }}>
                ✓ ทักษะภาษาอังกฤษ: เสริมทักษะ 1, 2, 3 (ผ่านทุกเกณฑ์)
              </p>
              <p style={{ fontSize: '0.8rem', color: '#334155', margin: '2px 0' }}>
                ✓ ทักษะคอมพิวเตอร์: ชุดที่ 1 &amp; ชุดที่ 2 ความรู้และการใช้งานเบื้องต้น (ผ่าน)
              </p>
            </div>

            {/* แสดงภาพเอกสาร Transcript จาก PDF โดยตรง */}
            <div 
              style={{
                borderRadius: '12px',
                border: '1px solid #bae6fd',
                background: '#f8fafc',
                overflow: 'hidden',
                marginBottom: '16px',
                boxShadow: '0 4px 12px rgba(2, 132, 199, 0.06)'
              }}
            >
              <div 
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '240px',
                  background: '#f1f5f9',
                  overflow: 'hidden',
                  cursor: onOpenLightbox ? 'pointer' : 'default',
                  borderBottom: '1px solid #e2e8f0'
                }}
                onClick={() => onOpenLightbox && onOpenLightbox(pdf_page_1_png, 'ใบแสดงผลการเรียน (Transcript)', 'ใบระเบียนผลการเรียน มหาวิทยาลัยราชภัฏกำแพงเพชร บธ.บ. การจัดการธุรกิจ GPA 3.75')}
                title="คลิกเพื่อดูใบระเบียนผลการเรียน (Transcript) ขนาดเต็ม"
              >
                <img 
                  src={pdf_page_1_png} 
                  alt="ใบระเบียนผลการเรียน (Transcript)" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  background: 'rgba(5, 22, 42, 0.8)',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  backdropFilter: 'blur(4px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px'
                }}>
                  <i className="fa-solid fa-magnifying-glass-plus"></i> คลิกเพื่อดูเอกสาร Transcript ฉบับเต็ม
                </div>
              </div>
              <div style={{ padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafbfc' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--ocean-navy)', fontWeight: 600 }}>
                  <i className="fa-solid fa-file-invoice" style={{ color: 'var(--ocean-primary)' }}></i> ใบระเบียนผลการเรียน (Transcript) มรภ.กำแพงเพชร
                </span>
                <span 
                  onClick={() => onOpenLightbox && onOpenLightbox(pdf_page_1_png, 'ใบแสดงผลการเรียน (Transcript)', 'ใบระเบียนผลการเรียน มหาวิทยาลัยราชภัฏกำแพงเพชร บธ.บ. การจัดการธุรกิจ GPA 3.75')}
                  style={{ fontSize: '0.78rem', color: 'var(--ocean-primary)', fontWeight: 600, cursor: 'pointer' }}
                >
                  ขยายดู &raquo;
                </span>
              </div>
            </div>

            {/* ปุ่มเปิดดูรายละเอียดสรุปเกรด */}
            <button
              onClick={() => setShowTranscript(!showTranscript)}
              style={{
                width: '100%',
                background: showTranscript ? 'var(--ocean-navy)' : 'var(--ocean-primary)',
                color: 'white',
                border: 'none',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '14px',
                transition: 'all 0.2s'
              }}
            >
              <i className={`fa-solid ${showTranscript ? 'fa-eye-slash' : 'fa-list-check'}`}></i>
              {showTranscript ? 'ซ่อนสรุปผลการเรียนรายภาค' : 'ดูสรุปผลการเรียนรายภาค (GPA Breakdown)'}
            </button>

            {/* ตาราง Transcript ขยาย */}
            {showTranscript && (
              <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '10px', padding: '14px', marginBottom: '14px', fontSize: '0.82rem' }}>
                <h5 style={{ color: 'var(--ocean-navy)', marginBottom: '8px', fontWeight: 700 }}>
                  <i className="fa-solid fa-award" style={{ color: '#0284c7' }}></i> สรุปผลการเรียนรายภาคการศึกษา (GPA)
                </h5>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
                  <div style={{ background: 'white', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                    <strong>ภาค 1/66:</strong> GPA 4.00 (60.0/15)
                  </div>
                  <div style={{ background: 'white', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                    <strong>ภาค 2/66:</strong> GPA 3.35 (70.5/21)
                  </div>
                  <div style={{ background: 'white', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                    <strong>ภาค 1/67:</strong> GPA 3.66 (66.0/18)
                  </div>
                  <div style={{ background: 'white', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                    <strong>ภาค 2/67:</strong> GPA 4.00 (72.0/18)
                  </div>
                  <div style={{ background: 'white', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                    <strong>ภาค 1/68:</strong> GPA 3.58 (64.5/18)
                  </div>
                  <div style={{ background: 'white', padding: '8px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                    <strong>ภาค 2/68:</strong> GPA 4.00 (72.0/18)
                  </div>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#64748b', margin: 0 }}>
                  * ผลการเรียนเกรด A ในวิชาแกนสำคัญ: การจัดการธุรกิจ, องค์กรและการจัดการ, การวางแผนโครงการ, การวิเคราะห์ข้อมูลเพื่อการตัดสินใจทางธุรกิจ
                </p>
              </div>
            )}

            {/* โครงงานวิจัย Projects */}
            <div className="edu-project-box">
              <h4>
                <i className="fa-solid fa-book-bookmark"></i> ผลงานวิจัย / โครงงาน (Project):
              </h4>
              <p>
                "พฤติกรรมการบริโภคอาหารมื้อกลางวันและปัจจัยส่วนประสมทางการตลาดบริการที่มีผลต่อการตัดสินใจบริโภคอาหาร ณ ศูนย์อาหารของมหาวิทยาลัยราชภัฏกำแพงเพชร"
              </p>
            </div>
          </div>

          {/* การอบรม Training */}
          <div className="edu-card" style={{ borderTopColor: 'var(--ocean-navy)' }}>
            <div className="edu-card-header">
              <div className="edu-icon" style={{ background: '#eef2ff', color: '#4338ca' }}>
                <i className="fa-solid fa-award"></i>
              </div>
              <div>
                <h3>ประวัติการฝึกอบรม (Training)</h3>
                <p style={{ color: 'var(--text-muted)' }}>การพัฒนาทักษะวิชาชีพและบุคลิกภาพ</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
              <div className="edu-project-box" style={{ borderLeftColor: 'var(--ocean-primary)', marginTop: 0 }}>
                <h4>
                  <i className="fa-solid fa-certificate"></i> โครงการบุคลิกภาพดี มีมารยาท สร้างโอกาสทางธุรกิจ
                </h4>
                <p>
                  ปีที่เข้าร่วม: พ.ศ. 2569 | ปฏิบัติหน้าที่พิธีกรดำเนินรายการ เสริมสร้างทักษะการวางตัว และการสื่อสารทางธุรกิจ
                </p>
                <span
                  onClick={() =>
                    onOpenLightbox(
                      mc_activity_jpg,
                      'ภาพกิจกรรมพิธีกรดำเนินรายการ',
                      'โครงการบุคลิกภาพดี มีมารยาท สร้างโอกาสทางธุรกิจ'
                    )
                  }
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '6px',
                    fontSize: '0.82rem',
                    color: 'var(--ocean-primary)',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }}
                >
                  <i className="fa-solid fa-image"></i> ดูรูปภาพขณะปฏิบัติหน้าที่พิธีกร &raquo;
                </span>
              </div>
              <div className="edu-project-box" style={{ borderLeftColor: 'var(--ocean-aqua)', marginTop: 0 }}>
                <h4>
                  <i className="fa-solid fa-chalkboard-user"></i> หลักสูตรออนไลน์การพัฒนาบุคลิกภาพและการพูด
                </h4>
                <p>
                  เพื่อสร้าง Personal Branding (พ.ศ. 2569) | เทคนิคการสื่อสารในที่สาธารณะและการสร้างภาพลักษณ์ความเป็นมืออาชีพ
                </p>
              </div>
              <div className="edu-project-box" style={{ borderLeftColor: '#f59e0b', marginTop: 0 }}>
                <h4>
                  <i className="fa-solid fa-robot"></i> อบรม AI เพื่อการจัดการสารสนเทศและการวิจัย
                </h4>
                <p>
                  สำนักวิทยบริการและเทคโนโลยีสารสนเทศ (พ.ศ. 2567) | การประยุกต์ใช้ AI ในการสืบค้นข้อมูล การเขียนบรรณานุกรม และจัดทำดัชนีคำ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
