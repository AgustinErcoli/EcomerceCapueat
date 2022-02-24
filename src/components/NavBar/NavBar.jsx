import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Titulo from '../Titulo/Titulo'
import './NavBar.css';

function NavBar() {
  return (
    <div className='NavBar'>
      <Titulo />
      <div className="NavBar__menu">
        <div>
          <button className='NavBar__button'>Menú</button>
          <button className='NavBar__button'>Productos</button>
          <button className='NavBar__button'>Sobre Nosotros</button>
          <button className='NavBar__button'>Preguntas Frecuentes</button>
        </div>
        <div>
          <CartWidget />
        </div>
      </div>
    </div>  
  )
}

export default NavBar