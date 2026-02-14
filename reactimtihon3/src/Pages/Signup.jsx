import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Signup.css';

const Login = ({ onLogin }) => {
  const { t } = useTranslation();
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
      
      onLogin(); 
    } else {
      alert("Ma'lumotlar xato! Iltimos, qaytadan urinib ko'ring.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="signup-image">
          <img 
            src="data:image/jpeg;base64,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" 
            alt="Shopping" 
          />
        </div>

        <div className="signup-form-section">
          <div className="form-content">
            <h2>{t('createAccount')}</h2>
            <p className="subtitle">{t('subtitle')}</p>

            <form onSubmit={handleLogin}>
              <div className="input-group">
                <input 
                  type="text" 
                  placeholder={t('name')} 
                  value={name}
                  onChange={(e) => setName(e.target.value)} 
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="email" 
                  placeholder={t('email')} 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>

              <div className="input-group">
                <input 
                  type="password" 
                  placeholder={t('password')} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>

              <button type="submit" className="create-btn">{t('createBtn')}</button>
            </form>

            <button type="button" className="google-btn">
              <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" />
              {t('googleBtn')}
            </button>

            <p className="login-footer">
              Already have account? <a href="/login" onClick={(e) => e.preventDefault()}>Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;