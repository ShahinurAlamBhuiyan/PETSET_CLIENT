import React, { createContext, useState, useEffect } from 'react'

export const HostelContext = createContext()

const HostelCheckoutProvider = ({ children }) => {
  const [hostelBookingData, setHostelBookingData] = useState({})

  // Check if localStorage has data on mount
  useEffect(() => {
    const savedBookingData = localStorage.getItem('hostelBookingData')
    if (savedBookingData) {
      setHostelBookingData(JSON.parse(savedBookingData))
    }
  }, []) // Runs only once when the component mounts

  return (
    <HostelContext.Provider value={{ hostelBookingData, setHostelBookingData }}>
      {children}
    </HostelContext.Provider>
  )
}

export default HostelCheckoutProvider
