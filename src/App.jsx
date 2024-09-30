
import './App.css'
import Header from './assets/Header'
import banner from './../public/banner-15.jpg'
import ban_1 from './../public/banner-17.jpg'
import ban_2 from './../public/banner-16.jpg'
import { FaTruckFast } from "react-icons/fa6";
import { PiPiggyBankFill } from "react-icons/pi";
import { BsStopwatchFill } from "react-icons/bs";
import { CiCreditCard2 } from "react-icons/ci";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom'


function App() {

  let[allProduct,setallProduct]=useState([])
  
  let[allCat,setallCat]=useState([])
 

  let productData=(url)=>{

    let myApi;

    if(url==undefined){
      myApi='https://dummyjson.com/products?limit=200'
    }
    else{
      myApi=url
    }
    axios.get(myApi)
    .then((response)=>{
      
      setallProduct(response.data.products)
   
      
    })
    .catch((error)=>{
    })
  }



  let catDAta=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((response)=>{
      
      setallCat(response.data)
      
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    productData()
    catDAta()
  },[])

  const[showFilters,setshowFilters]=useState(false)



  let showcanvas=()=>{
    setshowFilters(!showFilters)

  }
   let singleCat=(url)=>{
    productData(url)

   }


  return (
    <>
     <Header/>
     
     <div className="max-w-[1350px] mx-auto mt-5">
      <div className="grid grid-cols-[74%,auto] gap-5">
        <div className="relative">
          <img src={banner} alt="" />
          <div class="textbox absolute top-[30%] ms-8">
            <h5 className='text-[30px]  text-[#F3526D]'>LifeStyle Colletion</h5>
            <h2 className='text-[50px] font-bold text-[#2B3445]'>MENS</h2>
                <p className='text-[30px] '>SALE UP TO  <span className='text-[14px] text-[#F3526D]'>30% OFF</span> <br /></p>
                <p className='text-[18px]'>Get Free Shipping on orders over $99.00</p>
                    <button className='bg-[#F3526D] text-white px-4 font-medium py-2 mt-6 rounded-md hover:bg-transparent hover:text-[#F3526D] hover:border-2 hover:border-[#F3526D]'>Shop Now &nbsp;</button>
                 
        </div>
        </div>
        <div className=" flex-col hidden lg:flex">
          
          <img src={ban_1} className=' mb-5 h-[48%] relative' alt="" />
          <div className="absolute ms-10 mt-10">
          <h5 className='text-[16px]  text-[#F3526D]'>NEW ARRIVALS</h5>
         
                <p className='text-[30px]'>SUMMER <br /> SALE  <span className='text-[14px] text-[#F3526D]'>30% OFF</span> </p>
        
                    <button className=' hover:border-[#F3526D]'>Shop Now &nbsp;</button>
          </div>
          <img src={ban_2} className=' h-[48%] relative'  alt="" />
          <div className="absolute ms-10 mt-10">
          <h5 className='text-[16px]  text-[#F3526D]'>NEW ARRIVALS</h5>
         
                <p className='text-[30px]'>SUMMER <br /> SALE  <span className='text-[14px] text-[#F3526D]'>30% OFF</span> </p>
        
                    <button className=' hover:border-[#F3526D]'>Shop Now &nbsp;</button>
          </div>
        </div>
      </div>
      

      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 sm:ms-1 bg-white mt-9 py-5">
        <div className="flex lg:justify-center sm:justify-normal ms-2 my-3 items-center gap-[15px] border-r-2 ">
          <div className="text-[35px]">
          <FaTruckFast />
          </div>
          <div className="text-[18px] font-semibold">
            <h5>Fast Delivery</h5>
            <p className='font-normal'>Start from $10</p>
          </div>
        </div>
        <div className="flex lg:justify-center sm:justify-normal ms-2 my-3  items-center gap-[15px] border-r-2 ">
          <div className="text-[35px]">
          <PiPiggyBankFill />
          </div>
          <div className="text-[18px] font-semibold">
            <h5>Money Guarantee</h5>
            <p className='font-normal'>7 Days Back</p>
          </div>
        </div>
        <div className="flex lg:justify-center sm:justify-normal ms-2 my-3  items-center gap-[15px] border-r-2 ">
          <div className="text-[35px]">
          <BsStopwatchFill />
          </div>
          <div className="text-[18px] font-semibold">
            <h5>365 Days</h5>
            <p className='font-normal'>For free return</p>
          </div>
        </div>
        <div className="flex lg:justify-center sm:justify-normal ms-2 my-3 items-center gap-[15px]  ">
          <div className="text-[35px]">
          <CiCreditCard2 />
          </div>
          <div className="text-[18px] font-semibold">
            <h5>Payment</h5>
            <p className='font-normal'>Secure system</p>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-clip relative sm:flex-col lg:flex-row bg-[#434343]">
      <div className='bg-[#E0E0E0] absolute left-0 w-12 h-full z-30'></div>

        <div className="font-bold z-30 py-[30px] left-4 absolute text-[30px] w-[40%] bg-[#E0E0E0]  text-center -skew-x-[30deg]">BLACK FRIDAY SALE!</div>
        <div className="bg-[#434343] font-bold py-[13px] text-[30px] text-white italic ">
            <div className="border-dotted border-2 mr-3 py-1 border-white">
          <marquee behavior="scroll" direction="left">Pay only for your loving electronics</marquee>
          </div>
          </div>
        </div>


        <div className="flex justify-between mt-6">
          <h4 className='font-bold text-[20px]'>Deals Of The Day</h4>
          <p className='font-semibold'>More Products</p>
      </div> 
      <div className="grid grid-cols-5 gap-8 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  px-3">

    {allProduct.map((v,i)=>{
      return(
        <Link to={`/product/${v.id}`}>
         <div key={i} className=" bg-white px-4 mt-8 g text-center hover:border-black hover:border-2 hover:duration-[0.5s] rounded cursor-pointer">
        <img src={v.thumbnail} className='py-6 hover:scale-[1.2] hover:duration-[0.5s]' alt="" />
        <p className=' font-semibold text-[20px]'>{v.title.slice(0,11)}</p>
        <ul className='text-yellow-400 text-[20px] flex gap-[10px] justify-center my-2'>
          <li><FaStar /></li>
          <li><FaStar /></li>
          <li><FaStar /></li>
          <li><FaStar /></li>
          <li><CiStar /></li>
          <li className='text-gray-400 text-[13px]'>(14)</li>
        </ul>
        <span className='font-bold'>${v.price}</span>
       <div > <button className='table mx-auto border-[1px] border-black w-[100%] rounded my-5 py-2 hover:bg-black hover:text-white hover:duration-[0.5s]' >Read More</button></div>
     
       
        
  </div>
        </Link>
       
      )

    })}

      </div>
     </div>


  
<div className="fixed bg-black text-white top-[21%] cursor-pointer px-5 py-2 rounded-r-full" onClick={showcanvas}>filters</div>
     <div className={showFilters==true ? "active":"menubar"}>
     <div className='bg-[#E0E0E0] absolute right-0 w-12 h-24 mt-[9px] z-30'/>
     <div className="font-bold z-30 py-[30px] right-4 absolute text-[30px] w-[40%] bg-[#E0E0E0] text-red-500  text-center -skew-x-[30deg]">All Your Favorites Categories !</div>
     <div className="">
      <ul className='grid grid-cols-4 gap-4 m-2 w-[50%]'>
        
       {allCat.map((v,i)=>{
        return(
          <li key={i} className='bg-[#E4E4E4] hover:underline cursor-pointer  rounded-full text-center p-1'onClick={()=>singleCat(v.url)}>{v.name}</li>
        )
       })}
       
    
      </ul>
     </div>
     </div>
    </>
  )
}

export default App
