import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='p-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <SignIn signUpUrl='/sign-up' />
    </div>
  )
}

export default SignInPage