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
        <span>Home</span> / <span>Cart</span>
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
              <div className="col-product">Product</div>
              <div className="col-price">Price</div>
              <div className="col-quantity">Quantity</div>
              <div className="col-subtotal">Subtotal</div>
              <div className="col-delete">Delete</div>
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
                      title="Delete item"
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
                Return To Shop
              </button>
              <button className="btn-primary">
                Update Cart
              </button>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="cart-summary-section">
            {/* Coupon Code */}
            <div className="coupon-section">
              <input 
                type="text" 
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="coupon-input"
              />
              <button className="btn-coupon" onClick={handleApplyCoupon}>
                Apply
              </button>
            </div>

            {/* Cart Total */}
            <div className="cart-total-box">
              <h3>Cart Total</h3>
              
              <div className="total-item">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="total-item">
                <span>Shipping:</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="total-item total">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <button className="btn-checkout">
                Process to checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddedCard;