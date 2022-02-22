import React from 'react'
import Titulo from '../Titulo/Titulo'
import './NavBar.css';

function NavBar() {
  return (
    <div className='NavBar'>
      <Titulo />
      <div>
        <button className='NavBar__button'>Menú</button>
        <button className='NavBar__button'>Productos</button>
        <button className='NavBar__button'>Sobre Nosotros</button>
        <button className='NavBar__button'>Carrito</button>
      </div>
    </div>  
  )
}

export default NavBar