import React, { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';
import Aos from "aos";
import "aos/dist/aos.css";
import './Contact.css'

import { useTranslation } from "react-i18next";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    useEffect(() => {
        Aos.init({ duration: 1000, once: true }); // Animatsiya 1s davom etadi, faqat bir marta scroll qilganda
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = "8417403025:AAFD21AwLccqlP_utvR1WRyz4fJqp9Enax4";
        const chat_id = "5217150869";   
        const text = `
<b>🚀 Yangi Xabar!</b>
<b>👤 Ismi:</b> ${formData.name}
<b>📧 Email:</b> ${formData.email}
<b>📞 Tel:</b> ${formData.phone}
<b>📝 Xabar:</b> ${formData.message}
        `;

        try {
            const response = await fetch(
                `https://api.telegram.org/bot${token}/sendMessage`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ chat_id, text, parse_mode: "HTML" }),
                }
            );

            if (response.ok) {
                alert("Xabaringiz muvaffaqiyatli yuborildi!");
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                const errorData = await response.json();
                console.error("Xatolik:", errorData);
                alert("Xabar yuborishda xatolik yuz berdi.");
            }
        } catch (error) {
            console.error("Xatolik:", error);
            alert("Server bilan bog'lanib bo'lmadi.");
        }
    };

      const { t } = useTranslation();

    return (
     
          <div className="contact-section-container" style={{ display: 'flex', gap: '30px', padding: '40px' }}>

      {/* Contact Info */}
      <div className="contact-info-block" data-aos="fade-right" style={{ flex: '1', borderRight: '1px solid #ccc', paddingRight: '20px' }}>
        
        <div className="call-to-us">
          <h3 className="contact-heading" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Phone size={24} color="#db4444" /> {t("call_to_us")}
          </h3> 
          <p className="contact-text">{t("available_24_7")}</p>
          <p className="contact-phone"><strong>{t("phone")}: +8801611122222</strong></p>
        </div>

        <hr style={{ margin: '20px 0' }} />

        <div className="write-to-us">
          <h3 className="contact-heading" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Mail size={24} color="#db4444" /> {t("write_to_us")}
          </h3> 
          <p className="contact-text">{t("form_24h")}</p>
          <p className="contact-email">{t("emails")}: <strong>customer@exclusive.com</strong></p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-block" data-aos="fade-left" style={{ flex: '2' }}>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-input-group" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <input
              type="text"
              name="name"
              placeholder={t("your_name")}
              value={formData.name}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <input
              type="email"
              name="email"
              placeholder={t("your_email")}
              value={formData.email}
              onChange={handleChange}
              required
              className="contact-input"
            />
            <input
              type="tel"
              name="phone"
              placeholder={t("your_phone")}
              value={formData.phone}
              onChange={handleChange}
              required
              className="contact-input"
            />
          </div>
          
          <textarea
            name="message"
            placeholder={t("your_message")}
            rows="8"
            value={formData.message}
            onChange={handleChange}
            className="contact-textarea"
          ></textarea>

          <button 
            type="submit" 
            className="send-button"
          >
            {t("send_message")}
          </button>
        </form>
      </div>

    </div>
    );
}

export default Contact;
