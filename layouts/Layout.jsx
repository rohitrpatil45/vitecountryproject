import React from 'react'
import Header from '../components/Header'
import FilterElement from '../components/FilterElement'
import Herosection from '../components/Herosection'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
<>
<Header />
<FilterElement />
<Outlet />



</>
)
}

export default Layout