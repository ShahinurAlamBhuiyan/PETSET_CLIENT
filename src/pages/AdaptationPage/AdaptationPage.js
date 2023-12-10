import React, { useContext } from 'react'
import { AuthContext } from '../../Providers/AuthProvider'

const AdaptationPage = () => {

  const { loggedInUser } = useContext(AuthContext);

  console.log(loggedInUser)
  return (
    <div>AdaptationPage</div>
  )
}

export default AdaptationPage