import React, { useState } from 'react';
import './Login.css';
import { useTranslation } from "react-i18next";

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const adminName = "admin";
    const adminEmail = "admin@gmail.com";
    const adminPassword = "admin123";

    if (
      name.trim() === adminName && 
      email.trim() === adminEmail && 
      password === adminPassword
    ) {
      // alert("Hisob muvaffaqiyatli yaratildi!");
      onLogin(); 
    } else {
      alert("Ma'lumotlar xato! Iltimos, qaytadan urinib ko'ring.");
    }
  };

  const { t } = useTranslation();

  return (
      <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-image">
          <img src="..." alt="Shopping" />
        </div>

        <div className="signup-form-section">
          <div className="form-content">
            <h2>{t("createAccount")}</h2>
            <p className="subtitle">{t("subtitle")}</p>

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder={t("name")} 
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  placeholder={t("email")} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="password" 
                  placeholder={t("password")} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              <button type="submit" className="create-btn">{t("createBtn")}</button>
            </form>

            <button type="button" className="google-btn">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" />
              {t("googleBtn")}
            </button>

            <p className="login-footer">
              {t("alreadyAccount")} <a href="/login" onClick={(e) => e.preventDefault()}>{t("login")}</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;