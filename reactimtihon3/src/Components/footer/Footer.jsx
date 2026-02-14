import React from 'react';
// import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'; 
import './Footer.css';
import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();

  return (
      <footer className="footer-rimel">
      <div className="footer-main-content">

        {/* Subscribe Column */}
        <div className="footer-column footer-subscribe">
          <h3 className="footer-heading">{t("exclusive")}</h3>
          <p className="footer-sub-title">{t("subscribe")}</p>
          <p className="footer-text-discount">{t("first_order_discount")}</p>
          <div className="subscribe-form-container">
            <input 
              type="email" 
              placeholder={t("enter_email")} 
              className="subscribe-input"
            />
            <button className="subscribe-button">
              {/* Ikonka yoki send button */}
            </button>
          </div>
        </div>

        {/* Support Column */}
        <div className="footer-column">
          <h3 className="footer-heading">{t("support")}</h3>
          <address className="footer-address">
            111 Bijoy sarani, Dhaka, <br />
            DH 1515, Bangladesh.
          </address>
          <a href="mailto:exclusive@gmail.com" className="footer-link">exclusive@gmail.com</a>
          <a href="tel:+88015-88888-9999" className="footer-link">+88015-88888-9999</a>
        </div>

        {/* Account Column */}
        <div className="footer-column">
          <h3 className="footer-heading">{t("account")}</h3>
          <a href="/my-account" className="footer-link">{t("my_account")}</a>
          <a href="/login" className="footer-link">{t("login_register")}</a>
          <a href="/cart" className="footer-link">{t("cart")}</a>
          <a href="/wishlist" className="footer-link">{t("wishlist")}</a>
          <a href="/shop" className="footer-link">{t("shop")}</a>
        </div>

        {/* Quick Link Column */}
        <div className="footer-column">
          <h3 className="footer-heading">{t("quick_link")}</h3>
          <a href="/privacy-policy" className="footer-link">{t("privacy_policy")}</a>
          <a href="/terms-of-use" className="footer-link">{t("terms_of_use")}</a>
          <a href="/faq" className="footer-link">{t("faq")}</a>
          <a href="/contact" className="footer-link">{t("contact")}</a>
        </div>

        {/* Download App Column */}
        <div className="footer-column footer-download">
          <h3 className="footer-heading">{t("download_app")}</h3>
          <p className="footer-text-discount">{t("app_new_user_discount")}</p>
          <div className="app-download-container">
            <div className="qr-code-placeholder"></div>
            <div className="app-badges">
              <a href="#" className="app-badge-link"></a>
              <a href="#" className="app-badge-link"></a>
            </div>
          </div>
          <div className="social-icons"></div>
        </div>

      </div>

      <div className="footer-copyright">
        {t("copyright_rimel")}
      </div>
    </footer>
  );
};

export default Footer;