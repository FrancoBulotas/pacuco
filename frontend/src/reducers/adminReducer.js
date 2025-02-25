


import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    categoryTabChoosen: 'guardapolvo',
    typeTabChoosen : ''
}

const adminSlice = createSlice({
    name : 'administration',
    initialState: initialState,
    reducers : {
        setNewCategoryTab(state, action) {
            state.categoryTabChoosen = action.payload
            return state
        },
        setNewTypeTab(state, action) {
            state.typeTabChoosen = action.payload
            return state
        }
    }
})

export const setCategoryTab = (input) => {
    return dispatch =>  {
        dispatch(setNewCategoryTab(input))
    }
}

export const setTypeTab = (input) => {
    return dispatch =>  {
        dispatch(setNewTypeTab(input))
    }
}

export const { setNewCategoryTab, setNewTypeTab } = adminSlice.actions
export default adminSlice.reducer