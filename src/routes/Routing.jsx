import React from 'react'
import { BrowserRouter} from "react-router-dom";
import AdminRoutes from './AdminRoutes';
import UserRoutes from './UserRoutes';
const Routing = () => {
  return (
    <>
        <BrowserRouter>
          <UserRoutes />
        </BrowserRouter>
        <BrowserRouter basename='admin'>
          <AdminRoutes />
        </BrowserRouter>

      </>
  )
}

export default Routing