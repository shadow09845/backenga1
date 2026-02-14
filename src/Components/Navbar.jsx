import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useState } from 'react';
import img4 from "../assets/Cart1.svg";
import img5 from "../assets/Wishlist.svg";
import { cardlistData, recommendedCardData } from "../data/CardData";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../i18n/Languageswitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [accountOpen, setAccountOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  
  // Combine all products from both data sources for search
  const allProducts = [...cardlistData, ...recommendedCardData];
  
  // Get cart items from Redux
  const cart = useSelector((state) => state.shop.cart);
  const favorites = useSelector((state) => state.shop.favorites);

  const handleSearch = (value) => {
    setSearchQuery(value);
    
    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = value.toLowerCase();
    const results = allProducts.filter((product) =>
      product.id.toString() === value || 
      product.brand.toLowerCase().includes(query) ||
      product.model.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  const handleSelectProduct = (id) => {
    navigate(`/singlecard/${id}`);
    setSearchQuery('');
    setSearchResults([]);
  };

  return (
    <nav className="navbar">
      <LanguageSwitcher />
      <div className="nav-container">

        <h2 className="logo">{t("title")}</h2>

        <div className="nav-links">
          <Link to={"/"}></Link>
          <Link to={"/home"}>{t("gg")}</Link>
          <Link to={"/contact"}>{t("ff")}</Link>
          <Link to={"/about"}>{t("ss")}</Link>
          <Link to={"/signup"}>{t("a")}</Link>
        </div>

        <div className="nav-actions">
          <div className="search-box" style={{ position: 'relative' }}>
            <input 
              type="text" 
              placeholder={t("serch")}
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              style={{ width: '100%', padding: '8px 12px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            
            {searchResults.length > 0 && (
              <div style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                backgroundColor: 'white',
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                zIndex: 101,
                maxHeight: '300px',
                overflowY: 'auto',
                marginTop: '5px'
              }}>
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleSelectProduct(result.id)}
                    style={{
                      padding: '10px 12px',
                      borderBottom: '1px solid #f0f0f0',
                      cursor: 'pointer',
                      display: 'flex',
                      gap: '10px',
                      alignItems: 'center',
                      transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f9f9f9'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <img src={result.img} alt={result.model} style={{ width: '40px', height: '40px', objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 'bold', fontSize: '14px' }}>{result.brand} {result.model}</div>
                      <div style={{ fontSize: '12px', color: '#666' }}>ID: {result.id}</div>
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#e74c3c' }}>{result.price}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Cart icon */}
          <Link to={"/savtcha"} style={{ position: 'relative', display: 'inline-block' }}>
            <img src={img4} alt="Cart" className="cart-icon" />
            {cart.length > 0 && (
              <span className="cart-badge">{cart.length}</span>
            )}
          </Link>

          {/* Wishlist / Like icon */}
          <Link to={"/like"} style={{ position: 'relative', display: 'inline-block' }}>
            <img src={img5} alt="Wishlist" className="cart-icon" />
            {favorites.length > 0 && (
              <span className="cart-badge">{favorites.length}</span>
            )}
          </Link>

          {/* Account icon */}
          <div className="account-wrapper" style={{ position: 'relative' }}>
            <FaRegUser 
              size={24} 
              style={{ cursor: 'pointer', marginLeft: '15px' }}
              onClick={() => setAccountOpen(!accountOpen)}
            />

            {/* Account modal */}
            {accountOpen && (
              <div className="account-modal" style={{
                position: 'absolute',
                top: '35px',
                right: 0,
                backgroundColor: 'white',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                borderRadius: '8px',
                padding: '10px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                zIndex: 100
              }}>
                <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>Log Out</Link>
                <Link to="/about" style={{ textDecoration: 'none', color: '#333' }}>About</Link>
                <Link to="/contact" style={{ textDecoration: 'none', color: '#333' }}>Contact</Link>
              </div>
            )}
          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
