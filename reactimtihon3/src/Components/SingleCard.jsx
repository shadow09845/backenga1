import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { cardlistData, recommendedCardData } from "../data/CardData";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/ShopSlice";
import { FaHeart, FaMinus, FaPlus, FaTruck, FaUndo } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import "./SingleCard.css";

const SingleCard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  // Combine all products for lookup
  const allProducts = [...cardlistData, ...recommendedCardData];
  const product = allProducts.find(p => String(p.id) === String(id));

  const [qty, setQty] = useState(1);

  if (!product) {
    return <h2 style={{textAlign:"center"}}>{t('product_not_found') || 'Product not found'}</h2>;
  }

  return (
    <div className="product-page">

      {/* LEFT SIDE */}
      <div className="product-images">
        <div className="thumbs">
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
        </div>

        <div className="main-img">
          <img src={product.img} alt={product.model} />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="product-info">
        <h1>{product.brand} {product.model}</h1>

        <div className="rating">
          ⭐⭐⭐⭐⭐ <span>({product.reviews} {t('reviews')})</span> <b className="stock">{t('in_stock')}</b>
        </div>

        <h2>${product.price}</h2>

        <p>{product.description}</p>

        <div className="divider"></div>

        <div className="colors">
          <span>{t('colours')}</span>
          <div className="color red"></div>
          <div className="color black"></div>
        </div>

        <div className="sizes">
          <span>{t('size')}</span>
          <button>XS</button>
          <button>S</button>
          <button className="active">M</button>
          <button>L</button>
          <button>XL</button>
        </div>

        <div className="buy-row">
          <div className="qty">
            <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}><FaMinus/></button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}><FaPlus/></button>
          </div>

          <button 
            className="buy-btn"
            onClick={() => {
              dispatch(addToCart({...product, quantity: qty}));
              setQty(1);
            }}
          >
            {t('buy_now')}
          </button>

          <button className="fav"><FaHeart/></button>
        </div>

        <div className="delivery-box">
          <div>
            <FaTruck /> <b>{t('free_fast_delivery')}</b>
            <p>{t('delivery_desc')}</p>
          </div>
          <div>
            <FaUndo /> <b>{t('return_delivery')}</b>
            <p>{t('return_delivery_desc')}</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default SingleCard;
