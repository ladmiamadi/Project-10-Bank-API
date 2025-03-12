import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/api/v1'
    }),
    endpoints(builder) {
        return {
            getToken: builder.mutation({
                query: (credentials) => {
                    return {
                        url: '/user/login',
                        method: 'POST',
                        body: {
                            email: credentials.email,
                            password: credentials.password
                        }
                    }
                }
            }),
            updateProfile: builder.mutation({
                query: (credentials) => {
                    return {
                        url: '/user/profile',
                        method: 'PUT',
                        headers: {
                            authorization: `Bearer ${credentials.token}`
                        },
                        body: {
                            firstName: credentials.firstname,
                            lastName: credentials.lastname,
                        }
                    }
                }
            }),
            getUserInformations: builder.mutation({
                query: (credentials) => {
                    return {
                        url: '/user/profile',
                        method: 'POST',
                        headers: {
                            authorization: `Bearer ${credentials.token}`
                        }
                    }
                }
            })
        }
    }
});

export const {useGetTokenMutation, useUpdateProfileMutation, useGetUserInformationsMutation } = userApi;