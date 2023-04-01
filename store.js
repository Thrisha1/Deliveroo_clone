import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import restaurantReducer from './features/basketSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    restaurant: restaurantReducer,
  },
})
