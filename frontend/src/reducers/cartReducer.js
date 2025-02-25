
import { createSlice, current } from '@reduxjs/toolkit'
import { createRoutesFromElements } from 'react-router-dom'

const initialState = {
  items: [],
  show: false,
}

const cartSlice = createSlice({
  name : 'cart',
  initialState,
  reducers : {
    remove(state, action){
      const itemToDelete = action.payload
      state.items = state.items.filter(item => item.id !== itemToDelete.id || item.size !== itemToDelete.size)
    },
    removeOne(state, action){
      const newItem = action.payload

      if (newItem.amountToBuy - 1 === 0){
        return {...state, items: [...state.items]}
      }else {
        return {...state, items: state.items.map(item => item.id === newItem.id && item.size === newItem.size ? { ...item, amountToBuy: item.amountToBuy - 1 } : item)}
      }
    },
    setShowStatus(state, action) {
      state.show = action.payload
    },
    addOne(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id && item.size === newItem.size)

      if (existingItem) {
        return {...state, items: state.items.map(item => item.id === newItem.id && item.size === newItem.size ? { ...item, amountToBuy: item.amountToBuy + 1 } : item)}
      } else {
        return {...state, items: [...state.items, newItem]}
      }
    },
    setShowStatus(state, action) {
      state.show = action.payload
    },
    clear(state, action){
      state.items = []
    }

  }
})

export const removeFromCart = (item) => {
  return dispatch => {
    dispatch(remove(item))
  }
}

export const removeOneFromCart = content => {
  return dispatch => {
    dispatch(removeOne(content))
  }
}

export const clearCart = () => {
  return dispatch => {
    dispatch(clear())
  }
}

export const addOneToCart = content => {
    return dispatch => {
        dispatch(addOne(content))
    }
}

export const setShow = status => {
  return dispatch => {
    dispatch(setShowStatus(status))
  }
}

export const { addOne, remove, removeOne, setShowStatus, clear } = cartSlice.actions
export default cartSlice.reducer