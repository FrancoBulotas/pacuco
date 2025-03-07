

import { createSlice, current } from '@reduxjs/toolkit'
import paymentMethodsService from '../services/paymentMethods'

const paymentMethodSlice = createSlice({
    name : 'paymentMethods',
    initialState: {},
    reducers : {
        setMethods(state, action) {
            return action.payload
        }
    }
})

export const initializePaymentMethods = () => {
    return async dispatch =>  {
        const methods = await paymentMethodsService.getAll()
        dispatch(setMethods(methods))
    }
}

export const setNewPaymentMethods = (id, content) => {
    return async dispatch => {
        const methods = await paymentMethodsService.update(id, content);
        await paymentMethodsService.clearCache();
        dispatch(setMethods(methods))
    }
}

export const { setMethods } = paymentMethodSlice.actions
export default paymentMethodSlice.reducer