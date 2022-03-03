import React from 'react'
import './Logo.css';
import capueat from '../../imagenes/logoEmprendimiento.png'

function Logo() {
  return (
    <div>
      <a href='/'><img src={capueat} alt="logo" className="logo"></img></a>
    </div>
  )
}

export default Logo