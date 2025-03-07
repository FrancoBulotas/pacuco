
import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    search: '',
    previusSearch: '',
    choosenSize: '',
    choosenTable: '',
    choosenPage: 1
}

const filterSlice = createSlice({
    name : 'filter',
    initialState,
    reducers: {
        filterChange(state, action) {
            state.search = action.payload
            return state
        },
        setPreviusSearch(state, action) {
            state.previusSearch = action.payload
            return state
        },
        setChoosenSize(state, action) {
            state.choosenSize = action.payload
            return state
        },
        setChoosenPage(state, action) {
            const page = action.payload.page

            return {...state, 
                choosenPage: page
            }
        }
    }
})

export const { filterChange, setPreviusSearch, setChoosenSize, setChoosenPage } = filterSlice.actions
export default filterSlice.reducer