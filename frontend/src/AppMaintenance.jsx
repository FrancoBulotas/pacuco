
import { useEffect, Suspense, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";

import { initializePaymentMethods } from './reducers/paymentMethodsReducer';
import { setConfig } from './reducers/configReducer';
import { setProducts } from './reducers/guardapolvosReducer';
import searchProdsService from './services/searchProds';
import configService from './services/configs';

import CheckPermissionsAdministration from './components/admin/common/CheckPermissionsAdministration';
import LoadingScreen from './components/common/loaders/LoadingScreen';
import ScrollToTop from './components/common/ScrollToTop';
import NavBar from './components/common/NavBar';
import HomeMaintenance from './components/home/HomeMaintenance';
import Footer from './components/common/Footer';

// code splitting
const Login = lazy(() => import('./components/common/Login'))
const Register = lazy(() => import('./components/common/Register'))
const Main = lazy(() => import('./components/admin/common/Main'))
const AdminWithNavBar = lazy(() => import('./components/admin/common/AdminWithNavBar'))
const StockAdministration = lazy(() => import('./components/admin/StockAdministration'))
const PaymentAdministration = lazy(() => import('./components/admin/PaymentAdministration'))
const PurchaseHistory = lazy(() => import('./components/admin/PurchaseHistory'))
const UsersAdministration = lazy(() => import('./components/admin/UsersAdministration'))
const ContentAdministration = lazy(() => import('./components/admin/ContentAdministration'))

import './assets/styles/index.scss';

function AppMaintenance() {  
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchConfig = async () => {
            const config = await configService.get();
            dispatch(setConfig(config));
        }    
        const fetchAllProducts = async () => {
            const response = await searchProdsService.getSearch({'category': ''});
            dispatch(setProducts(response));
        }

        fetchConfig();
        fetchAllProducts();
        dispatch(initializePaymentMethods());
    }, [])

    return (
    <div>   
        <div className=''>
            <NavBar />
            <ScrollToTop />         
            <Suspense fallback={<LoadingScreen />}> 
                <Routes>
                <Route path='/' element={<HomeMaintenance />}></Route>   
                <Route path='/login' element={<Login />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/administracion' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<Main />} />} />}></Route>
                <Route path='/administracion/productos' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<StockAdministration />} />}/>}></Route>
                <Route path='/administracion/mediosDePago' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<PaymentAdministration />}/>} />}></Route>
                <Route path='/administracion/historial' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<PurchaseHistory />} />} />}></Route> 
                <Route path='/administracion/usuarios' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<UsersAdministration />} />} />}></Route> 
                <Route path='/administracion/contenido' element={<CheckPermissionsAdministration component={<AdminWithNavBar component={<ContentAdministration />} />} />}></Route> 
                {/* Manejo de rutas 404 */}
                <Route path="*" element={<HomeMaintenance />} />
                </Routes>
            </Suspense>
            <Footer /> 
            <SpeedInsights /> 
            <Analytics />
        </div>
    </div>
  )
}

export default AppMaintenance
