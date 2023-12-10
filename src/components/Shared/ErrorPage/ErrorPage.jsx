import React from 'react'
// import error from '../../../assets/errorPage.png'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      <div>{/* <img className='w-1/2 mx-auto' src={error} alt="" /> */}</div>
      <div className='text-center'>
        <Link to='/' className='btn btn-primary text-center'>
          Go Back to home{' '}
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
