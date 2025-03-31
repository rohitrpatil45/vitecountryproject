import React from 'react'

function CountryPage() {
  return (
    <>
    <div className='main-country-page-container'>
        <div className='page-image-container'>
            <img src="https://flagcdn.com/af.svg" alt="" />
        </div>
        <div className='country-details-page'>
            <div className='detail-right'>
                <h2>name</h2>
                <h2>population</h2>
                <h2>region</h2>
                <h2>capital</h2>
            </div>
            <div className='detail-left'>
                <h2>Domain</h2>
                <h2>sub region</h2>
                <h2>area</h2>
                <h2>bordering country</h2>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default CountryPage