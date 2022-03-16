import React from 'react'
import './Logo.css';
import capueat from '../../imagenes/logoEmprendimiento.png'

function Logo() {
  return (
    <div>
      <img src={capueat} alt="logo" className="logo" />
    </div>
  )
}

export default Logo