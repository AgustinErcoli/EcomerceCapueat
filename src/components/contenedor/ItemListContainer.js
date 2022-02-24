import React from 'react'
import './ItemListContainer.css';

const ItemListContainer = ({productos, especiales, vegetarianos}) => {

    return (
        <div className="contenedor">
            <h1>{ productos }</h1>
            <h2>{ especiales }</h2>
            <h2>{ vegetarianos }</h2>
        </div>
    )
}

export default ItemListContainer
