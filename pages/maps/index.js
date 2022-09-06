
import React from 'react'
import Map from '../../components/Maps/Main'

const styles = {
    display: 'flex'
}

const Maps = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <Map/>
    </div>
  )
}

export default Maps