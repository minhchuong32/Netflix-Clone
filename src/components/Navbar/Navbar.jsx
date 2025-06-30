import React, { useRef, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase"; // Assuming you have a logout function in your firebase.js
const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navRef.current.classList.add("navbar-scrolled");
      } else {
        navRef.current.classList.remove("navbar-scrolled");
      }
    });
  }, []);

  return (
    <div ref={navRef} className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <ul>
          <li>Trang chủ</li>
          <li>Chương trình TV</li>
          <li>Phim</li>
          <li>Mới & Phổ biến</li>
          <li>Danh sách của tôi</li>
          <li>Duyệt theo ngôn ngữ</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="Tìm kiếm" className="icon" />
        <p>Trẻ em</p>
        <img src={bell_icon} alt="Thông báo" className="icon" />
        <div className="navbar-profile">
          <img src={profile_img} alt="Hồ sơ" className="icon" />
          <img src={caret_icon} alt="Mũi tên" className="icon" />
          <div className="dropdown">
            <p onClick={() => {
                logout()
                alert("Đăng xuất thành công khỏi Netflix");
            }}>Đăng xuất khỏi Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
