import React from 'react';

export default function SoftSkills() {
  const skills = [
    {
      icon: 'fa-clock',
      title: 'ตรงต่อเวลา',
      desc: 'ให้ความสำคัญกับเวลาเป็นอันดับแรก มีวินัยในการส่งงานตรงเวลาและตรงตามนัดหมายเสมอ',
    },
    {
      icon: 'fa-ear-listen',
      title: 'เปิดรับความคิดเห็น & ข้อติชม',
      desc: 'ยอมรับมุมมองที่หลากหลาย พร้อมปรับปรุงแก้ไขงานอย่างสร้างสรรค์โดยไม่ใช้อารมณ์ตัดสิน',
    },
    {
      icon: 'fa-shuffle',
      title: 'การปรับตัวและความยืดหยุ่น',
      desc: 'สามารถปรับตัวเข้ากับงาน เพื่อนร่วมงาน วัฒนธรรมองค์กร และสภาพแวดล้อมใหม่ ๆ ได้อย่างรวดเร็ว',
    },
    {
      icon: 'fa-puzzle-piece',
      title: 'การวิเคราะห์และแก้ไขปัญหา',
      desc: 'มีความสามารถในการประเมินสถานการณ์ หาสาเหตุที่แท้จริง และวางแนวทางแก้ไขอย่างมีประสิทธิภาพ',
    },
    {
      icon: 'fa-people-group',
      title: 'การทำงานร่วมกับผู้อื่น',
      desc: 'ประสานงานอย่างมีมนุษยสัมพันธ์ ช่วยเหลือสนับสนุนทีม และขับเคลื่อนเป้าหมายร่วมกันจนสำเร็จ',
    },
    {
      icon: 'fa-brain',
      title: 'การคิดอย่างมีเหตุผล',
      desc: 'ประยุกต์ใช้ตรรกะ ข้อมูล และข้อเท็จจริงในการตัดสินใจ วางแผนอย่างเป็นระบบและรอบคอบ',
    },
  ];

  return (
    <section id="soft-skills" className="section-wrap">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">INTERPERSONAL ABILITIES</span>
          <h2 className="section-title">
            <i className="fa-solid fa-heart-pulse"></i> Soft Skills
          </h2>
          <p className="section-desc">ทักษะด้านอารมณ์ การทำงานร่วมกับผู้อื่น และการแก้ปัญหา</p>
        </div>

        <div className="soft-skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="soft-card">
              <div className="soft-icon">
                <i className={`fa-solid ${skill.icon}`}></i>
              </div>
              <h4>{skill.title}</h4>
              <p>{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
