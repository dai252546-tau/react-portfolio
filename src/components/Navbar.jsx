import React from 'react';
import { profile_png } from '../assets/images';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#hero" className="brand-logo">
        <img
          src={profile_png}
          alt="Profile"
          style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '2px solid var(--ocean-aqua)',
          }}
        />
        <span>JURAIRAT</span>.PORTFOLIO
      </a>
      <ul className="nav-menu">
        <li><a href="#hero">หน้าแรก</a></li>
        <li><a href="#profile">ข้อมูลส่วนตัว</a></li>
        <li><a href="#education">การศึกษา</a></li>
        <li><a href="#talents">ความสามารถพิเศษ</a></li>
        <li><a href="#certificates">เกียรติบัตร</a></li>
        <li><a href="#performance">ผลงานจริง</a></li>
        <li><a href="#soft-skills">ทักษะ</a></li>
        <li><a href="#activities">กิจกรรม</a></li>
      </ul>
      <a href="#contact" className="nav-contact-btn">
        <i className="fa-solid fa-paper-plane"></i> ติดต่อฉัน
      </a>
    </nav>
  );
}
