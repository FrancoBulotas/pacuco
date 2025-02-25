
import { createSlice, current } from '@reduxjs/toolkit'

const loginSlice = createSlice({
    name : 'login',
    initialState: null,
    reducers : {
        setNewUser(state, action) {
            return action.payload
        }
    }
})

export const setUser = (input) => {
    return dispatch =>  {
        dispatch(setNewUser(input))
    }
}

export const { setNewUser } = loginSlice.actions
export default loginSlice.reducer