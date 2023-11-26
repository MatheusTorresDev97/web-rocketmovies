import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import New from '../pages/New';
import Profile from '../pages/Profile';

const AppRoutes = () => {
  return (
    <Routes> 
           <Route path="/" element={<Home />} /> 
           <Route path="/new" element={<New />} />
           <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

export default AppRoutes