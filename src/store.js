import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
// import postsReducer from '../features/posts/postsSlice'
// import usersReducer from '../features/users/usersSlice'
// import notificationsReducer from '../features/notifications/notificationsSlice'
import {userAuthenticationAPI} from './services/userAuthentication';
import userInfoReducer from './features/api/userReducerSlice';
import productInfoReducer from './features/api/productReducerSlice';
import cartInfoReducer from './features/api/cartReducerSlice';


export const store = configureStore({
  reducer: {
    [userAuthenticationAPI.reducerPath]: userAuthenticationAPI.reducer,
    userInfo: userInfoReducer,
    productInfo: productInfoReducer,
    cartInfo: cartInfoReducer

  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(userAuthenticationAPI.middleware),
});

setupListeners(store.dispatch);
