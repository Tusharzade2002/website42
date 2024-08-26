import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Home from './Views/Home/Home'
const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
   {
      path:'/',
      element:<Home />
   }
])

root.render(
  
    <RouterProvider router={router}  />
)


