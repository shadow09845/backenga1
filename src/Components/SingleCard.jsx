import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { cardlistData, recommendedCardData } from "../data/CardData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ShopSlice";

const SingleCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Combine all products for lookup
  const allProducts = [...cardlistData, ...recommendedCardData];
  const product = allProducts.find((p) => String(p.id) === String(id));

  if (!product) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2 className="error">Mahsulot topilmadi!</h2>
        <button onClick={() => navigate('/home')}>Bosh sahifaga qaytish</button>
      </div>
    );
  } 

  return (
    <div className="single-card-wrapper" style={{ padding: '40px', position: 'relative' }}>
      <button 
        onClick={() => navigate(-1)} 
        style={{ 
          cursor: 'pointer', 
          marginBottom: '20px',
          padding: '8px 15px' 
        }}
      >
        Orqaga
      </button>

      <h1>{product.brand} {product.model}</h1>

      <div className="single-card-container" style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
        <div className="single-img">
          <img 
            src={product.img} 
            alt={product.model} 
            style={{ width: '350px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} 
          />
        </div>

        <div className="single-info">
          <p style={{ 
            fontSize: '20px',
            color: '#666',
            marginBottom: '20px',
            lineHeight: '1.5'
          }}>
            {product.description}
          </p>
          
          <h2 style={{ color: '#2ecc71' }}>Narxi: {product.price} $</h2>
          <p style={{ fontSize: '18px' }}><strong>Xotira:</strong> {product.storage}</p>
          
          <button 
            className="add-btn" 
            style={{ 
              padding: '12px 25px', 
              backgroundColor: '#007bff', 
              color: '#fff', 
              border: 'none', 
              borderRadius: '8px', 
              cursor: 'pointer',
              fontSize: '16px',
              marginTop: '10px'
            }}
            onClick={() => dispatch(addToCart(product))}
          >
             Savatchaga qo'shish
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;