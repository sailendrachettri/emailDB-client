import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='text-center my-5'>
    <h1>Page not available</h1>
    <Link to="/"><button className='btn btn-secondary'>Go to Homepage</button></Link>
    </div>
  )
}

export default PageNotFound