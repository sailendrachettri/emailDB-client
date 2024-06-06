import React from 'react'
import Display from './Display'
import IntroPage from './IntroPage'

const Homepage = () => {
  return (
    <div className='container my-4'>
      <div className="bg-body-tertiary py-2 px-1"><i class="bi bi-info-circle me-2"></i>Important: This portal is intended strictly for personal use. Selling properties here is prohibited.</div>
      <IntroPage />
      <Display />
    </div>
  )
}

export default Homepage