import { createSlice } from "@reduxjs/toolkit";
const initialState = {
   data : []
  };

export const productSlice = createSlice({
    name: 'productInformation',
    initialState,
    reducers: {
        setProductInformation : (state , action)=>{
            state.data  = action.payload.data  
        },
    }
}) 

export const {setProductInformation} = productSlice.actions;
export default productSlice.reducer
