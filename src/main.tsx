import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import App from './App'
import Wishlist from './Wishlist';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <div>page not found</div>,
  },
  {
    path:'/wishlist',
    element: <Wishlist/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router = {router}/>
  </React.StrictMode>,
)
