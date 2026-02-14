import React from 'react';
// import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-rimel">
      <div className="footer-main-content">
        
        <div className="footer-column footer-subscribe">
          <h3 className="footer-heading">Exclusive</h3>
          <p className="footer-sub-title">Subscribe</p>
          <p className="footer-text-discount">Get 10% off your first order</p>
          <div className="subscribe-form-container">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="subscribe-input"
            />
            <button className="subscribe-button">
              {/* <Send size={24} color="white" />  */}
            </button>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Support</h3>
          <address className="footer-address">
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </address>
          <a href="mailto:exclusive@gmail.com" className="footer-link">exclusive@gmail.com</a>
          <a href="tel:+88015-88888-9999" className="footer-link">+88015-88888-9999</a>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Account</h3>
          <a href="/my-account" className="footer-link">My Account</a>
          <a href="/login" className="footer-link">Login / Register</a>
          <a href="/cart" className="footer-link">Cart</a>
          <a href="/wishlist" className="footer-link">Wishlist</a>
          <a href="/shop" className="footer-link">Shop</a>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Quick Link</h3>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
          <a href="/terms-of-use" className="footer-link">Terms Of Use</a>
          <a href="/faq" className="footer-link">FAQ</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>

        <div className="footer-column footer-download">
          <h3 className="footer-heading">Download App</h3>
          <p className="footer-text-discount">Save $3 with App New User Only</p>
          <div className="app-download-container">
            <div className="qr-code-placeholder">

</div>
            <div className="app-badges">
              <a href="#" className="app-badge-link"></a>
              <a href="#" className="app-badge-link"></a>
            </div>
          </div>
          <div className="social-icons">
          </div>
        </div>

      </div>

      <div className="footer-copyright">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
};

export default Footer;