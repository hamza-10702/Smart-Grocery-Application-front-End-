import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  email: '',
  name: '',
};

export const userSlice  = createSlice({
    name: 'userInformation',
    initialState,
    reducers: {
        setUserInformation : (state , action)=>{
            state.email  = action.payload.email,
            state.name = action.payload.name
        },
        resetUserInformation : (state , action)=>{
            state.email  = null,
            state.name = null
        },

    }
}) 

export const {setUserInformation , resetUserInformation} = userSlice.actions;
export default userSlice.reducer