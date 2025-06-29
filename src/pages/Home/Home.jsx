import React from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCard from '../../components/TitleCards/TitleCard';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="Hình ảnh chính" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="Tiêu đề chính" className="caption-img" />
          <p>
            Phát hiện mối liên hệ với một tổ chức cổ xưa bí mật, một chàng trai trẻ sống tại Istanbul hiện đại bắt đầu hành trình giải cứu thành phố khỏi kẻ thù bất tử.
          </p>
          <div className="hero-btns">
            <button className='btn'>
              <img src={play_icon} alt="" />
              <p>Phát</p>
            </button>
            <button className='btn dark-btn'>
              <img src={info_icon} alt="" />
              <p>Thêm thông tin</p>
            </button>
          </div>
          <TitleCard />
        </div>
      </div>
      <div className="more-cards">
        <TitleCard title={"Phim bom tấn"} />
        <TitleCard title={"Phim được đánh giá cao"} />
        <TitleCard title={"Phim hành động"} />
        <TitleCard title={"Phim hài"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
