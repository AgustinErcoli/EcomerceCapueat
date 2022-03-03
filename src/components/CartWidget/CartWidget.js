import React from 'react'
import './CartWidget.css';
import carrito from '../../imagenes/carrito.png'

function CartWidget() {
  return (
    <div>
      <a href="/" className="boton">
        <img src={carrito} alt="carrito" className="icono"></img>
      </a>
    </div>
  )
}

export default CartWidget