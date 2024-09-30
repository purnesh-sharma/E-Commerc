import React, { useContext } from 'react'
import logo from '../../public/logo (1).svg'
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaOpencart } from "react-icons/fa6";
import { BiSolidCategory } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Econtext } from '../commen/WishList';

function Header() {

    let {wishlist,setwishlist,Cart,setCart}=useContext(Econtext)   

  return (
    <>
    <section className='max-w-[100%] shadow-lg backdrop-blur-3xl bg-[white]/20 text-black'>
        <div className="max-w-[1350px] mx-auto  ">
            <nav className='flex justify-between py-2 items-center px-6'>
                <aside>
                    <figure>
                        <img src={logo} alt="" />
                    </figure>
                </aside>
                <aside className='hidden lg:flex'>
                    <div className="w-[600px] border-[1px] flex gap-[10px] items-center px-3 rounded-full text-gray-500 ">
                    <IoSearchOutline className='text-[20px] ' />
                        <input type="text" name="" id="" className='w-[62%] py-1 outline-none bg-transparent' />
                        <div className="flex items-center gap-[20px] border-l-2 px-2">
                            <p>All Categories &nbsp; </p>
                            <IoIosArrowDown  />
                        </div>
                        
                    </div>
                </aside>
                <aside className='flex gap-[10px]'>
                <Link to={"/cart"} className='relative'>  <IoHeartOutline  className='w-10 h-10 hover:text-[#F3526D] rounded-full flex bg-gray-100 p-2'/><sup className='bg-red-600 rounded-full absolute w-4 h-4 flex items-center justify-center top-0 left-7 text-white'>{wishlist.length>0 ? wishlist.length :""}    </sup></Link>
                <FaRegUser  className='w-10 h-10 rounded-full bg-gray-100 p-2'/>
               <Link to={"/cartbox"} className='relative'><FaOpencart   className='w-10 h-10 rounded-full bg-gray-100 p-2 cursor-pointer'/><sup className='bg-red-600 rounded-full absolute w-4 h-4 flex items-center justify-center top-0 left-7 text-white'>{Cart.length>0 ? Cart.length:""}  </sup></Link> 

                </aside>
            </nav>

            <div className="flex justify-between mt-6 pb-4">
                    <div className="flex gap-[10px] items-center px-2 w-[230px] py-2 rounded-md bg-gray-100 relative">
                        <p className='text-[20px]'><BiSolidCategory /></p>
                        <p> Categories</p>
                        <p className='right-6 absolute'><FaAngleRight /></p>
                    </div>
                    <div className="">
                        <ul className='flex gap-[30px] '>
                            <Link to={"/"}><li className='text-gray-800 cursor-pointer'>Home</li></Link>
                            <Link><li className='text-gray-800 cursor-pointer'>Page</li></Link>
                            <Link><li className='text-gray-800 cursor-pointer'>User demo</li></Link>
                            <Link><li className='text-gray-800 cursor-pointer'>Cart</li></Link>
                            <Link><li className='text-gray-800 cursor-pointer'>Track My Orders</li></Link>
                        </ul>
                    </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Header
