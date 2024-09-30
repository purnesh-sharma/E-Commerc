import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ProductDetails from './productDetails.jsx';
import WishList from './commen/WishList.jsx';
import Pasanddida from './Pasanddida.jsx';
import Cart from './Cart.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/cart",
    element: <Pasanddida/>,
  },
  {
    path: "/cartbox",
    element: <Cart/>,
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <WishList>
    <RouterProvider router={router} />
    </WishList>
    
   
  </StrictMode>,
)
