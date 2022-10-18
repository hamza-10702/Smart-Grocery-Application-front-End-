import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const userAuthenticationAPI = createApi({
  reducerPath: 'userAuthenticationAPI',
  baseQuery: fetchBaseQuery({baseUrl: '/fakeApi'}),

  endpoints: builder => ({
    // for sign up post  Api
    signUpApi: builder.mutation({
      query: userSignUpData => {
        return {
          url: 'yehan end point aaega',
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
          url: 'yahan login ka end point aaega',
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
          url: 'yahan url aaega',
          method: 'GET',
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),

    // other API methods
  }),
});

export const {useSignUpApiMutation , useLoginMutation , useLoggedInUserQuery} =
  userAuthenticationAPI;
