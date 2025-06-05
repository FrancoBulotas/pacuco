
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { formatNumber, roundNumber } from '../product/common/functions';
import { validateIfItemHasDiscount, checkDiscountPorcentage } from '../common/functions';
import ImageComponent from '../common/Placeholders/ImageComponent';
import CheckIfIsStockOrCustomizable from '../product/common/CheckIfIsStockOrCustomizable.jsx';
import LoadingScreen from '../common/loaders/LoadingScreen';

const CarouselProd = ({ title, prods }) => {
  const [featuredProducts, setFeaturedProducts] = useState(prods);
  const navigate = useNavigate();

  return (
    <div className="product-carousel-section">
      <div className="product-carousel-header">
        <h2 className="product-carousel-title">
          {title}
        </h2>
        <div className="product-carousel-divider"></div>
      </div>
      
      <div className="carousel-container-prods">
        {/* Left arrow - positioned absolutely */}
        <div className="swiper-button-prev-custom side-arrow left-arrow"></div>
        
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom'
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
            bulletClass: 'swiper-pagination-bullet-custom',
            bulletActiveClass: 'swiper-pagination-bullet-active-custom'
          }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={false}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            600: { slidesPerView: 2.5 },
            1000: { slidesPerView: 3.5 },
            1200: { slidesPerView: 4.5 },
          }}
          className="product-swiper"
        >
          { featuredProducts.length === 0 
          ? <LoadingScreen home={true} /> 
          : featuredProducts.map((item, i) => (
             item.amount !== 0 && <SwiperSlide key={i} onClick={() => navigate(`/products?id=${item.id}`)}>
              <div className="product-card compact">
                {item.table === 'stock' && item.amount === 0 && (
                  <div className="out-of-stock-badge">Sin Stock</div>
                )}
                
                <div className="product-image-container">
                  <CheckIfIsStockOrCustomizable guardapolvo={item} navigateTo={item.table} loadGuardapolvos={true} />
                  <div className="product-image-wrapper">
                    <div className="product-images">
                      <ImageComponent src={item.img} alt={item.description.general} className="product-image primary" />
                      <ImageComponent src={item.img2} alt={item.description.general} className="product-image secondary" secondImg={true} />
                    </div>
                  </div>
                </div>
                
                <div className="product-details">
                  <h3 className="product-name">{item.name}</h3>
                  
                  <div className="product-price">
                    {validateIfItemHasDiscount(item) ? (
                      <>
                        <div className="price-container">
                          <span className="original-price">$ {formatNumber(item.listedPrice)}</span>
                          <span className="discount-badge">{checkDiscountPorcentage(item)}% OFF</span>
                        </div>
                        <span className="final-price">$ {formatNumber(item.discountListedPrice)}</span>
                      </>
                    ) : (
                      // <span className="final-price">$ {formatNumber(item.listedPrice)}</span>
                      <>
                        <p style={{ margin: '0px'}}>
                            <strong>$ {formatNumber(item.listedPrice)} </strong>
                            <span className='span-product'>precio de lista</span>
                        </p>
                        <p style={{ margin: '0px'}}>
                            <span className='span-product'>$ {formatNumber(item.price)} </span>
                            <span className='span-product'>transferencia o efectivo</span>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next-custom side-arrow right-arrow"></div>
      </div>
    </div>
  );
};

export default CarouselProd;