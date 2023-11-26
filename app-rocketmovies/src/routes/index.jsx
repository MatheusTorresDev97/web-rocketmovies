import React from 'react'
import { BrowserRouter } from "react-router-dom";
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

const Routes = () => {
  return (
    <BrowserRouter>
       <AppRoutes />
    </BrowserRouter>
  )
}

export default Routes