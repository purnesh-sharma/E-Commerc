import React, { useContext } from 'react';
import Header from './assets/Header';
import WishList, { Econtext } from './commen/WishList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'material-react-toastify/dist/ReactToastify.css';

const Pasanddida = () => {
  let { wishlist, setwishlist ,Cart,setCart} = useContext(Econtext);
  toast.success("Saved to wishlist",{
    style:{
      position:"fixed",
      left:"85%",
      top:"10%"
    }
    
  });

  let removebtn =(item)=>{
    
    setwishlist(wishlist.filter((v) => v !== item));
   
    
    
  }
  let AddtoCart = (id, item) => {
    const existingItem = Cart.find((cartItem) => cartItem.id === item.id);
    if (!existingItem) {
      setCart([...Cart, item]);
      toast("Item added to cart");
    } else {
      toast("Item already in cart");
    }
    let finalItem = wishlist.filter((v, i) => i !== id);
    setwishlist(finalItem);
  };

 console.log(wishlist)

  return (
  <>
      <Header />
    
        <section class="py-24 relative">
        <div class="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto ">

            <h2 class="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">WISHLIST
            </h2>
            <div class="hidden lg:grid grid-cols-2 py-6">
                <div class="font-normal text-xl leading-8 text-gray-500">Product</div>
                <p class="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
                  
                    <span class="w-full max-w-[260px] text-center">Quantity</span>
           
                </p>
            </div>

            {wishlist.length>0
             ?
              (wishlist.map((v,i)=>{
                return(
                    <div class="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t  border-red-300 py-6  px-10 rounded-lg shadow-2xl my-5">
                    <div
                        class="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                        <div class="img-box"><img src={v.img} alt="perfume bottle image" class="xl:w-[140px] rounded-xl object-cover"/></div>
                        <div class="pro-data w-full max-w-sm ">
                            <h5 class="font-semibold text-xl leading-8 text-black max-[550px]:text-center">{v.category}
                            </h5>
                            <p
                                class="font-normal text-lg leading-8 text-gray-500 my-2 min-[550px]:my-3 max-[550px]:text-center">
                                {v.title}</p>
                            <h6 class="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">${v.price.toFixed(0)}</h6>
                        </div>
                    </div>
                    <div
                        class="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                       
                   <button onClick={()=>AddtoCart(i,v)} className=' py-2 w-[200px] text-white font-semibold rounded-full bg-red-600'>Add To Cart</button>
                   <ToastContainer />
                   <button className=' py-2 w-[200px] text-white font-semibold rounded-full bg-black'onClick={() => removebtn(v)} >Remove</button>
                   <ToastContainer />
                   
                    </div>
                </div>
                )
              }))
              :
              "No Data Found"
            }

           

            
         
          
       
        </div>
    </section>
                                            
  
  

    </>
  )
}  
  


export default Pasanddida;