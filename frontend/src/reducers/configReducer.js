
import { createSlice, current } from '@reduxjs/toolkit'

const configSlice = createSlice({
    name : 'config',
    initialState: null,
    reducers : {
        setConfig(state, action) {
            return action.payload
        }
    }
})

// export const setConfig = (input) => {
//     return dispatch =>  {
//         dispatch(setConfig(input))
//     }
// }

export const { setConfig } = configSlice.actions
export default configSlice.reducer