import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({})
  useEffect(() => {
    const USER = JSON.parse(sessionStorage.getItem('user'))
    if (USER) {
      handleSession(USER)
    }
  }, [])

  const handleSession = data => {
    setLoggedInUser(data)
  }
  console.log(loggedInUser)

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
