import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cardlistData, recommendedCardData } from "../data/CardData";
import { addToCart, toggleFavorite } from "../redux/ShopSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Cardlist() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favorites = useSelector((state) => state.shop.favorites);

    // Combine all 10 products for slider
    const allProducts = [...cardlistData, ...recommendedCardData];

    return (
        <div className="Cardlist-container">
            <Swiper
                modules={[Pagination, Navigation]}
                spaceBetween={30}
                pagination={{ clickable: true }}
                navigation={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    480: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                style={{ paddingBottom: '60px' }}
            >
                {allProducts.map((item) => {
                    const isLiked = favorites.some(fav => fav.id === item.id);

                    return (
                        <SwiperSlide key={item.id}>
                            <div className="Card">
                                <div className="card-image-wrapper">
                                    {/* Discount Badge */}
                                    {item.discount && (
                                        <div style={{
                                            position: 'absolute',
                                            top: '12px',
                                            left: '12px',
                                            backgroundColor: '#db4444',
                                            color: 'white',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            fontSize: '12px',
                                            fontWeight: 'bold',
                                            zIndex: 10
                                        }}>
                                            {item.discount}
                                        </div>
                                    )}

                                    <div className="action-buttons-group">
                                        <button 
                                            className="icon-circle" 
                                            onClick={() => dispatch(toggleFavorite(item))}
                                            style={{ color: isLiked ? '#ff4757' : 'black' }}
                                        >
                                            ❤
                                        </button>
                                        
                                        <button 
                                            className="icon-circle" 
                                            onClick={() => navigate(`/singlecard/${item.id}`)}
                                        >
                                            👁
                                        </button>
                                    </div>

                                    <img src={item.img} alt={item.model} />
                                </div>

                                <div className="card-info">
                                    <h3>{item.brand} {item.model}</h3>
                                    <div className="price-box">
                                        <span className="current-price">${item.price}</span>
                                        <span className="old-price">${item.originalPrice}</span>
                                    </div>
                                    <div className="rating-stars">
                                        ★★★★★ <span className="rating-count">({item.reviews})</span>
                                    </div>
                                </div>
                                
                                <button 
                                    className="add-to-cart-btn"
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    Savatga qo'shish
                                </button>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Cardlist;