import React from 'react';
import {
  waikru_activity_jpg,
  decor_activity_jpg,
  merit_activity_jpg,
  mc_activity_jpg,
  freshy_activity_jpg,
} from '../assets/images';

export default function Activities({ onOpenLightbox }) {
  // Row 1 items (5 activities)
  const row1 = [
    {
      img: waikru_activity_jpg,
      badge: 'กิจกรรมคณะ 01',
      title: 'กิจกรรมพิธีไหว้ครู',
      desc: 'ร่วมประดิษฐ์พานไหว้ครูและเข้าร่วมพิธีไหว้ครู เพื่อแสดงความกตัญญูกตเวทิตาต่อคณาจารย์และส่งเสริมความสามัคคีในหมู่คณะ',
    },
    {
      img: decor_activity_jpg,
      badge: 'กิจกรรมคณะ 02',
      title: 'เตรียมสถานที่ & จับจีบผ้า',
      desc: 'มีส่วนร่วมในการวางแผน จัดเตรียมสถานที่ ตกแต่งจับจีบผ้าโต๊ะพิธี และเตรียมอุปกรณ์สนับสนุนโครงการ',
    },
    {
      img: merit_activity_jpg,
      badge: 'กิจกรรมคณะ 03',
      title: 'กิจกรรมทำบุญคณะวิทยาการ',
      desc: 'ร่วมกิจกรรมทำบุญตักบาตรและจิตอาสาอำนวยความสะดวกแด่พระสงฆ์และคณาจารย์ เพื่อความเป็นสิริมงคลของคณะ',
    },
    {
      img: mc_activity_jpg,
      badge: 'กิจกรรมคณะ 04',
      title: 'พิธีกรดำเนินรายการ',
      desc: 'ทำหน้าที่พิธีกรดำเนินรายการและประสานกิจกรรม พร้อมสื่อสารกับผู้เข้าร่วมโครงการให้การดำเนินงานเป็นไปอย่างราบรื่น',
    },
    {
      img: freshy_activity_jpg,
      badge: 'กิจกรรมคณะ 05',
      title: 'กิจกรรมเฟรชชี่ไนท์',
      desc: 'รับผิดชอบงานลงทะเบียน ตรวจสอบรายชื่อ และประสานงานต้อนรับน้องใหม่อย่างอบอุ่นในค่ำคืนเฟรชชี่ไนท์',
    },
  ];

  // Row 2 items (5 activities, slightly different order for variety)
  const row2 = [
    {
      img: mc_activity_jpg,
      badge: 'ฝ่ายดำเนินงาน 01',
      title: 'พิธีกรดำเนินรายการ',
      desc: 'ทำหน้าที่ผู้ดำเนินรายการบนเวที ประสานงานวิทยากร และควบคุมลำดับพิธีการ',
    },
    {
      img: freshy_activity_jpg,
      badge: 'ฝ่ายลงทะเบียน 02',
      title: 'กิจกรรมเฟรชชี่ไนท์',
      desc: 'รับผิดชอบงานลงทะเบียน ตรวจสอบรายชื่อ และประสานงานต้อนรับน้องใหม่',
    },
    {
      img: decor_activity_jpg,
      badge: 'ฝ่ายสถานที่ 03',
      title: 'เตรียมสถานที่ & จับจีบผ้า',
      desc: 'ร่วมวางแผน จัดเตรียมสถานที่ ตกแต่งจับจีบผ้าโต๊ะพิธี และจัดเตรียมอุปกรณ์',
    },
    {
      img: merit_activity_jpg,
      badge: 'จิตอาสา 04',
      title: 'กิจกรรมทำบุญคณะวิทยาการ',
      desc: 'ร่วมทำบุญตักบาตรและจิตอาสาอำนวยความสะดวกแด่พระสงฆ์และคณาจารย์',
    },
    {
      img: waikru_activity_jpg,
      badge: 'พิธีการ 05',
      title: 'กิจกรรมพิธีไหว้ครู',
      desc: 'ร่วมประดิษฐ์พานและเข้าร่วมพิธีไหว้ครู แสดงความกตัญญูกตเวทิตาต่อคณาจารย์',
    },
  ];

  // Duplicate for seamless loop
  const seamlessRow1 = [...row1, ...row1];
  const seamlessRow2 = [...row2, ...row2];

  return (
    <section id="activities" className="marquee-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">EXPERIENCE &amp; ACTIVITIES</span>
          <h2 className="section-title">
            <i className="fa-solid fa-camera-retro"></i> กิจกรรมที่ฉันเคยทำ
          </h2>
          <p className="section-desc">
            ภาพกิจกรรมและประสบการณ์จริง (5 ภาพเลื่อนไปทางซ้าย และ 5 ภาพเลื่อนไปทางขวา)
          </p>
        </div>
      </div>

      {/* แถวที่ 1: เลื่อนไปทาง "ซ้าย" (5 รูปภาพ x 2 ชุดสำหรับ Seamless Loop) */}
      <div className="marquee-container">
        <div className="marquee-track scroll-left">
          {seamlessRow1.map((item, index) => (
            <div
              key={index}
              className="activity-slide-card"
              onClick={() => onOpenLightbox(item.img, item.title, item.desc)}
            >
              <div className="activity-img-wrap">
                <span className="activity-category-badge">{item.badge}</span>
                <img src={item.img} alt={item.title} />
              </div>
              <div className="activity-caption">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* แถวที่ 2: เลื่อนไปทาง "ขวา" (5 รูปภาพ x 2 ชุดสำหรับ Seamless Loop) */}
      <div className="marquee-container">
        <div className="marquee-track scroll-right">
          {seamlessRow2.map((item, index) => (
            <div
              key={index}
              className="activity-slide-card"
              onClick={() => onOpenLightbox(item.img, item.title, item.desc)}
            >
              <div className="activity-img-wrap">
                <span className="activity-category-badge">{item.badge}</span>
                <img src={item.img} alt={item.title} />
              </div>
              <div className="activity-caption">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="marquee-hint">
        <i className="fa-solid fa-hand-pointer"></i> นำเมาส์วางเพื่อหยุดภาพชั่วคราว หรือคลิกที่รูปภาพเพื่อดูภาพขยาย
      </p>
    </section>
  );
}
