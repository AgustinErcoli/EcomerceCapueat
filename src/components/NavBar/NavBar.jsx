import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import Titulo from '../Titulo/Titulo'
import './NavBar.css';

function NavBar() {
  return (
    <div className='NavBar'>
      <div className="brand">
        <Logo />
        <Titulo />
      </div>
      <div className="NavBar__menu">
        <div>
          <button className='NavBar__button'>Menú</button>
          <button className='NavBar__button'>Productos</button>
          <button className='NavBar__button'>Sobre Nosotros</button>
          <button className='NavBar__button'>Preguntas Frecuentes</button>
        </div>
        
      </div>
      <div>
        <CartWidget />
      </div>
    </div>  
  )
}

export default NavBar