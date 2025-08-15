import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useParams } from 'react-router-dom'

const PrivateRoute = ({ children, path }) => {
  const { s_id, dr_id, m_id, product_id, a_id } = useParams()
  const { loggedInUser } = useContext(AuthContext)
  const [delayedRedirect, setDelayedRedirect] = useState(false)

  useEffect(() => {
    if (!loggedInUser || !loggedInUser.id) {
      const delay = 500 // Set the delay in milliseconds (e.g., 2000 for 2 seconds)
      const timeoutId = setTimeout(() => {
        setDelayedRedirect(true)
      }, delay)
      return () => clearTimeout(timeoutId)
    }
  }, [loggedInUser])

  if (path === '/appointment/:s_id/:dr_id') {
    path = `/appointment/${s_id}/${dr_id}`
  } else if (path === '/memories/:m_id') {
    path = `/memories/${m_id}`
  } else if (path === '/store/payment/:product_id') {
    path = `/store/payment/${product_id}`
  } else if (path === '/hostel/payment/:product_id') {
    path = `/hostel/payment/${product_id}`
  } else if (path === '/adaptation/:a_id') {
    path = `/adaptation/${a_id}`
  }

  if (loggedInUser && loggedInUser.id) {
    return children
  } else if (delayedRedirect) {
    return <Navigate to='/sign-in' state={{ from: path }} replace />
  } else {
    return <div className='container'>Loading...</div>
  }
}

export default PrivateRoute
