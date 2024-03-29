import React from 'react'
import { Routes,Route } from "react-router-dom";
import Home from '../pages/Home';
import About from '../pages/About';
const UserRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </>
  )
}

export default UserRoutes