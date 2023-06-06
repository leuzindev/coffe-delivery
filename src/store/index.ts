import { configureStore } from '@reduxjs/toolkit'
import coffeReducer from 'features/coffeSlice'

const store = configureStore({
  reducer: {
    coffe: coffeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

export { store }
