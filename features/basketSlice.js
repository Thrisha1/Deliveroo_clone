import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  restaurant:{
    id:null,
    img:null,
    title:null,
    rating:null,
    short_desc:null,
    address:null,
    dishes:null,
  },
}

export const basketSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant : (state, action) => {
      state.restaurant = action.payload
    },
  //   removeBasket : (state, action) => {
  //     const new_items = state.restaurant.filter(basket => basket.id !== action.payload.id)
  //     state.restaurant = new_items
  // },
}})

// Action creators are generated for each case reducer function
export const {setRestaurant,removeBasket} = basketSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurant;


export default basketSlice.reducer