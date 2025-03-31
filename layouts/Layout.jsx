import React from 'react'
import Header from '../components/Header'
import FilterElement from '../components/FilterElement'
import Herosection from '../components/Herosection'
import { Outlet } from 'react-router-dom'
import CountryPage from '../components/CountryPage'

function Layout() {
  return (
<>
<Header />
<FilterElement />
<CountryPage />
{/* <Outlet /> */}



</>
)
}

export default Layout