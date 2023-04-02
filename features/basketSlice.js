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
      state.restaurant = action.payload.id
    },
    removeall : (state, action) => {
      // const new_items = state.restaurant.reduce( function (acc, item) {
      //   if (item.id !== action.payload.id) {
      //     acc.push(item)
      //   }})
      // state.restaurant = new_items
      console.log(state.restaurant);
  },
}})

// Action creators are generated for each case reducer function
export const {setRestaurant,removeall} = basketSlice.actions

export const selectRestaurant = (state) => state.restaurant.restaurant;


export default basketSlice.reducer