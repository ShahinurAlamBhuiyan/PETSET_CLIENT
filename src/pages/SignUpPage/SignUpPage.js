import { ClerkLoaded, ClerkLoading, SignUp } from '@clerk/clerk-react'
import React from 'react'
import { Spinner } from 'react-bootstrap'

const SignUpPage = () => {
  return (
    <div className='p-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ClerkLoaded>
        <SignUp signInUrl='/sign-in' />
      </ClerkLoaded>
      <ClerkLoading>
        <Spinner animation="border" />
      </ClerkLoading>
    </div>
  )
}

export default SignUpPage