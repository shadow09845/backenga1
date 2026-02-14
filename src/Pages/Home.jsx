import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
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
const Home = () => {
  const images = [img1, img1, img1]; 

  return (
    <>
<section className="hero-section">
  <div className="container">
    <div className="hero-wrapper"> 
      
      <aside className="category-sidebar">
            <ul>

              <li>Woman’s Fashion <span>&rsaquo;</span></li>

              <li>Men’s Fashion <span>&rsaquo;</span></li>

              <li>Electronics</li>

              <li>Home & Lifestyle</li>

              <li>Medicine</li>

              <li>Sports & Outdoor</li>

              <li>Baby’s & Toys</li>

              <li>Groceries & Pets</li>

              <li>Health & Beauty</li>

            </ul>
      </aside>

   <div className="bar">

          <div className="home-slider-container">

            <Swiper

              modules={[Pagination, Autoplay, Navigation]}

              spaceBetween={0}

              slidesPerView={1}

              loop={true}

              autoplay={{

                delay: 3000,

                disableOnInteraction: false,

              }}

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
    <div className="card">
   
    </div>
    <div className="card">
   
    </div>
    <div>
      
      <main style={{ padding: '20px' }}>
        <section className="cart-section">
        </section>

        <hr /> 

        <section className="products-section">
          <h2 style={{textAlign: 'center'}}>Mahsulotlar do'koni</h2>
        </section>
        <Timer/>
      </main>
    </div>
    <Cardlist />
    <h2 style={{
      marginLeft:"150px",
      fontSize:"35px"
    }}>Browse By Category</h2>
    <section className='bax'>
      <div className="card-box">
<img src={im1} alt="" />
<p>Phones</p>
      </div>
            <div className="card-box">
<img src={im2} alt="" />
<p>Computers</p>
      </div>
            <div className="card-box">
<img src={im3} alt="" />
<p>SmartWatch</p>
      </div>
            <div className="card-box" style={{
              backgroundColor:"#DB4444"
            }}>
<img src={im4} alt="" />
<p>Phones</p>
      </div>
            <div className="card-box">
<img src={im5} alt="" />
<p>Phones</p>
      </div>
            <div className="card-box">
<img src={im6} alt="" />
<p>Phones</p>
      </div>
    </section>
    <section className="best-selling-section">
      <div className="section-label-wrapper">
        <div className="red-vertical-bar"></div>
        <span className="label-text">This Month</span>
      </div>

      <div className="section-content-header">
        <h2 className="section-title">Best Selling Products</h2>
        <button className="view-all-button">View All</button>
      </div>

    </section>
    <Cardlist/>
    <section className="music-banner-section">
      <div className="banner-content">
        <span className="banner-label">Categories</span>
        <h1>Enhance Your Music Experience</h1>
        
        <div className="banner-timer">
          <div className="timer-circle">
            <span>23</span>
            <label>Hours</label>
          </div>
          <div className="timer-circle">
            <span>05</span>
            <label>Days</label>
          </div>
          <div className="timer-circle">
            <span>59</span>
            <label>Minutes</label>
          </div>
          <div className="timer-circle">
            <span>35</span>
            <label>Seconds</label>
          </div>
        </div>

        <button className="buy-now-btn">Buy Now!</button>
      </div>

      <div className="banner-image">
        <img src={im7} alt="JBL Speaker" />
      </div>
    </section>
    <div className="section">
      <div className="header">
        <div className="redTag"></div>
        <h2>New Arrival</h2>
      </div>

      <div className="grid">
        <div className="card" style={{ gridRow: "span 2", backgroundColor: "#000" }}>
          <img src={im8} alt="PS5" />
          <div className="content">
            <h3>PlayStation 5</h3>
            <p>Black and White version of the PS5.</p>
            <a href="#" className="link">Shop Now</a>
          </div>
        </div>

        <div className="card" style={{ backgroundColor: "#0d0d0d" }}>
          <img src={im9} alt="Women" />
          <div className="content">
            <h3>Women's Collections</h3>
            <p>Featured woman collections.</p>
            <a href="#" className="link">Shop Now</a>
          </div>
        </div>

        <div className="bottomRow">
          <div className="card" style={{ flex: 1, backgroundColor: "#000" }}>
            <img src={im10} alt="Speaker" />
            <div className="content">
              <h4>Speakers</h4>
              <a href="#" className="link">Shop Now</a>
            </div>
          </div>
          <div className="card" style={{ flex: 1, backgroundColor: "#000" }}>
            <img src={im11} alt="Perfume" />
            <div className="content">
              <h4>Perfume</h4>
              <a href="#" className="link">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div className="label-wrapper">
        <div className="red-vertical-bar2">
<img src={im12} alt="Services" />
<h2>FREE AND FAST DELIVERY</h2>
<p>Free delivery for all orders over $140</p>
        </div>
         <div className="red-vertical-bar2">
<img src={im12} alt="Services" />
<h2>FREE AND FAST DELIVERY</h2>
<p>Free delivery for all orders over $140</p>
        </div>
         <div className="red-vertical-bar2">
<img src={im12} alt="Services" />
<h2>FREE AND FAST DELIVERY</h2>
<p>Free delivery for all orders over $140</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Home;