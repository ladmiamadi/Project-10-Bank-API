import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'user',
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
            })
        }
    }
});

export const {useGetTokenMutation} = userApi;