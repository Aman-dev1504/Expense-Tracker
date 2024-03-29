import React from 'react'
import { default as api } from '../store/apiSlice';
import { getLabels } from '../helper/helper';
// const obj=[
//     { 
//         type:"Savings",
//         color:'#90be6d',
//         percent:45
//     },
//     { 
//         type:"Investment",
//         color:'#f9c74f',
//         percent:20
//     },
//     { 
//         type:"Exprenses",
//         color:'#f9c74f',
//         percent:10
//     },

// ]

export default function labels() {
  
    //const {data, isFetching, isSuccess,isError}= api.useGetCategoriesQuery();
  const {data, isFetching, isSuccess,isError}= api.useGetLabelsQuery();
    
   let Transaction;
   if(isFetching){
    Transaction=<div>Loading...</div>
   }
   else if(isSuccess){
    Transaction = getLabels(data, 'type').map((v, i) => <LabelComponent key={i} data={v}></LabelComponent>);
   }
    else if(isError){
    Transaction=<div>Error...</div>
    }

  return (
   <>
   {Transaction}
   </>
  )

  



}
function LabelComponent({data}){
    if(!data) return <></>;
    return ( 
        <div className='labels flex justify-between'>
            <div className='flex gap-2'>
                <div className='w-2 h-2 rounded py-3' style={{background:data.color ?? '#f9c74f'}}></div>
                <h3 className='text-md'>{data.type ?? ""}</h3>
            </div>
            <h3 className='font-bold'>{Math.round(data.percent) ?? 0}%</h3>
        </div>
    )
}