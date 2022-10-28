import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const jwt = JSON.parse(localStorage.getItem('jwt'));
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (builder) => ({
    createStaff: builder.mutation({
      query: (payload) => ({
        url: 'auth/signup',
        method: 'POST',
        body: payload,
        headers: {
          'Content-type': 'application/json',
        },
      }),
    }),
    getAllStaff: builder.query({
      query: () => ({
        url: 'users/?user_type=staff',
        method: 'GET',
        headers: {
          accept: 'application/json',
          'Content-type': 'application/json',
          'x-access-token': jwt.accessToken,
        },
      }),
    }),
  }),
});

export const { useCreateStaffMutation, useGetAllStaffQuery } = userApi;
