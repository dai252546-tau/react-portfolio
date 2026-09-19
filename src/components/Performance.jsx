import React, { useState } from 'react';

export default function Performance() {
  const [activeTab, setActiveTab] = useState('all');

  const projects = [
    {
      category: 'system',
      categoryName: 'ระบบและเครื่องมือดิจิทัล',
      title: 'สร้าง Dashboard ด้วย Google Data Studio (Looker Studio)',
      badge: 'Data Analytics & Reporting',
      icon: 'fa-chart-pie',
      desc: 'ออกแบบ Expense Report และ Dashboard รายงานข้อมูลค่าใช้จ่ายแบบ Real-time พร้อมกราฟเปรียบเทียบและการจัดหมวดหมู่ข้อมูลอย่างเป็นระบบเพื่อการตัดสินใจทางธุรกิจ',
      highlights: [
        'ออกแบบ KPI Cards แสดงยอดรวมและการจัดประเภท',
        'สร้างแผนภูมิวงกลมและกราฟแท่งเปรียบเทียบค่าใช้จ่าย',
        'เชื่อมโยง Data Source วิเคราะห์ข้อมูลอัตโนมัติ'
      ]
    },
    {
      category: 'system',
      categoryName: 'ระบบและเครื่องมือดิจิทัล',
      title: 'Google Forms + Line Notify แบบไม่จำกัดจำนวนการส่ง',
      badge: 'Automation & Workflow',
      icon: 'fa-bell',
      desc: 'พัฒนาระบบสำรวจข้อมูลการเข้าอบรม พร้อมฟังก์ชันแนบรูปภาพหลักฐานและส่งการแจ้งเตือนแบบทันที (Instant Notification) ผ่าน Line Notify อัตโนมัติไปยังกลุ่มงาน',
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
      desc: 'พัฒนาระบบฐานข้อมูลและแอปพลิเคชันจัดการใบสมัครงาน รวบรวมข้อมูลผู้สมัคร ตำแหน่งงานที่ต้องการ เงินเดือน ประวัติส่วนตัว พร้อมลายเซ็นดิจิทัลและสถานะการสัมภาษณ์',
      highlights: [
        'ออกแบบ Data Schema บน Google Sheets (Row, Type, Key, Label)',
        'พัฒนา UI หน้าตา Application สำหรับฝ่าย HR และผู้สมัคร',
        'รองรับการแนบภาพผู้สมัคร ลายเซ็นอิเล็กทรอนิกส์ และสถานะเรียกสัมภาษณ์'
      ]
    },
    {
      category: 'design',
      categoryName: 'งานออกแบบกราฟิก & สื่อประชาสัมพันธ์',
      title: 'สื่อใบประกาศรับสมัครพนักงาน (HR Recruitment Posters)',
      badge: 'Graphic & Recruitment Design',
      icon: 'fa-bullhorn',
      desc: 'ออกแบบใบประกาศรับสมัครพนักงาน เช่น ตำแหน่งนักการบัญชี, ธุรการ จัดวาง Layout สวยงาม ชัดเจน ระบุคุณสมบัติ สวัสดิการ และช่องทางการติดต่ออย่างมืออาชีพ',
      highlights: [
        'จัดวาง Typography และ Visual Hierarchy ให้ข้อมูลอ่านง่ายและน่าสนใจ',
        'คุมโทนสี Corporate สอดคล้องกับภาพลักษณ์องค์กร',
        'ระบุขอบเขตงาน รายละเอียดเงินเดือน และ QR Code ติดต่อชัดเจน'
      ]
    },
    {
      category: 'design',
      categoryName: 'งานออกแบบกราฟิก & สื่อประชาสัมพันธ์',
      title: 'สื่อใบประกาศรับสมัครนักศึกษาใหม่ (PR & Admission Posters)',
      badge: 'Brand PR & Marketing Materials',
      icon: 'fa-graduation-cap',
      desc: 'ออกแบบโปสเตอร์ประชาสัมพันธ์การเปิดรับสมัครนักศึกษาใหม่ คณะวิทยาการจัดการ สาขาวิชาการจัดการธุรกิจ มรภ.กำแพงเพชร เพื่อใช้ในสื่อออนไลน์และสิ่งพิมพ์',
      highlights: [
        'ดีไซน์สดใส ดึงดูดกลุ่มเป้าหมายนักเรียนและผู้สนใจศึกษาต่อ',
        'ระบุกำหนดการรอบรับสมัคร (รอบที่ 1-3) รายละเอียดหลักสูตรครบถ้วน',
        'ออกแบบ Infographic และ QR Code สมัครเรียนออนไลน์'
      ]
    },
    {
      category: 'branding',
      categoryName: 'พัฒนาสินค้าชุมชน & อัตลักษณ์แบรนด์',
      title: 'ผลงานพัฒนาสินค้าชุมชน: แบรนด์ "ร้านแม่ดาวเรือง"',
      badge: 'Community Soft Power & Branding',
      icon: 'fa-store',
      desc: 'ออกแบบและพัฒนาอัตลักษณ์แบรนด์ร้านอาหารพื้นบ้าน "แม่ดาวเรือง" ครบวงจร ตั้งแต่ป้ายไวนิลหน้าร้าน โลโก้ และฉลากบรรจุภัณฑ์ผลิตภัณฑ์น้ำพริกพื้นบ้าน',
      highlights: [
        'ออกแบบป้ายไวนิลหน้าร้านอาหารพื้นบ้าน ขนาดใหญ่ สดใส ดึงดูดสายตา',
        'ออกแบบคาแรคเตอร์โลโก้ "แม่ดาวเรือง" สร้างการจดจำอันอบอุ่นและเป็นเอกลักษณ์',
        'ออกแบบฉลากสติ๊กเกอร์ติดกระปุกน้ำพริก 3 สูตร: น้ำพริกแมงดา, น้ำพริกปลาย่าง, น้ำพริกผัดหมู'
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
            รวบรวมผลงานด้านการสร้างระบบดิจิทัล งานออกแบบกราฟิก สื่อประชาสัมพันธ์ และการสร้างแบรนด์สินค้าชุมชน
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
                padding: '28px',
                borderTop: '4px solid var(--ocean-primary)',
                background: 'white'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
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
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #e0f2fe, #bae6fd)',
                    color: 'var(--ocean-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem'
                  }}>
                    <i className={`fa-solid ${proj.icon}`}></i>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', color: 'var(--ocean-navy)', marginBottom: '10px', lineHeight: '1.4' }}>
                  {proj.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '16px' }}>
                  {proj.desc}
                </p>

                <div className="edu-project-box" style={{ background: '#f8fafc', margin: 0 }}>
                  <h4 style={{ fontSize: '0.85rem', color: 'var(--ocean-navy)', marginBottom: '8px' }}>
                    <i className="fa-solid fa-check-circle" style={{ color: 'var(--ocean-primary)' }}></i> จุดเด่นและองค์ประกอบสำคัญ:
                  </h4>
                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.85rem', color: '#475569', lineHeight: '1.6' }}>
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '20px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--ocean-primary)', fontWeight: 600 }}>
                  <i className="fa-solid fa-folder-open"></i> {proj.categoryName}
                </span>
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>
                  <i className="fa-solid fa-circle-check"></i> เสร็จสมบูรณ์
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
