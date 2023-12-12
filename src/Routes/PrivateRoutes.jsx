import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useParams } from 'react-router-dom'

const PrivateRoute = ({ children, path }) => {
  const { s_id, dr_id } = useParams()
  const { loggedInUser } = useContext(AuthContext)
  const [delayedRedirect, setDelayedRedirect] = useState(false)

  useEffect(() => {
    // If loggedInUser is not available, set a delay before redirecting
    if (!loggedInUser || !loggedInUser.u_id) {
      const delay = 500 // Set the delay in milliseconds (e.g., 2000 for 2 seconds)
      const timeoutId = setTimeout(() => {
        setDelayedRedirect(true)
      }, delay)
      return () => clearTimeout(timeoutId)
    }
  }, [loggedInUser])
  if (path === '/appointment/:s_id/:dr_id') {
    path = `/appointment/${s_id}/${dr_id}`
  }
  console.log(path)
  if (loggedInUser && loggedInUser.u_id) {
    return children
  } else if (delayedRedirect) {
    return <Navigate to='/sign-in' state={{ from: path }} replace />
  } else {
    // You can return a loading state or other content while waiting
    return <div className='container'>Loading...</div>
  }
}

export default PrivateRoute
