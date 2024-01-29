import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { RootState } from '../store';
import { Auth, AuthState } from '@/app/types';
import { env } from '../../config/env';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: env.AMYR_SMART_BASE_URL,
        // prepareHeaders: (headers, { getState }) => {
        //     const token = (getState() as RootState).auth.token
        
        //     if (token) {
        //       headers.set('authorization', `Bearer ${token}`)
        //     }
        //     return headers
        // },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<AuthState,Auth>({
            query: ({ username, password }) => ({
                url: 'login',
                method: 'POST',
                body: { username, password },
              }),
            // transformResponse: (response: , meta, arg) => response,
        }),
        // register: builder.mutation<User,Auth>({
        //     query: ({ username, password }) => ({
        //         url: 'register',
        //         method: 'POST',
        //         body: { username, password },
        //       }),
        //     // transformResponse: (response: , meta, arg) => response,
        // }),
        // logout: builder.mutation<User,null>({
        //     query: () => ({
        //         url: 'register',
        //         method: 'POST',
        //       }),
        //     // transformResponse: (response: , meta, arg) => response,
        // }),
    })
})

export const { 
    useLoginMutation, 
    // useRegisterMutation, 
    // useLogoutMutation 
} = authApi

