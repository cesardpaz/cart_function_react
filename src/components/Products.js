import React from 'react'

const Products = ({product, listProduct, carrito, addProduct}) => {

    const {nombre, precio, id} = product;

    //AD product to cart
    const selectProduct = (id) => {
        const product = listProduct.filter( product => product.id === id );
        addProduct([ ...carrito, product[0] ]);
    }

    const removeProduct = (id) => {
        const products = carrito.filter(product => product.id != id);
        addProduct(products);

    }

    return (
        <div>
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>

            
            { listProduct
            ?
                <button 
                    type="button"
                    onClick={ () => selectProduct(id) }
                >Comprar
                </button>
            :
                <button 
                    type="button"
                    onClick={ () => removeProduct(id) }
                >Eliminar
                </button>
            }
        </div>
    )
}

export default Products
