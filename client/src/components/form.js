import React from 'react';
import {useForm } from 'react-hook-form'
import './form.css';
import List from './list';
import { default as api } from '../store/apiSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Form() {
   const {register,handleSubmit,resetField}=useForm();
  
   const [addTransaction]=api.useAddTransactionMutation();

   const onSubmit=async (data)=>{
    if(!data) return {}  &&    toast.error("Transaction Error")   ;
    await addTransaction(data).unwrap();
    resetField('name');
    resetField('amount');
    toast.success("Transaction Succesful");
   }
   

    

  return (
    <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'>Transactions</h1>
      <form id='form'onSubmit={handleSubmit(onSubmit) } >
        <div className='grid gap-4'>
            <div className='input-group'>
             <input type="text" {...register('name')} placeholder="Salary,Houserent,SIP" className='form-input'></input>   
            </div>
            <select className='form-input'>
                <option value="investment" defaultValue {...register('type')}>Investment</option>
                <option value="Expense">Expense</option>
                <option value="Savings">Savings</option>
            </select>
            <div className='input-group'>
                <input type="text" {...register('amount')} placeholder='Amount' className='form-input'></input>
            </div>
            <div className='submit-btn'  >
                <button className='border py-2 text-white bg-indigo-500 w-full btn-submit'>Make Transaction</button>
            </div>

          
        </div>
        <ToastContainer />
      </form>
      <List></List>
      
    </div>
  )
}
