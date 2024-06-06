import React from 'react'
import Display from './Display'
import IntroPage from './IntroPage'

const Homepage = () => {
  return (
    <div className='container my-4'>
        <IntroPage />
        <Display />
    </div>
  )
}

export default Homepage