import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { baseURl } from '../utils/base_URL';

export const userAuthenticationAPI = createApi({
  reducerPath: 'userAuthenticationAPI',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://smart-grocery-application.herokuapp.com/',
    baseUrl: baseURl,
  }),

  endpoints: builder => ({
    // for sign up post  Api
    signUp: builder.mutation({
      query: userSignUpData => {
        return {
          url: 'signup',
          method: 'POST',
          body: userSignUpData,
          headers: {
            'Content-type': 'application/json',
          },
        };
      },
    }),

    // for login post api
    login: builder.mutation({
      query: userLoginData => {
        return {
          url: 'signin',
          method: 'POST',
          body: userLoginData,
          headers: {
            'Content-type': 'application/json',
          },
        };
      },
    }),

    // for getting login userInformation
    loggedInUser: builder.query({
      query: token => {
        return {
          url: '/logedin-user',
          method: 'GET',
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    allProduct: builder.query({
      query: () => {
        return {
          url: 'product',
          method: 'GET',
          headers: {
            // authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    scanList: builder.mutation({
      query: imgData => {
        return {
          url: 'scan-image',
          method: 'POST',
          body: imgData,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        };
      },
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useLoggedInUserQuery,
  useScanListMutation,
  useAllProductQuery,
} = userAuthenticationAPI;
