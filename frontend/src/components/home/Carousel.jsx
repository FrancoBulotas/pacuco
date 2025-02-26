
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { formatNumber } from '../product/common/functions';
import { validateIfItemHasDiscount, checkDiscountPorcentage } from '../common/functions';
import ImageComponent from '../common/Placeholders/ImageComponent';
import CheckIfIsStockOrCustomizable from '../product/common/CheckIfIsStockOrCustomizable.jsx';
import searchProdsService from '../../services/searchProds.js';
import { setFeatured } from '../../reducers/guardapolvosReducer.js';

const CarouselProd = ({ title, table }) => {
  const [guardapolvos, setGuardapolvos] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const initializeGuardapolvos = async () => {
      if (searchParams && searchParams.size === 0) {
        try {
          const everyGuardapolvos = await searchProdsService.getSearch(table);
          let stockGuardapolvos = []
          
          if(table.table === 'stock'){
            stockGuardapolvos = everyGuardapolvos.filter(item => item.amount > 0 && item.category === 'guardapolvo');
            setGuardapolvos(stockGuardapolvos.slice(0, 15));
          } else {
            setGuardapolvos(everyGuardapolvos.slice(0, 15));
          }

          dispatch(setFeatured(everyGuardapolvos.slice(0, 15)));
        } catch (err) {
          console.error(err.message);
        }
      }
    };
    initializeGuardapolvos();
  }, []);

  return (
    <div className="product-carousel-section">
      <div className="product-carousel-header">
        <h2 className="product-carousel-title" onClick={() => navigate(`/products?type=${table.table}`)}>
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
          {guardapolvos.map((item, i) => (
            <SwiperSlide key={i} onClick={() => navigate(`/products?id=${item.id}`)}>
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
                          <span className="original-price">$ {formatNumber(item.price)}</span>
                          <span className="discount-badge">{checkDiscountPorcentage(item)}% OFF</span>
                        </div>
                        <span className="final-price">$ {formatNumber(item.discountPrice)}</span>
                      </>
                    ) : (
                      <span className="final-price">$ {formatNumber(item.price)}</span>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Right arrow - positioned absolutely */}
        <div className="swiper-button-next-custom side-arrow right-arrow"></div>
      </div>
      
      {/* Pagination below */}
      {/* <div className="pagination-container">
        <div className="swiper-pagination-custom"></div>
      </div> */}
    </div>
    // <div className="container px-4 py-3" id="custom-cards">
    //   <h2 className="pb-2" style={{cursor:'pointer'}} onClick={() => navigate(`/products?type=${table.table}`)}>{title}</h2>

    //   <Swiper
    //     modules={[Navigation, Pagination, Autoplay]}
    //     navigation
    //     pagination={{ clickable: true }}
    //     autoplay={{ delay: 3000, disableOnInteraction: false }}
    //     loop={false}
    //     spaceBetween={10}
    //     breakpoints={{
    //       0: { slidesPerView: 1 },
    //       600: { slidesPerView: 2 },
    //       1000: { slidesPerView: 3 },
    //     }}
    //     className="swiper-container"
    //   >
    //     {guardapolvos.map((item, i) => (
    //       <SwiperSlide key={i} onClick={() => navigate(`/products?id=${item.id}`)} style={{ cursor: 'pointer' }}>
    //         <div className="card" >
    //           {item.table === 'stock' && item.amount === 0 ? (
    //             <div className="badge bg-dark text-white position-absolute tag-stock">Sin Stock</div>
    //           ) : null}

    //           <CheckIfIsStockOrCustomizable guardapolvo={item} navigateTo={item.table} loadGuardapolvos={true} />

    //           <div className="contenedor-imgs">
    //             <div className="contenedor-img-carrito">
    //               <ImageComponent src={item.img} alt={item.description.general} className="card-logo" />
    //               <ImageComponent src={item.img2} alt={item.description.general} className="card-logo-hover" secondImg={true} />
    //             </div>
    //           </div>
    //           <div className="card-body">
    //             <h4 className="card-name text-center fs-5" style={{ fontWeight: '300' }}>
    //               {item.name}
    //             </h4>

    //             <div className="card-role text-center">
    //               {validateIfItemHasDiscount(item) ? (
    //                 <>
    //                   <div className="precioProducto">
    //                     <span className="text-decoration-line-through" style={{ marginRight: '8px', color: 'gray' }}>
    //                       $ {formatNumber(item.price)}
    //                     </span>
    //                     <span className="porcentajeProductoOff">{checkDiscountPorcentage(item)}% OFF</span>
    //                   </div>
    //                   <p className="fw-bolder" style={{ marginTop: '10px' }}>
    //                     $ {formatNumber(item.discountPrice)}
    //                   </p>
    //                 </>
    //               ) : (
    //                 <div className="precioProducto">
    //                   <span className="text-dark" style={{ color: '#000' }}>
    //                     $ {formatNumber(item.price)}
    //                   </span>
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //         </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </div>
  );
};

export default CarouselProd;