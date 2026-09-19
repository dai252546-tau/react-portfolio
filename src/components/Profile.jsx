import React from 'react';
import { profile_png } from '../assets/images';

export default function Profile({ onOpenLightbox }) {
  return (
    <section id="profile" className="section-wrap">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PERSONAL PROFILE</span>
          <h2 className="section-title">
            <i className="fa-solid fa-id-card"></i> ข้อมูลส่วนตัว
          </h2>
        </div>

        <div className="profile-card">
          {/* ฝั่งด้านข้าง: รูปถ่ายโปรไฟล์ */}
          <div className="profile-photo-col">
            <div
              className="photo-frame"
              onClick={() =>
                onOpenLightbox(
                  profile_png,
                  'นางสาวจุไรรัตน์ แสงกือ (ตาว)',
                  'นักศึกษาชั้นปีที่ 4 สาขาวิชาการจัดการธุรกิจ มหาวิทยาลัยราชภัฏกำแพงเพชร'
                )
              }
              title="คลิกเพื่อดูภาพขยาย"
            >
              <div className="photo-inner">
                <img
                  src={profile_png}
                  alt="นางสาวจุไรรัตน์ แสงกือ"
                />
              </div>
              <span className="photo-badge">
                <i className="fa-solid fa-circle-check" style={{ color: '#48cae4' }}></i> Active
              </span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              <i className="fa-solid fa-magnifying-glass-plus"></i> คลิกที่รูปเพื่อดูภาพขนาดเต็ม
            </p>
          </div>

          {/* ฝั่งรายละเอียดข้อมูลส่วนตัว */}
          <div className="profile-info-col">
            <h2>นางสาวจุไรรัตน์ แสงกือ</h2>
            <div className="profile-nickname">ชื่อเล่น: ตาว (Tao) • อายุ 23 ปี</div>

            <div className="profile-meta-grid">
              <div className="meta-box">
                <i className="fa-solid fa-cake-candles"></i>
                <span>25 มีนาคม 2546</span>
              </div>
              <div className="meta-box">
                <i className="fa-solid fa-briefcase"></i>
                <span>ตำแหน่งที่ฝึก: Marketing / HR</span>
              </div>
              <div className="meta-box">
                <i className="fa-solid fa-phone"></i>
                <span>064-989-0768</span>
              </div>
              <div className="meta-box">
                <i className="fa-solid fa-location-dot"></i>
                <span>อ.วังเจ้า จ.ตาก 63180</span>
              </div>
            </div>

            {/* จุดมุ่งหมายในการทำงาน */}
            <div className="objective-quote">
              <strong>
                <i className="fa-solid fa-bullseye" style={{ color: 'var(--ocean-primary)' }}></i> จุดมุ่งหมายในการทำงาน (Career Objective):
              </strong>
              "นักศึกษาชั้นปีที่ 4 สาขาวิชาการจัดการธุรกิจ มหาวิทยาลัยราชภัฏกำแพงเพชร ที่มีความชอบและทักษะด้านงานออกแบบสื่อสร้างสรรค์ การตลาด และมีความสนใจด้านการบริหารทรัพยากรมนุษย์ มีความตั้งใจนำความรู้ทางธุรกิจ ความคิดสร้างสรรค์ และทักษะการทำงานร่วมกับผู้อื่นมาประยุกต์ใช้ในการทำงานจริง พร้อมเปิดรับการเรียนรู้และพัฒนาตนเองอย่างต่อเนื่อง"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
