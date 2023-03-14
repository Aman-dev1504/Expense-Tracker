import React from 'react'
import { default as api } from '../store/apiSlice';
import 'boxicons'
import {  toast } from 'react-toastify';
export default function List() {
    const {data, isFetching, isSuccess,isError}= api.useGetLabelsQuery();
    const [deleteTransaction] = api.useDeleteTransactionMutation()
    let Transactions;

    const handlerClick = (e) => {
      if(!e.target.dataset.id) return 0;
      deleteTransaction({ _id : e.target.dataset.id });
      toast.error("Transaction Removed");
  }

   if(isFetching){
    Transactions=<div>Loading...</div>
   }
   else if(isSuccess){
    Transactions=data.map((v,i)=><Transaction key={i} category={v} handler={handlerClick}></Transaction>);
   }
    else if(isError){
    Transactions=<div>Error...</div>
    }
  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 text-md font-bold text-xl'>History</h1>
      {Transactions}   
    </div>
  )
}
function Transaction ({category,handler}){
    if(!category) return null;
    return (
        <div className='item flex justify-center bg-gray-50 py-2 rounded-r ' style={{ borderRight:`8px solid ${category.color ?? "#FF6384"}`}}>
            <button className='px-3'onClick={handler}><box-icon data-id={category._id ?? ''} size="16px" name="trash"color= {category.color ?? "#FF6384"}></box-icon></button>
            <span className='block w-full'>{category.name??''}</span>
        </div>
    )
    
}
