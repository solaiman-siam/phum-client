import { baseApi } from "../../api/baseApi";


const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: '',
                body: userInfo,
                method: 'POST'
            })
        })

    })
})

export const {useLoginMutation} = authApi
