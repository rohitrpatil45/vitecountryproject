import React from 'react'

function FilterElement() {
  return (
   <>
   <div>
    <input type="text" placeholder='Enter the Country Name'/>
   </div>
  <div className='filer-box'>
  <button className='filter-btn'>Filter</button>
  
  </div>
   </>
  )
}

export default FilterElement