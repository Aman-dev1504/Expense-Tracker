import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = 'https://expense-tracker-u0fy.onrender.com'; 

export const apiSlice= createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURI}),
    endpoints:builder=>({
        //getCategories
        getCategories:builder.query({
            //get - http://localhost:8080/api/categories
            query:()=>'/api/categories',
            providesTags:['categories']
    }),
    //getLabels
    getLabels:builder.query({
        //get - http://localhost:8080/api/labels
        query:()=>'/api/labels' ,
        providesTags:['transactions']
    }),

    //addTransaction

    addTransaction:builder.mutation({
            //post - http://localhost:8080/api/transactions

       query:(initialTransaction)=>({
        url:'/api/transaction',
        method:"POST",
        body:initialTransaction
       }) ,
       invalidatesTags:['transactions']
    }),

    //deleteTransaction
    deleteTransaction:builder.mutation({
        //delete - http://localhost:8080/api/transactions
        query:(recordId)=>({
            url:`/api/transaction/`,
            method:'DELETE',
            body:recordId
        }),
       invalidatesTags:['transactions']
    })

})
})
export default apiSlice;