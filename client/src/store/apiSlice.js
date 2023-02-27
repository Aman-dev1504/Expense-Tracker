import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = 'http://localhost:8080'; 

export const apiSlice= createApi({
    baseQuery:fetchBaseQuery({baseUrl:baseURI}),
    endpoints:builder=>({
        //getCategories
        getCategories:builder.query({
            //get - http://localhost:8080/api/categories
            query:()=>'/api/categories'
    }),
    //getLabels
    getLabels:builder.query({
        //get - http://localhost:8080/api/labels
        query:()=>'/api/labels' 
    }),

    //addTransaction

    addTransaction:builder.mutation({
            //post - http://localhost:8080/api/transactions

       query:(initialTransaction)=>({
        url:'/api/transaction',
        method:'POST',
        body:initialTransaction
       }) 
    }),

    //deleteTransaction
    deleteTransaction:builder.mutation({
        //delete - http://localhost:8080/api/transactions
        query:(recordId)=>({
            url:`/api/transaction/`,
            method:'DELETE',
            body:recordId
        })
    })

})
})
export default apiSlice;