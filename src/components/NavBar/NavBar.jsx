import React from 'react'
import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import Titulo from '../Titulo/Titulo'
import './NavBar.css';

function NavBar() {
  return (
    <div className='NavBar'>
      <NavLink to='/' className="brand">
        <Logo />
        <Titulo />
      </NavLink>
      <div className="NavBar__menu">
        <div>
          <NavLink to='categoria/clasicos'><button className='NavBar__button'>Clasicos</button></NavLink>
          <NavLink to='categoria/vegetarianos'><button className='NavBar__button'>Vegetarianos</button></NavLink>
          <NavLink to='categoria/veganos'><button className='NavBar__button'>Veganos</button></NavLink>
          <NavLink to='categoria/especiales'><button className='NavBar__button'>Especiales</button></NavLink>
          
          
          
        </div>
        
      </div>
      <NavLink to="cart">
        <CartWidget />
      </NavLink>
    </div>  
  )
}

export default NavBar