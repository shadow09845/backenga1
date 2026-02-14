import React, { useState, useEffect } from 'react';
import './Login.css';
import { useTranslation } from "react-i18next";

const Login = ({ onLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // Load Google Sign-In SDK
    const loadGoogleSignIn = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      script.onload = () => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: 'YOUR_GOOGLE_CLIENT_ID_HERE', // Replace with your Google Client ID
            callback: handleGoogleLogin,
          });
        }
      };
    };

    loadGoogleSignIn();
  }, []);

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

  const handleGoogleLogin = (response) => {
    if (response.credential) {
      try {
        // Decode the JWT token to get user info
        const base64Url = response.credential.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
        );
        const userData = JSON.parse(jsonPayload);

        // Store user data and login
        localStorage.setItem('user', JSON.stringify({
          name: userData.name,
          email: userData.email,
          picture: userData.picture,
          loginMethod: 'google'
        }));

        console.log("Google Login Successful:", userData);
        onLogin();
      } catch (error) {
        console.error("Error processing Google login:", error);
        alert("Google login error. Please try again.");
      }
    }
  };

  const handleGoogleButtonClick = () => {
    if (window.google) {
      window.google.accounts.id.prompt((notification) => {
        if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
          window.google.accounts.id.renderButton(
            document.getElementById('google-signin-btn'),
            {
              theme: 'outline',
              size: 'large',
              width: '100%'
            }
          );
        }
      });
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

            <button 
              type="button" 
              className="google-btn" 
              id="google-signin-btn"
              onClick={handleGoogleButtonClick}
            >
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