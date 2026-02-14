import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cardlistData, recommendedCardData } from "../data/CardData";
import { addToCart, toggleFavorite } from "../redux/ShopSlice";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Cardlist() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const favorites = useSelector((state) => state.shop.favorites);

    // Combine all 10 products for slider
    const allProducts = [...cardlistData, ...recommendedCardData];

    // AOSni faollashtiramiz
    useEffect(() => {
        Aos.init({ duration: 1000, once: false});
    }, []);

    const { t } = useTranslation();

    return (
        <div className="Cardlist-container" data-aos="fade-up">
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
                            <div className="Card" data-aos="flip-left">
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

                                    {/* Action Buttons */}
                                    <div className="action-buttons-group">
                                        <button 
                                            className="icon-circle favorite-btn" 
                                            onClick={() => dispatch(toggleFavorite(item))}
                                            style={{ color: isLiked ? '#ff4757' : 'black' }}
                                        >
                                            ❤
                                        </button>
                                        
                                        <button 
                                            className="icon-circle view-btn" 
                                            onClick={() => navigate(`/singlecard/${item.id}`)}
                                        >
                                            👁
                                        </button>
                                    </div>

                                    <img src={item.img} alt={item.model} className="card-img"/>
                                </div>

                                {/* Card Info */}
                                <div className="card-info">
                                    <h3 className="card-title">{item.brand} {item.model}</h3>
                                    <div className="price-box">
                                        <span className="current-price">${item.price}</span>
                                        <span className="old-price">${item.originalPrice}</span>
                                    </div>
                                    <div className="rating-stars">
                                        ★★★★★ <span className="rating-count">({item.reviews})</span>
                                    </div>
                                </div>
                                
                                {/* Add to Cart Button */}
                                <button 
                                    className="add-to-cart-btn"
                                    onClick={() => dispatch(addToCart(item))}
                                >
                                    {t("add_to_cart")}
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
