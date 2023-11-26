import { SignUp } from '@clerk/clerk-react'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='p-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignUp signInUrl='/sign-in' />
    </div>
  )
}

export default SignUpPage