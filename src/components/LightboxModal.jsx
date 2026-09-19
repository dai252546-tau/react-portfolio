import React from 'react';

export default function LightboxModal({ isOpen, imgSrc, title, desc, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lightbox-modal" style={{ display: 'flex' }} onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          &times;
        </button>
        <img
          src={imgSrc}
          alt="ขยายรูป"
          style={{ width: '100%', height: '350px', objectFit: 'cover' }}
        />
        <div style={{ padding: '20px' }}>
          <h3 style={{ color: 'var(--ocean-navy)', marginBottom: '8px' }}>{title}</h3>
          <p style={{ color: 'var(--text-muted)', fontFamily: "'Sarabun', sans-serif" }}>
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
