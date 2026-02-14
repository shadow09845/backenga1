import React, { useEffect } from 'react'; // useEffect qo'shildi
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Aos from 'aos'; // AOS import
import 'aos/dist/aos.css'; // AOS CSS import



// Rasmlar va komponentlar importi (o'zgarmadi)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import img1 from "../assets/Frame 560.png";
import im1 from "../assets/Category-CellPhone.svg"
import Cardlist from '../Components/Cardlist';
import im2 from "../assets/Category-Computer.svg"
import im3 from "../assets/Category-Smartwatch.svg"
import im4 from "../assets/Category-Camera.svg"
import im5 from "../assets/Category-Headphone.png"
import im6 from "../assets/Category-Gamepad.png"
import im7 from "../assets/Frame 694.png"
import im8 from "../assets/1c360f790c1817d3afa266b3c9f8c81ff0ed4428.png"
import im9 from "../assets/455c8d6408463f7e8f57dd3048a2444dbfa0cb90.jpg"
import im10 from "../assets/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png"
import im11 from "../assets/15315cd15102562cf220504d288fa568eaa816dd.png"
import im12 from "../assets/Services.svg"
import Timer from '../Components/Timer';


import { useTranslation } from "react-i18next";




const Home = () => {
  const images = [img1, img1, img1];

    const { t } = useTranslation();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,  
      offset: 100,    
    });
  }, []);


  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" data-aos="fade-down">
        <div className="container">
          <div className="hero-wrapper">
            <aside className="category-sidebar" data-aos="fade-right" data-aos-delay="200">
              <ul>
                <li className="cat-item">{t("kok")}</li>
                <li className="cat-item">{t("mens")}</li>
                <li className="cat-item">{t("el")}</li>
                <li className="cat-item">{t("y")}</li>
                <li className="cat-item">{t("medicine")}</li>
                <li className="cat-item">{t("sports_outdoor")}</li>
                <li className="cat-item">{t("babys_toys")}</li>
                <li className="cat-item">{t("groceries_pets")}</li>
                <li className="cat-item">{t("health_beauty")}</li>
              </ul>
            </aside>

            <div className="bar" data-aos="zoom-in" data-aos-delay="400">
              <div className="home-slider-container">
                <Swiper
                  modules={[Pagination, Autoplay, Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  navigation={true}
                  className="mySwiper"
                >
                  {images.map((rasm, index) => (
                    <SwiperSlide key={index}>
                      <div className="banner-slide">
                        <img src={rasm} alt={`Banner ${index + 1}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <main style={{ padding: '20px' }}>
        <section className="products-section" data-aos="fade-up">
          <h2 className="section-title-center">{t("mahsulotlar_dokoni")}</h2>
          <Timer />
        </section>
      </main>
      
      <Cardlist />

      {/* Browse By Category */}
      <h2 className="section-title-left" data-aos="fade-right">
        {t("browse_by_category")}
      </h2>
      <section className='bax'>
        {[im1, im2, im3, im4, im5, im6].map((img, index) => (
          <div 
            className={`card-box ${index === 3 ? "highlight-card" : ""}`} 
            key={index} 
            data-aos="flip-left" 
            data-aos-delay={index * 100}
          >
            <img src={img} alt="" />
            <p>{t(['phones', 'computers', 'smartwatch', 'camera', 'headphones', 'gaming'][index])}</p>
          </div>
        ))}
      </section>

      {/* Best Selling Products */}
      <section className="best-selling-section" data-aos="fade-up">
        <div className="section-label-wrapper">
          <div className="red-vertical-bar"></div>
          <span className="label-text">{t("this_month")}</span>
        </div>
        <div className="section-content-header">
          <h2 className="section-title">{t("best_selling_products")}</h2>
          <button className="view-all-button">{t("view_all")}</button>
        </div>
      </section>
      <Cardlist />

      {/* Music Banner */}
      <section className="music-banner-section" data-aos="zoom-in-up">
        <div className="banner-content" data-aos="fade-right" data-aos-delay="300">
          <span className="banner-label">{t("categories")}</span>
          <h1>{t("enhance_music_experience")}</h1>
          <div className="banner-timer">
            {['23 Hours', '05 Days', '59 Minutes', '35 Seconds'].map((t, i) => (
              <div className="timer-circle" key={i}>
                <span>{t.split(' ')[0]}</span>
                <label>{t.split(' ')[1]}</label>
              </div>
            ))}
          </div>
          <button className="buy-now-btn">{t("buy_now")}</button>
        </div>
        <div className="banner-image" data-aos="fade-left" data-aos-delay="500">
          <img src={im7} alt="JBL Speaker" />
        </div>
      </section>

      {/* New Arrival */}
      <div className="section">
        <div className="header" data-aos="fade-right">
          <div className="redTag"></div>
          <h2>{t("new_arrival")}</h2>
        </div>

        <div className="grid">
          <div className="card" style={{ gridRow: "span 2", backgroundColor: "#000" }} data-aos="fade-up-right">
            <img src={im8} alt="PS5" />
            <div className="content">
              <h3>{t("playstation_5")}</h3>
              <p>{t("ps5_desc")}</p>
              <a href="#" className="link">{t("shop_now")}</a>
            </div>
          </div>

          <div className="card" style={{ backgroundColor: "#0d0d0d" }} data-aos="fade-down-left">
            <img src={im9} alt="Women" />
            <div className="content">
              <h3>{t("womens_collections")}</h3>
              <p>{t("womens_desc")}</p>
              <a href="#" className="link">{t("shop_now")}</a>
            </div>
          </div>

          <div className="bottomRow">
            <div className="card" style={{ flex: 1, backgroundColor: "#000" }} data-aos="flip-up" data-aos-delay="200">
              <img src={im10} alt="Speaker" />
              <div className="content">
                <h4>{t("speakers")}</h4>
                <a href="#" className="link">{t("shop_now")}</a>
              </div>
            </div>
            <div className="card" style={{ flex: 1, backgroundColor: "#000" }} data-aos="flip-up" data-aos-delay="400">
              <img src={im11} alt="Perfume" />
              <div className="content">
                <h4>{t("perfume")}</h4>
                <a href="#" className="link">{t("shop_now")}</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <section>
        <div className="label-wrapper">
          {[1, 2, 3].map((_, i) => (
            <div className="red-vertical-bar2" key={i} data-aos="zoom-in" data-aos-delay={i * 200}>
              <img src={im12} alt="Services" />
              <h2>{t("free_fast_delivery")}</h2>
              <p>{t("delivery_desc")}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;