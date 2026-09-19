import React, { useState } from 'react';
import {
  perf_dashboard_png,
  perf_line_notify_png,
  perf_recruitment_system_png,
  perf_hr_poster_png,
  perf_admission_poster_jpg,
  perf_banner_maedaoruang_png,
} from '../assets/images';

export default function Performance({ onOpenLightbox }) {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      category: 'system',
      categoryName: 'ระบบและเครื่องมือดิจิทัล',
      title: 'สร้าง Dashboard ด้วย Google Data Studio (Looker Studio)',
      badge: 'Data Analytics & Reporting',
      icon: 'fa-chart-pie',
      image: perf_dashboard_png,
      imageCaption: 'Dashboard Google Data Studio: Expense Report วิเคราะห์และสรุปผลค่าใช้จ่าย',
      desc: 'ออกแบบ Expense Report และ Dashboard รายงานข้อมูลค่าใช้จ่ายแบบ Real-time พร้อมแผนภูมิวงกลมและกราฟแท่งเปรียบเทียบ เพื่อการวิเคราะห์และตัดสินใจทางธุรกิจอย่างแม่นยำ',
      highlights: [
        'ออกแบบ KPI Cards แสดงยอดรวมและการจัดประเภทค่าใช้จ่าย',
        'สร้างแผนภูมิวงกลมและกราฟแท่งเปรียบเทียบค่าใช้จ่ายตามหมวดหมู่',
        'เชื่อมโยง Data Source วิเคราะห์และสรุปผลข้อมูลอัตโนมัติ'
      ]
    },
    {
      category: 'system',
      categoryName: 'ระบบและเครื่องมือดิจิทัล',
      title: 'Google Forms + แนบรูปภาพ แจ้งเตือนผ่าน Line Notify',
      badge: 'Automation & Workflow',
      icon: 'fa-bell',
      image: perf_line_notify_png,
      imageCaption: 'ระบบแจ้งเตือนหลักฐานการอบรมและรูปภาพผ่าน Line Notify แบบเรียลไทม์',
      desc: 'พัฒนาระบบสำรวจข้อมูลการเข้าอบรม พร้อมฟังก์ชันแนบรูปภาพหลักฐานและส่งการแจ้งเตือนแบบทันที (Instant Notification) ผ่าน Line Notify แบบไม่จำกัดจำนวนครั้งไปยังกลุ่มงาน',
      highlights: [
        'สร้างแบบฟอร์มลงทะเบียนและรับไฟล์ภาพหลักฐาน',
        'เชื่อมต่อ Webhook / Google Apps Script สู่ Line Notify',
        'ระบบแจ้งเตือนแบบทันที ช่วยให้ทีมตรวจสอบข้อมูลได้รวดเร็ว'
      ]
    },
    {
      category: 'system',
      categoryName: 'ระบบและเครื่องมือดิจิทัล',
      title: 'สร้างระบบรับสมัครงาน (Recruitment System & AppSheet)',
      badge: 'HR Application & Database',
      icon: 'fa-users-gear',
      image: perf_recruitment_system_png,
      imageCaption: 'โครงสร้างฐานข้อมูลและ Application จัดการใบสมัครงานสำหรับฝ่าย HR',
      desc: 'พัฒนาระบบฐานข้อมูลและแอปพลิเคชันจัดการใบสมัครงาน รวบรวมข้อมูลผู้สมัคร ตำแหน่งงาน เงินเดือน ประวัติส่วนตัว พร้อมรองรับลายเซ็นดิจิทัลและสถานะการสัมภาษณ์',
      highlights: [
        'ออกแบบ Data Schema บน Google Sheets (Row, Type, Key, Label)',
        'พัฒนา UI หน้าตา Application สำหรับฝ่ายบุคคล (HR) และผู้สมัคร',
        'รองรับการแนบภาพผู้สมัคร ลายเซ็นอิเล็กทรอนิกส์ และสถานะเรียกสัมภาษณ์'
      ]
    },
    {
      category: 'design',
      categoryName: 'งานออกแบบกราฟิก & สื่อประชาสัมพันธ์',
      title: 'สื่อใบประกาศรับสมัครพนักงาน (HR Recruitment Posters)',
      badge: 'Graphic & Recruitment Design',
      icon: 'fa-bullhorn',
      image: perf_hr_poster_png,
      imageCaption: 'ใบประกาศรับสมัครพนักงาน ตำแหน่งนักการบัญชี (บริษัท TKChur. จำกัด)',
      desc: 'ออกแบบใบประกาศรับสมัครงาน เช่น ตำแหน่งนักการบัญชี คุมโทนสี Corporate สวยงาม ชัดเจน ระบุคุณสมบัติ สิทธิประโยชน์ สวัสดิการ และช่องทางการติดต่ออย่างเป็นมืออาชีพ',
      highlights: [
        'จัดวาง Typography และ Visual Hierarchy ให้อ่านง่าย สะดุดตา',
        'คุมโทนสี Corporate สร้างภาพลักษณ์น่าเชื่อถือแก่องค์กร',
        'ระบุขอบเขตงาน รายละเอียดเงินเดือน และข้อมูลติดต่อครบถ้วน'
      ]
    },
    {
      category: 'design',
      categoryName: 'งานออกแบบกราฟิก & สื่อประชาสัมพันธ์',
      title: 'สื่อใบประกาศรับสมัครเรียน & สื่อองค์กร (PR & Admission Posters)',
      badge: 'Brand PR & Marketing Materials',
      icon: 'fa-graduation-cap',
      image: perf_admission_poster_jpg,
      imageCaption: 'โปสเตอร์ประชาสัมพันธ์การเปิดรับสมัครนักศึกษาใหม่ สาขาวิชาการจัดการธุรกิจ มรภ.กำแพงเพชร',
      desc: 'ออกแบบโปสเตอร์ประชาสัมพันธ์การเปิดรับสมัครนักศึกษาใหม่ คณะวิทยาการจัดการ สาขาวิชาการจัดการธุรกิจ มรภ.กำแพงเพชร ดีไซน์สดใส ดึงดูดกลุ่มเป้าหมายนักเรียนและผู้สนใจ',
      highlights: [
        'ดีไซน์สดใส ทันสมัย ดึงดูดสายตาและสร้างการจดจำ',
        'ระบุกำหนดการรอบรับสมัคร (รอบที่ 1-3) รายละเอียดหลักสูตรชัดเจน',
        'ออกแบบ Infographic และ QR Code สมัครเรียนออนไลน์สะดวกรวดเร็ว'
      ]
    },
    {
      category: 'branding',
      categoryName: 'พัฒนาสินค้าชุมชน & อัตลักษณ์แบรนด์',
      title: 'ผลงานพัฒนาสินค้าชุมชน: แบรนด์ "ร้านแม่ดาวเรือง"',
      badge: 'Community Soft Power & Branding',
      icon: 'fa-store',
      image: perf_banner_maedaoruang_png,
      imageCaption: 'อัตลักษณ์แบรนด์แม่ดาวเรือง: ป้ายไวนิลหน้าร้านอาหารพื้นบ้าน รสแซ่บ ราคาถูก',
      desc: 'ออกแบบและพัฒนาอัตลักษณ์แบรนด์ร้านอาหารพื้นบ้าน "แม่ดาวเรือง" ครบวงจร ตั้งแต่ป้ายไวนิลหน้าร้าน คาแรคเตอร์โลโก้ และฉลากบรรจุภัณฑ์ผลิตภัณฑ์น้ำพริกพื้นบ้านสร้างมูลค่าเพิ่มแก่ชุมชน',
      highlights: [
        'ออกแบบป้ายไวนิลหน้าร้านอาหารพื้นบ้าน ขนาดใหญ่ สดใส ดึงดูดสายตา',
        'ออกแบบคาแรคเตอร์โลโก้ "แม่ดาวเรือง" อบอุ่น เป็นมิตร และเป็นเอกลักษณ์',
        'ออกแบบฉลากสติ๊กเกอร์ติดกระปุกน้ำพริก 3 สูตร: แมงดา, ปลาย่าง, ผัดหมู'
      ]
    }
  ];

  const filtered = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="performance" className="section-wrap" style={{ background: '#f8fafc' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">PORTFOLIO SHOWCASE</span>
          <h2 className="section-title">
            <i className="fa-solid fa-briefcase"></i> ผลงานและโครงงานจริง (Performance)
          </h2>
          <p className="section-desc">
            รวบรวมผลงานจริงจากแฟ้มสะสมผลงาน พร้อมรูปภาพประกอบการพัฒนาระบบ สื่อประชาสัมพันธ์ และการสร้างแบรนด์
          </p>

          {/* Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '24px', flexWrap: 'wrap' }}>
            {[
              { id: 'all', label: 'ทั้งหมด (6 ผลงาน)' },
              { id: 'system', label: 'ระบบ & เครื่องมือดิจิทัล' },
              { id: 'design', label: 'สื่อประชาสัมพันธ์ & โปสเตอร์' },
              { id: 'branding', label: 'พัฒนาสินค้าชุมชน (Soft Power)' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'var(--ocean-primary)' : 'white',
                  color: activeTab === tab.id ? 'white' : 'var(--text-main)',
                  border: `1px solid ${activeTab === tab.id ? 'var(--ocean-primary)' : '#cbd5e1'}`,
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activeTab === tab.id ? '0 4px 12px rgba(2,132,199,0.3)' : 'none'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="edu-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px' }}>
          {filtered.map((proj, idx) => (
            <div 
              key={idx} 
              className="edu-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0',
                borderTop: '4px solid var(--ocean-primary)',
                background: 'white',
                overflow: 'hidden',
                borderRadius: '16px'
              }}
            >
              <div>
                {/* รูปภาพประกอบผลงานจริงจาก PDF */}
                <div 
                  style={{ 
                    position: 'relative', 
                    width: '100%', 
                    height: '240px', 
                    overflow: 'hidden',
                    background: '#f1f5f9',
                    cursor: onOpenLightbox ? 'pointer' : 'default'
                  }}
                  onClick={() => onOpenLightbox && onOpenLightbox(proj.image, proj.title, proj.imageCaption)}
                  title="คลิกเพื่อดูภาพขนาดใหญ่"
                >
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center 20%',
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
                    fontSize: '0.75rem',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    <i className="fa-solid fa-magnifying-glass-plus"></i> คลิกดูภาพขยาย
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--ocean-primary)',
                      background: '#e0f2fe',
                      padding: '4px 10px',
                      borderRadius: '12px'
                    }}>
                      {proj.badge}
                    </span>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
                      color: 'var(--ocean-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem'
                    }}>
                      <i className={`fa-solid ${proj.icon}`}></i>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', color: 'var(--ocean-navy)', marginBottom: '10px', lineHeight: '1.4' }}>
                    {proj.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                    {proj.desc}
                  </p>

                  <div className="edu-project-box" style={{ background: '#f8fafc', margin: 0, padding: '12px' }}>
                    <h4 style={{ fontSize: '0.82rem', color: 'var(--ocean-navy)', marginBottom: '6px' }}>
                      <i className="fa-solid fa-check-circle" style={{ color: 'var(--ocean-primary)' }}></i> องค์ประกอบสำคัญ:
                    </h4>
                    <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.82rem', color: '#475569', lineHeight: '1.5' }}>
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div style={{ padding: '12px 24px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#fafbfc' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--ocean-primary)', fontWeight: 600 }}>
                  <i className="fa-solid fa-folder-open"></i> {proj.categoryName}
                </span>
                <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check"></i> ผลงานจริง
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
