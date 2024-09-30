import React, { useContext, useEffect, useState } from 'react'
import Header from './assets/Header'
import { FaCartArrowDown } from "react-icons/fa";
import { Econtext } from './commen/WishList';

function Cart() {
  const {Cart,setCart}=useContext(Econtext)


  
  

  
  return (
    <div>
      <Header/>
      <div class="h-screen bg-gray-100 pt-10">
        <div className=" flex justify-center  gap-3">
        <span class="mb-10 text-center text-2xl font-bold text-[#E94560]">Cart Items </span>
        <FaCartArrowDown  className='text-[30px] text-[#E94560]'/>
        </div>
   
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">

      {Cart.length>0
       ? 
       (Cart.map((v,i)=>{
        return(
              <CartBox v={v} i={i}/>
        
        )
       }))
      :
      "Not product in your cart."
      }
   
      </div>

      

      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 ">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">$129.99</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">$134.98 USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-[#E94560] py-1.5 font-medium text-blue-50 hover:bg-[#fd3d5d]">Check out</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Cart



let CartBox=({v,i})=>{
  const {Cart,setCart}=useContext(Econtext)
   const [count,setCount]=useState(v.quantity || 1)
  let crossbtn =(e)=>{
    setCart(Cart.filter((v) => v !== e));

  }
 
  let decbtn=()=>{
    if(count>1){
      setCount(count-1)
    }

  }
  let incbtn=()=>{
    
    setCount(count+1)
    
  }
  let update=()=>{

    // let copy=[...Cart]
    // console.log("all data",copy[1])

    let newCart=Cart.map((item,index)=>{
      if(index==1){
        return{...item,quantity:count}
      }
      return item;
   
     
      
    })

    setCart(newCart)
  }
  
useEffect(()=>{
  update()
},[count])

  

  return(
    <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
    <img src={v.img} alt="product-image" class="w-full rounded-lg sm:w-40 bg-[#eae8e8]" />
    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
      <div class="mt-5 sm:mt-0">
        <h2 class="text-lg font-bold text-gray-900">{v.title}</h2>
        <p class="mt-1 text-xs text-gray-700">{v.category}</p>
      </div>
      <div class="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6" >
        <div class="flex items-center border-gray-100">
          <span onClick={decbtn} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-[#E94560] hover:text-blue-50"> - </span>
          <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="text" value={count} min="1" />
          <span onClick={incbtn} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-[#E94560] hover:text-blue-50"> + </span>
        </div>
        <div class="flex items-center space-x-4">
          <p class="text-sm">${v.price.toFixed(2)}</p>
          <svg onClick={()=>crossbtn(v)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500 " >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            
          </svg>
         
        </div>
        <div className=" flex gap-5">
           <p>Total-</p> 
            <span>${(v.price *count).toFixed(2)}</span>
          
        </div>
      </div>
    </div>
  </div>
  )
}
