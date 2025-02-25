
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
    <div className="container px-4 py-3" id="custom-cards">
      <h2 className="pb-2" style={{cursor:'pointer'}} onClick={() => navigate(`/products?type=${table.table}`)}>{title}</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={false}
        spaceBetween={10}
        breakpoints={{
          0: { slidesPerView: 1 },
          600: { slidesPerView: 2 },
          1000: { slidesPerView: 3 },
        }}
        className="swiper-container"
      >
        {guardapolvos.map((item, i) => (
          <SwiperSlide key={i} onClick={() => navigate(`/products?id=${item.id}`)} style={{ cursor: 'pointer' }}>
            <div className="card" >
              {item.table === 'stock' && item.amount === 0 ? (
                <div className="badge bg-dark text-white position-absolute tag-stock">Sin Stock</div>
              ) : null}

              <CheckIfIsStockOrCustomizable guardapolvo={item} navigateTo={item.table} loadGuardapolvos={true} />

              <div className="contenedor-imgs">
                <div className="contenedor-img-carrito">
                  <ImageComponent src={item.img} alt={item.description.general} className="card-logo" />
                  <ImageComponent src={item.img2} alt={item.description.general} className="card-logo-hover" secondImg={true} />
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-name text-center fs-5" style={{ fontWeight: '300' }}>
                  {item.name}
                </h4>

                <div className="card-role text-center">
                  {validateIfItemHasDiscount(item) ? (
                    <>
                      <div className="precioProducto">
                        <span className="text-decoration-line-through" style={{ marginRight: '8px', color: 'gray' }}>
                          $ {formatNumber(item.price)}
                        </span>
                        <span className="porcentajeProductoOff">{checkDiscountPorcentage(item)}% OFF</span>
                      </div>
                      <p className="fw-bolder" style={{ marginTop: '10px' }}>
                        $ {formatNumber(item.discountPrice)}
                      </p>
                    </>
                  ) : (
                    <div className="precioProducto">
                      <span className="text-dark" style={{ color: '#000' }}>
                        $ {formatNumber(item.price)}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselProd;