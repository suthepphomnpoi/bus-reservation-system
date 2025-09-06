import { useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import './Sidebar.css';
import profileImg from '../assets/images/bus.png'; // เปลี่ยนเป็นรูปโปรไฟล์จริงถ้ามี

const menuItems = [
  { label: 'Dashboard', icon: '🧭' },
  { label: 'Bustrip-Management', icon: '🚌' },
  { label: 'User-Management', icon: '👤' },
  { label: 'Black-list', icon: '🚫' },
  { label: 'Assignment', icon: '📋' },
];

export default function Sidebar({ activeIndex = 1 }) {
  return (
    <>
    <Navbar />
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">A</div>
        <div className="sidebar-title">Admin service</div>
      </div>
      <div className="sidebar-profile">
        <img src={profileImg} alt="profile" className="sidebar-profile-img" />
        <div className="sidebar-profile-name">Jintam Yeewasri</div>
      </div>
      <div className="sidebar-menu">
        {menuItems.map((item, idx) => (
          <div
            key={item.label}
            className={`sidebar-menu-item${activeIndex === idx ? ' active' : ''}`}
          >
            <span className="sidebar-menu-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

