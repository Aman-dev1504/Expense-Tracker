import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = 'http://localhost:8080'; 

export const apiSlice= createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseUrl}),
    endpoints:builder=>({
        getCategories:builder.query({
            //getCategories is the name of the endpoint
            //http://localhost:8080/api/categories
            query:()=>`/api/categories`
    })
})
})