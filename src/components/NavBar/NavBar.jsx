import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../Logo/Logo';
import Titulo from '../Titulo/Titulo'
import './NavBar.css';

function NavBar() {

  const { totalProducts } = useCartContext()

  const valueItemCart = totalProducts();

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
      <div className='cartWidget'>
        <NavLink to="cart">
          <CartWidget />  
        </NavLink>
        {valueItemCart === 0 ? (
          <></>
          ) : (
          <div className='cartProducts'>
            <div className='number'>{totalProducts()}</div>
          </div>
        )}
      </div>
    </div>  
  )
}

export default NavBar