import React from 'react';
import { mc_activity_jpg } from '../assets/images';

export default function Education({ onOpenLightbox }) {
  return (
    <section id="education" className="section-wrap">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">ACADEMIC BACKGROUND</span>
          <h2 className="section-title">
            <i className="fa-solid fa-graduation-cap"></i> ประวัติการศึกษา
          </h2>
          <p className="section-desc">ความมุ่งมั่นทางการศึกษาและโครงงานวิจัยทางธุรกิจ</p>
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
            <p>• นักศึกษาชั้นปีที่ 4</p>
            <div className="edu-status-badge">
              <i className="fa-solid fa-star" style={{ color: '#ffd166' }}></i> ผลการเรียนเฉลี่ยสะสม (GPA) : 3.75
            </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
