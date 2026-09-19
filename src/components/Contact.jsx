import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ขอบคุณสำหรับข้อความค่ะคุณ ${name}! ระบบได้รับข้อมูลการติดต่อเรียบร้อยแล้วค่ะ`);
    setName('');
    setContact('');
    setMsg('');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span
            className="section-tag"
            style={{ background: 'rgba(0, 180, 216, 0.2)', color: 'var(--ocean-aqua)' }}
          >
            GET IN TOUCH
          </span>
          <h2 className="section-title" style={{ color: 'var(--white)' }}>
            <i className="fa-solid fa-address-book"></i> ช่องทางการติดต่อ
          </h2>
          <p className="section-desc" style={{ color: '#94a3b8' }}>
            ยินดีเปิดรับโอกาสการร่วมงานและสัมภาษณ์งาน สามารถติดต่อได้ตลอดเวลาค่ะ
          </p>
        </div>

        <div className="contact-grid">
          {/* ข้อมูลติดต่อด่วน */}
          <div className="contact-info-card">
            <h3>
              <i className="fa-solid fa-paper-plane"></i> ติดต่อคุณจุไรรัตน์
            </h3>

            <ul className="contact-list">
              <li className="contact-item">
                <a href="tel:0649890768" className="contact-icon-btn" title="โทรเลย">
                  <i className="fa-solid fa-phone"></i>
                </a>
                <div className="contact-details">
                  <strong>เบอร์โทรศัพท์</strong>
                  <a href="tel:0649890768">064-989-0768</a>
                </div>
              </li>

              <li className="contact-item">
                <a href="mailto:Dai252546@gmail.com" className="contact-icon-btn" title="ส่งอีเมล">
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <div className="contact-details">
                  <strong>อีเมลติดต่อ</strong>
                  <a href="mailto:Dai252546@gmail.com">Dai252546@gmail.com</a>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon-btn">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="contact-details">
                  <strong>ที่อยู่ปัจจุบัน</strong>
                  <p>300 หมู่ 6 ตำบลเชียงทอง อำเภอวังเจ้า จังหวัดตาก 63180</p>
                </div>
              </li>

              <li className="contact-item">
                <div className="contact-icon-btn">
                  <i className="fa-solid fa-building-columns"></i>
                </div>
                <div className="contact-details">
                  <strong>สถาบันการศึกษา</strong>
                  <p>มหาวิทยาลัยราชภัฏกำแพงเพชร (คณะวิทยาการจัดการ)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* ฟอร์มส่งข้อความติดต่อกลับ */}
          <div className="contact-form-card">
            <h3 style={{ fontSize: '1.4rem', color: 'var(--white)', marginBottom: '20px' }}>
              <i className="fa-regular fa-comment-dots" style={{ color: 'var(--ocean-aqua)' }}></i> ส่งข้อความถึงฉัน
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="senderName">ชื่อผู้ติดต่อ / บริษัท</label>
                <input
                  type="text"
                  id="senderName"
                  className="form-control"
                  placeholder="เช่น ฝ่ายบุคคล บริษัท เอบีซี จำกัด"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="senderContact">อีเมลหรือเบอร์โทรกลับ</label>
                <input
                  type="text"
                  id="senderContact"
                  className="form-control"
                  placeholder="เช่น hr@company.com หรือ 08X-XXX-XXXX"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="senderMsg">ข้อความ / รายละเอียดตำแหน่งงาน</label>
                <textarea
                  id="senderMsg"
                  rows="3"
                  className="form-control"
                  placeholder="พิมพ์ข้อความที่ต้องการแจ้ง..."
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <i className="fa-solid fa-paper-plane"></i> ส่งข้อความทันที
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
