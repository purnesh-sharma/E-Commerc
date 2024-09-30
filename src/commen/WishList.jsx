import React, { Children, createContext, useState } from 'react'
import Header from '../assets/Header'
import wish from '../../public/pngwing.com (9).png'

export const Econtext=createContext()

function WishList( {children}) {
  


  const [wishlist,setwishlist]=useState([])
  const [Cart,setCart]=useState([])

  const data={wishlist,setwishlist,Cart,setCart}

  
  return (
   <>
    <Econtext.Provider value={data}>
      {children}
    </Econtext.Provider>
   </>
  )
}

export default WishList
