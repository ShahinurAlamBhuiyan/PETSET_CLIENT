import React from 'react'
import { useParams } from 'react-router-dom';

const SpecialistsPage = () => {
  const { serviceName } = useParams();
  return (
    <div>
      services details with Specialists
      <br />
      service name - {serviceName}
    </div>
  )
}

export default SpecialistsPage