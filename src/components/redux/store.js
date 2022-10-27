import { configureStore } from '@reduxjs/toolkit'
import authSliceReducer from './feature/auth/authSlice';

export default configureStore({
    reducer: {
        auth: authSliceReducer
    }
})