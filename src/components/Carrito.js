import React from 'react'
import './carrito.css';
import Products from './Products';

const Carrito = ({carrito, addProduct}) => {
    return (
        <div className="carrito">
            <h2>Tu carrito</h2>
            { carrito.length === 0
            ?
                <p>No hay productos</p>
            :
                carrito.map(product => (
                    <Products 
                        key = {product.id}
                        product = {product}
                        carrito = {carrito}
                        addProduct = {addProduct}
                    />
                ))
            }
            
        </div>
    )
}

export default Carrito
