import React from 'react'
import { Routes,Route } from "react-router-dom";
import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import Login from '../pages/Admin/Login/Login';
import Products from '../pages/Admin/Products/Products';
const AdminRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    </>
  )
}

export default AdminRoutes