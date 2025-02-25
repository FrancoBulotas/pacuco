
import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import guardapolvosReducer from './reducers/guardapolvosReducer'
import cartReducer from './reducers/cartReducer'
import filterReducer from './reducers/filterReducer'
import loginReducer from './reducers/loginReducer'
import adminReducer from './reducers/adminReducer'
import paymentMethodsReducer from './reducers/paymentMethodsReducer'
import configReducer from './reducers/configReducer'

const persistConfigCart = {
    key: 'cart',
    storage,
}
const persistConfigLogin = {
    key: 'login',
    storage,
}
const persistConfigAdmin = {
    key: 'admin',
    storage,
}
const persistConfigFilter = {
    key: 'filter',
    storage,
}
const persistedCartReducer = persistReducer(persistConfigCart, cartReducer)
const persistedLoginReducer = persistReducer(persistConfigLogin, loginReducer)
const persistedAdminReducer = persistReducer(persistConfigAdmin, adminReducer)
const persistedFilterReducer = persistReducer(persistConfigFilter, filterReducer)

export const rootReducer = combineReducers({
    guardapolvos: guardapolvosReducer,
    cart: persistedCartReducer,
    filter: persistedFilterReducer,
    login: persistedLoginReducer,
    paymentMethods: paymentMethodsReducer,
    administration: persistedAdminReducer,
    config:  configReducer
})
