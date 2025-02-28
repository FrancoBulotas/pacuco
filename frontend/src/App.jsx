
import React, { useState } from 'react';
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, useLocation, useSearchParams } from 'react-router-dom';

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import { initializePaymentMethods } from './reducers/paymentMethodsReducer';
import { setConfig } from './reducers/configReducer';
import CheckPermissionsAdministration from './components/admin/common/CheckPermissionsAdministration';
import { setFiltredGuardapolvos, setStaticFiltredGuardapolvos, setSearchedGuardapolvo } from './reducers/guardapolvosReducer'
import searchProdsService from './services/searchProds'
import configService from './services/configs'

import { selectTable } from './components/common/functions'

import LoadingScreen from './components/common/loaders/LoadingScreen';
import ScrollToTop from './components/common/ScrollToTop'

import NavBar from './components/common/NavBar'
import Home from './components/home/Home'
import Footer from './components/common/Footer';
import NotFoundPage from './components/common/NotFoundPage';
// code splitting
const Login = lazy(() => import('./components/common/Login'))
const Register = lazy(() => import('./components/common/Register'))
//const Administration = lazy(() => import('./components/admin/Administration'))
const Main = lazy(() => import('./components/admin/common/Main'))
const AdminWithNavBar = lazy(() => import('./components/admin/common/AdminWithNavBar'))
const StockAdministration = lazy(() => import('./components/admin/StockAdministration'))
const PaymentAdministration = lazy(() => import('./components/admin/PaymentAdministration'))
const GuardapolvosFeatured = lazy(() => import('./components/admin/GuardapolvosFeatured'))
const PurchaseHistory = lazy(() => import('./components/admin/PurchaseHistory'))
const UsersAdministration = lazy(() => import('./components/admin/UsersAdministration'))
const ContentAdministration = lazy(() => import('./components/admin/ContentAdministration'))
const Products = lazy(() => import('./components/product/Products'))
const Product = lazy(() => import('./components/product/Product'))
const BuyProductForm = lazy(() => import('./components/product/BuyProduct/BuyProductForm'))

import './assets/styles/index.scss'

function App() {  
  const [queryParams, setQueryParams] = useState({table:''});
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const filtredGuardapolvos = useSelector(state => state.guardapolvos.filtred);
  const searchedGuardapolvo = useSelector(state => state.guardapolvos.searched);
 
  // obtenemos config y la guardamos en reducer
  useEffect(() => {
    const fetchConfig = async () => {
      const config = await configService.get();
      dispatch(setConfig(config));
    }    
    fetchConfig();
  }, [])

  // Seteamos guardapolvos en base a los parametros de busqueda en la URL
  useEffect(() => {
    const fetchProducts = async () => {
      // setEveryGuardapolvo(await searchProdsService.getSearch({'all': true}));

      if(searchParams && searchParams.size > 0){
        const params = {};
        searchParams.forEach((value, key) => {
            params[key] = value;
        });
        setQueryParams(params);
        try {
            const response = await searchProdsService.getSearch(params);
            if(response.length === 1){
              dispatch(setFiltredGuardapolvos(response));
              dispatch(setSearchedGuardapolvo(response[0]));
            }
            else if(response != undefined) {
              dispatch(setFiltredGuardapolvos(response));
              dispatch(setStaticFiltredGuardapolvos(response));
            }
        } catch (err) {
            console.error(err.message);
        }
      }
    };

    fetchProducts();
    dispatch(initializePaymentMethods())
  }, [searchParams, dispatch, location.search]);

  // se encarga de determinar si lo que se va a mostrar es el guardapolvo individual o todos los productos
  const showByIdOrNot = () => {
    if (queryParams.id) {
      if (!searchedGuardapolvo || Object.keys(searchedGuardapolvo).length === 0) {
        return <LoadingScreen />; 
      }
      return <Product navigateTo={searchedGuardapolvo?.table} product={searchedGuardapolvo} />
    } else {
      return <Products guardapolvos={filtredGuardapolvos} table={selectTable(queryParams)} />
    }
  }

  return (
    <div>   
        <NavBar />
        <div className='mainBody'>
          <ScrollToTop />         
          <Suspense fallback={<LoadingScreen />}> 
            <Routes>
              <Route path='/' element={<Home />}></Route>   
              <Route path='/products' element={showByIdOrNot()}></Route>
              <Route path='/finalizarCompra' element={<BuyProductForm />}></Route>
              {/* Administracion */}
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/administracion' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<Main />} />} />}></Route>
              <Route path='/administracion/productos' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<StockAdministration />} />}/>}></Route>
              <Route path='/administracion/mediosDePago' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<PaymentAdministration />}/>} />}></Route>
              <Route path='/administracion/historial' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<PurchaseHistory />} />} />}></Route> 
              <Route path='/administracion/usuarios' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<UsersAdministration />} />} />}></Route> 
              <Route path='/administracion/contenido' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<ContentAdministration />} />} />}></Route> 
              <Route path='/administracion/guardapolvosDestacados' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<GuardapolvosFeatured />} />} />}></Route> 
              {/* Manejo de rutas 404 */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
          <Footer /> 
          <SpeedInsights /> 
          <Analytics />
        </div>
    </div>
  )
}

export default App
