import { ClerkLoaded, ClerkLoading, SignIn } from '@clerk/clerk-react'
import React from 'react'
import { Spinner } from 'react-bootstrap'

const SignInPage = () => {
  return (
    <div className='p-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ClerkLoaded>
        <SignIn signUpUrl='/sign-up' />
      </ClerkLoaded>
      <ClerkLoading>
        <Spinner animation="border" />
      </ClerkLoading>
    </div>
  )
}

export default SignInPage