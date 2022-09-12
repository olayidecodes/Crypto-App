import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  const pathname = location.pathname
  return (
    <div>
      <div>
      { !pathname.slice(1) || pathname.slice(1).includes('/')? 
        <h1>CryptoZen</h1> : 
        <h1 className='capitalize'>{pathname.slice(1)}</h1>
      }
        <input type="text" />
      </div>
      <div>
        <div>
          color mode
        </div>
        <div>
          name
        </div>
      </div>
    </div>
  )
}

export default Header
