import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        value: 0,
        userData: null,
        accessToken: null
    },
    reducers: {
        increment: state => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        userLoggedIn: (state, action) => {
            state.userData = action.payload
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions

export default authSlice.reducer