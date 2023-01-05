import { configureStore } from '@reduxjs/toolkit'
import countReducer from './features/counter/counterSlice'

export const store = configureStore(
    {
        reducer: {
            count: countReducer,
        }
    }
)