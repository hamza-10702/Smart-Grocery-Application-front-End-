import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData : []
}

export const cartSlice = createSlice({
    name: 'cartInformation',
    initialState,
    reducers: {
        setCartInformation : (state , action)=>{
            state.cartData  = action.payload.cartData  
        },
        resetCartInformation : (state , action)=>{
            state.cartData  = []  
        },
    }
}) 

export const {setCartInformation , resetCartInformation} = cartSlice.actions;
export default cartSlice.reducer