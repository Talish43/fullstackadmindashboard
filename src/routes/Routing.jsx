import React from 'react'
import { BrowserRouter,Routes,Route} from "react-router-dom";
import Dashboard from '../pages/Admin/Dashboard/Dashboard';
import Login from '../pages/Admin/Login/Login';
import Products from '../pages/Admin/Products/Products';
const Routing = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
        </Routes>
        </BrowserRouter>

      </>
  )
}

export default Routing