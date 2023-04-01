import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    items:[],
  },
  reducers: {
    add: (state,action) => {
        state.items = [...state.items, action.payload]
        console.log(state.items);
        // state.items=new_items;
        // state.items += 1
    },
    remove: (state,action) => {
        const index = state.items.findIndex((item) => item.id === action.payload.id);
        let new_items = [...state.items];
        if (index >= 0) {
            new_items.splice(index, 1);
        }else {
            console.warn(
                `Can't remove product (id: ${action.payload}) as its not in basket!`
            )
        }
        state.items = new_items;

    },
    
   
  },
})

// Action creators are generated for each case reducer function
export const { add, remove } = counterSlice.actions

export const selectItems = (state) => state.counter.items;

export const addwithId = (state,id) => state.counter.items.filter((item) => item.id === id) ;

//total price
export const totalprice = (state) => state.counter.items.reduce((total,item) => total += item.price,0);

export default counterSlice.reducer