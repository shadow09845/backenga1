import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite, addToCart } from "../redux/ShopSlice";
import { useTranslation } from "react-i18next";
import { FiTrash2 } from "react-icons/fi";
import './Favorites.css';

function Favorites() {
  const favorites = useSelector((state) => state.shop.favorites);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleAddAllToCart = () => {
    favorites.forEach(item => {
      dispatch(addToCart(item));
    });
    alert('All items added to cart!');
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFavorite = (item) => {
    dispatch(toggleFavorite(item));
  };

  return (
    <div className="favorites-page">
      {/* Header */}
      <div className="favorites-header">
        <div>
          <h1>{t('favoritesTitle')} ({favorites.length})</h1>
        </div>
        <button 
          className="move-all-btn"
          onClick={handleAddAllToCart}
          disabled={favorites.length === 0}
        >
          {t('moveAll') || 'Move All To Bag'}
        </button>
      </div>

      {/* Favorites Grid */}
      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h3>{t("favoritesEmpty") || "Your wishlist is empty"}</h3>
          <p>{t('startAdding') || 'Start adding items to your favorites!'}</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map((item) => (
            <div key={item.id} className="favorite-product">
              {/* Discount Badge */}
              <div className="product-badge">-35%</div>

     
              <div className="product-image-wrapper">
                <img src={item.img} alt={item.model} className="product-image" />
                <button 
                  className="delete-btn"
                  onClick={() => handleRemoveFavorite(item)}
                  title={t('removeLikeBtn') || 'Remove from wishlist'}
                >
                  <FiTrash2 size={20} />
                </button>
              </div>

            
              <button 
                className="add-to-cart-btn-fav"
                onClick={() => handleAddToCart(item)}
              >
                🛒 {t('add_to_cart') || 'Add to Cart'}
              </button>

          
              <div className="product-info-fav">
                <h3 className="product-name">{item.brand} {item.model}</h3>
                
         
                <div className="price-section">
                  <span className="current-price">${item.price}</span>
                  <span className="original-price">$1160</span>
                </div>

               
                <div className="ratings">
                  <span className="stars">★★★★★</span>
                  <span className="rating-count">(88)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;