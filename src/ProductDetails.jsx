import React, { useContext, useEffect, useState } from 'react'
import Header from './assets/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { Econtext } from './commen/WishList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'material-react-toastify/dist/ReactToastify.css';



function ProductDetails() {


  const[singleData,setsingleData]=useState([])
  const[wait,setwait]=useState(false)
  const [smallImg,setsmallImg]=useState([])
  const [bigImg,setbigImg]=useState("")
  let {wishlist,setwishlist}=useContext(Econtext)  
  console.log(wishlist)

  

  // console.log(singleData)


  // console.log(smallImg)
  let userId=useParams().id;

 
  let singleP=()=>{
    axios.get(`https://dummyjson.com/products/${userId}`)
    .then((ress)=>{
      setsingleData(ress.data)
      setsmallImg(ress.data.images)
      setbigImg(ress.data.thumbnail)
      setwait(true)
      // console.log(smallImg)
    })
    .catch((error)=>{
      console.log(error)
    })

  }

  useEffect(()=>{
    singleP()
  },[])
  
  let addToWishlist=(item)=>{
  
   if (!wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {

    let obj={
      img:item.thumbnail,
      name:item.name,
      price:item.price,
      id:item.id,
      brand:item.brand,
      category:item.category,
      title:item.title,
      quantity:1  

    }
    setwishlist([...wishlist,obj])
    toast.success("Saved to wishlist",{
      style:{
        position:"fixed",
        left:"85%",
        top:"10%"
      }
      
    });
    
    
  }
  else {
    toast.error("Already in wishlist",{
      style:{
        position:"fixed",
        left:"85%",
        top:"10%"
      }
    });
  }

  }

  return (
    <div>
      <>
      <Header/>


    <div className="max-w-[1350px] mx-auto  grid grid-cols-[55%,45%] mt-10 ">
      <div className="flex justify-around">
        <div className="w-[20%] flex-col border-r-2">

         {smallImg.length>0 ? 
         smallImg.map((v)=>{
          return(
            <div className=" rounded-md h-24  my-2 cursor-pointer " onMouseOver={()=>setbigImg(v)}>
            <img src={v} alt="" className='h-[130px] rounded-full  shadow-xs shadow-2xl my-12' />
               </div>
          )
         })
         :
         ""
         }
        
     
        </div>
        <div className="w-[70%] bg-[white]/10">
          <img src={wait==true ? bigImg:"" } alt="" className='w-[100%]' />
        </div>
      </div>
      <div className="">
        <h2 className='text-[40px] font-semibold'>{singleData.title}</h2>
        <hr />
        <h5 className='my-2 font-semibold'> <span className='text-red-500'>By</span>: {singleData.brand}</h5>
        <ul className='text-red-500 text-[20px] flex gap-[10px]'>
          <li><FaStar /></li>
          <li><FaStar /></li>
          <li><FaStar /></li>
          <li><FaStar /></li>
          <li><CiStar /></li>
        </ul>
        <p className='font-bold my-3'>$ {singleData.price} <span className='font-normal text-red-400'> &nbsp;{singleData.discountPercentage}%off</span></p>
        <p className=' my-3'> <span className='text-red-500 font-semibold'>warranty: </span>{singleData.warrantyInformation}</p>
        <p className=' my-3 font-semibold'> <span className='text-red-500 font-semibold'>Product details.: </span>{singleData.description}</p>
        <p className=' my-3 font-semibold'> <span className='text-red-500 font-semibold'> Available only :</span>{singleData.stock} (Buy Fast)</p>
        
        <p className=' font-semibold'><span className='text-red-500 font-semibold'>category</span>:- {singleData.category}</p>
        <button className='px-3 py-2 bg-red-300/20 rounded-full border-dashed border-2 border-red-600 mt-3'>{singleData.sku}</button>
        <p className='font-semibold text-[20px] mt-3'> <span className='text-red-500 '>In Use</span> :{singleData.tags}</p>
        <button onClick={()=>addToWishlist(singleData)} className='px-4 py-2 my-4 rounded-full shadow-2xl shadow-red-100 bg-red-600 text-white font-semibold mt-4'>Add To WishList</button>
        <ToastContainer />
        
      </div>
      
    </div>
  

      {/* {singleData.map((v,i)=>{
        return(
          <div classNameName="w-[300px]">
          <img src={v.thumbnail} alt="" />
        </div>
        )
      })} */}

     
      </>
      
      
    </div>
  )
}

export default ProductDetails
