import React, {Fragment, useState} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';
import Carrito from './components/Carrito';

function App() {

    //Create list products
    const[ products, setProducts ] = useState([
        { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
        { id: 2, nombre: 'Camisa NodeJS', precio: 20 },
        { id: 3, nombre: 'Camisa VueJS', precio: 30 },
        { id: 4, nombre: 'Camisa AngularJS', precio: 10 },
    ]);


    //state cart 
    const [ carrito, setCarrito] = useState([]);

    const fecha = new Date().getFullYear();

    return (
        <>
            <Header 
                title = 'Tienda Virtual' //string
                number = {20} //number
            />

            <h2>Lista de productos</h2>

            {products.map(product => (
                <Products 
                    key         = {product.id}
                    product     = {product}
                    listProduct = {products}
                    carrito     = {carrito}
                    addProduct  = {setCarrito}
                />
            ))}

            <Carrito 
                carrito = {carrito}
                addProduct  = {setCarrito}
            />

            <Footer 
                year = {fecha}
            />
        </>
    );
}

export default App;