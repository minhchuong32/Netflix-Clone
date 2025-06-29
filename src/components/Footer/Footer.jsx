import React from 'react';
import './Footer.css';
import youtube_icon from '../../assets/youtube_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="YouTube" />
        <img src={facebook_icon} alt="Facebook" />
        <img src={twitter_icon} alt="Twitter" />
        <img src={instagram_icon} alt="Instagram" />
      </div>
      <ul>
        <li>Mô tả âm thanh</li>
        <li>Quan hệ nhà đầu tư</li>
        <li>Thông báo pháp lý</li>
        <li>Trung tâm trợ giúp</li>
        <li>Tuyển dụng</li>
        <li>Tùy chọn cookie</li>
        <li>Thẻ quà tặng</li>
        <li>Điều khoản sử dụng</li>
        <li>Chính sách quyền riêng tư</li>
        <li>Thông tin công ty</li>
        <li>Liên hệ với chúng tôi</li>
        <li>Kiểm tra tốc độ</li>
        <li>Chỉ có trên Netflix</li>
        <li>Trung tâm truyền thông</li>
        <li>Cách xem</li>
        <li>Cài đặt cookie</li>
      </ul>
      <p className="copyright-text">© 1997-2025 Netflix, Inc</p>
    </div>
  );
};

export default Footer;
