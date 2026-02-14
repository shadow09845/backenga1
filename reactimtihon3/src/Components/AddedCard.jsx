import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/ShopSlice"; 
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import './AddedCard.css';

const AddedCard = () => {
  const cartItems = useSelector((state) => state.shop.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [couponCode, setCouponCode] = useState('');

  // Calculate price without $ sign
  const getPrice = (priceStr) => {
    return parseFloat(priceStr.replace('$', ''));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => {
    return sum + (getPrice(item.price) * (item.quantity || 1));
  }, 0);

  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleApplyCoupon = () => {
    alert(`Coupon "${couponCode}" applied!`);
  };

  return (
    <div className="cart-page">
      <div className="breadcrumb">
        <span>{t("kok")}</span> / <span>{t("cart")}</span>
      </div>

      {cartItems.length === 0 ? (
        <div className="empty-msg">
          <h3>{t("cartEmpty") || "Your cart is empty"}</h3>
        </div>
      ) : (
        <div className="cart-container">
          {/* Cart Items Table */}
          <div className="cart-items-section">
            <div className="cart-table-header">
              <div className="col-product">{t('product')}</div>
              <div className="col-price">{t('price')}</div>
              <div className="col-quantity">{t('quantity')}</div>
              <div className="col-subtotal">{t('subtotal_header')}</div>
              <div className="col-delete">{t('delete_col')}</div>
            </div>

            <div className="cart-items-list">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item-row">
                  <div className="col-product">
                    <img src={item.img} alt={item.model} className="cart-item-img" />
                    <span>{item.brand} {item.model}</span>
                  </div>
                  
                  <div className="col-price">
                    {item.price}
                  </div>
                  
                  <div className="col-quantity">
                    <div className="quantity-control">
                      <button 
                        onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                        className="qty-btn"
                      >
                        −
                      </button>
                      <input 
                        type="number" 
                        value={String(item.quantity || 1).padStart(2, '0')}
                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                        className="qty-input"
                        min="1"
                      />
                      <button 
                        onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-subtotal">
                    ${(getPrice(item.price) * (item.quantity || 1)).toFixed(2)}
                  </div>

                  <div className="col-delete">
                    <button 
                      className="delete-item-btn"
                      onClick={() => dispatch(removeFromCart(item.id))}
                      title={t('delete_item_title')}
                      aria-label={t('removeBtn')}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="cart-actions">
              <button 
                className="btn-secondary"
                onClick={() => navigate('/home')}
              >
                {t('return_to_shop')}
              </button>
              <button className="btn-primary">
                {t('update_cart')}
              </button>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="cart-summary-section">
            {/* Coupon Code */}
            <div className="coupon-section">
              <input 
                type="text" 
                placeholder={t('coupon_code')}
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="coupon-input"
              />
              <button className="btn-coupon" onClick={handleApplyCoupon}>
                {t('apply')}
              </button>
            </div>

            {/* Cart Total */}
            <div className="cart-total-box">
              <h3>{t('cart_total_title')}</h3>
              
              <div className="total-item">
                <span>{t('subtotal_label')}</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="total-item">
                <span>{t('shipping_label')}</span>
                <span>{shipping === 0 ? t('free_text') : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="total-item total">
                <span>{t('total_label')}</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <button className="btn-checkout">
                {t('process_checkout')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddedCard;