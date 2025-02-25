

import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
  searched : [],
  filtred : [],
  filtredStatic : [],
  featured : [],
}

const guardapolvosSlice = createSlice({
  name : 'guardapolvos',
  initialState,
  reducers : {
    setSearchedGuardapolvo(state, action) { 
      return { ...state, searched: action.payload }
    },
    setFiltredGuardapolvos(state, action) { 
      return { ...state, filtred: action.payload }
    },
    setStaticFiltredGuardapolvos(state, action) { 
      return { ...state, filtredStatic: action.payload }
    },
    setFeatured(state, action) { 
      return { ...state, featured: action.payload }
    }
  }
})

export const initializeGuardapolvosByTable = (table, guardapolvos) => {
  return async dispatch => {    
    dispatchGuardapolvosByTable(table, guardapolvos, dispatch)
  }
}

const dispatchGuardapolvosByTable = (table, guardapolvos, dispatch) => {
  if(table === 'busqueda'){
    dispatch(setFiltredGuardapolvos(guardapolvos))
  }
  else if(table === 'busqueda static'){
    dispatch(setStaticFiltredGuardapolvos(guardapolvos))
  }
  else if(table === 'featured'){
    dispatch(setFeatured(guardapolvos))
  }
}

export const { setSearchedGuardapolvo, setFiltredGuardapolvos, setStaticFiltredGuardapolvos, setFeatured } = guardapolvosSlice.actions
export default guardapolvosSlice.reducer

