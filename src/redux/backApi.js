import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




const baseQuery = fetchBaseQuery({
    baseUrl: 'https://nichka-back-s79d-boewrbbd6-jestershit32.vercel.app/',
    prepareHeaders: (headers,) => {
        const token = localStorage.getItem("token")
        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
            headers.set('authorization', token)
        }

        return headers
    },
})





const searchTegInText = (text) => {
    if (text) {
        if (text[0] === "#") {
            return ("tag" + text.slice(1))
        }
        return text
    }
    return "all"
}







export const backApi = createApi({
    reducerPath: 'backApi',
    baseQuery,
    tagTypes: ['Posts'],
    endpoints: (build) => ({
        getPosts: build.query({
            query: (option) => `posts/${option.page}/${option.inOnePage}/${option.newOrOld}/${searchTegInText(option.searchValue)}/${option.userID ? option.userID : "all"}`,
            providesTags: ['Posts']
        }),
        getOnePost: build.query({
            query: (id) => `posts/${id}`,
            providesTags: ['Posts']
        }),
        addPost: build.mutation({
            query: (body) => ({
                url: "posts",
                method: "POST",
                body
            }),
            invalidatesTags: ['Posts']
        }),
        removePost: build.mutation({
            query: (id) => ({
                url: "posts/" + id,
                method: "DELETE",
            }),
            invalidatesTags: ['Posts']

        }),
        uploadFile: build.mutation({
            query: ({ body, id }) => ({
                url: "upload/file/" + id,
                method: "POST",
                body
            }),
        }),

        removeFile: build.mutation({
            query: (body) => ({
                url: "remove-file",
                method: "POST",
                body
            }),
        }),
        login: build.mutation({
            query: (body) => ({
                url: "auth/login",
                method: "POST",
                body
            }),
        }),
        myProfileByToken: build.query({
            query: () => "auth/me/",
            providesTags: ['Posts']
        }),
        ProfileById: build.query({
            query: (id) => "user/" + id,
            providesTags: ['Posts']
        }),
        addInFavorites: build.mutation({
            query: (id) => ({
                url: "/action/favorites/" + id,
                method: "PATCH"
            }),
            invalidatesTags: ['Posts']
        }),

        removeInFavorites: build.mutation({
            query: (id) => ({
                url: "/action/favorites/" + id,
                method: "DELETE"
            }),
            invalidatesTags: ['Posts']
        }),
        updatePost: build.mutation({
            query: ({ body, id }) => ({
                url: "posts/" + id,
                method: "PATCH",
                body
            }),
            invalidatesTags: ['Posts']
        }),


    })
})
export const {
    useAddInFavoritesMutation,
    useGetPostsQuery,
    useAddPostMutation,
    useGetOnePostQuery,
    useLoginMutation,
    useMyProfileByTokenQuery,
    useProfileByIdQuery,
    useRemoveInFavoritesMutation,
    useUploadFileMutation,
    useRemoveFileMutation,
    useUpdatePostMutation,
    useRemovePostMutation } = backApi