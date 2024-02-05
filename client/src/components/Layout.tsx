import React from 'react'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='h-full flex flex-col'>
      <Outlet/>
    </div>
  )
}

export default Layout