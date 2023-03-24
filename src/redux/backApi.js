import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:1337/',
    prepareHeaders: (headers,) => {
        const token = localStorage.getItem("token")
        console.log(token);
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', token)
        }

        return headers
    },
})


export const backApi = createApi({
    reducerPath: 'backApi',
    baseQuery,
    endpoints: (build) => ({
        getPosts: build.query({
            query: (option) => `posts/${option.page}/${option.inOnePage}/${option.newOrOld}/${option.searchValue ? option.searchValue : "all"}/`

        }),
        getOnePost: build.query({
            query: (id) => `posts/${id}`

        }),
        addPost: build.mutation({
            query: (body) => ({
                url: "posts",
                method: "POST",
                body
            })
        }),
        renovePost: build.mutation({
            query: (id) => ({
                url: "posts/" + id,
                method: "DELETE",
            })

        }),
        login: build.mutation({
            query: (body) => ({
                url: "auth/login",
                method: "POST",
                body
            }),
        }),
        myProfileByToken: build.query({
            query: () => `/auth/me/`
        }),
        ProfileById: build.query({
            query: (id) => `/user/${id}`
        }),
        // updatePost: build.mutation({
        //     query: () => ({
        //         url: "posts/",
        //         method: "POST",
        //         body
        //     })
        // }),


    })
})
export const { useGetPostsQuery, useAddPostMutation, useGetOnePostQuery, useLoginMutation, useMyProfileByTokenQuery, useProfileByIdQuery } = backApi