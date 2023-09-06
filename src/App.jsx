import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Product from './components/product/product';
import ProductCarrito from './components/productCarrito/producCarrito';
import Modal from 'react-modal';
import axios from 'axios';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartModalIsOpen, setCartModalIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); //Estado de barra de busqueda

  useEffect(() => {
    fetchProducts();
    
    // Cargar productos del carrito desde el localStorage
    const storedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCart(storedCart);
  }, [searchTerm]);
  

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://ecommerce-uwvs.onrender.com/productos');
      //const response = await axios.get('http://localhost:3000/productos');
      const filterProducts = response.data.productos.slice(1, 52);
      //setProducts(response.data.productos);
      setProducts(filterProducts);
      //const allproduct = response.data.productos;
    
    } catch (error) {
      console.error('Error al obtener los productos:', error);
    }
  };

  

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };
  
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };
  

  const openCartModal = () => {
    setCartModalIsOpen(true);
  };

  const closeCartModal = () => {
    setCartModalIsOpen(false);
  };

  // Estilos de modal
  const modalStyles = {
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    content: {
      position: 'absolute',
      top: '50%', 
      left: '50%',
      transform: 'translate(-50%, -50%)', 
      padding: '20px',
      width: '37%', 
      height: '70%',
      maxHeight: '80%',
      overflow: 'auto', 
      textAlign: 'center',
      borderRadius: '8px',
      border: '2px solid black',
    },
  };

  return (
    <>
      <div>
        <Navbar cartItems={cart.length} openCartModal={openCartModal} />
        <div className="container mt-4">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6 mb-4">
                <Product
                  name={product.nombre}
                  description={product.descripcion}
                  price={product.precio}
                  image={product.img}
                  category={product.categoria}
                  addToCart={addToCart}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Modal
        isOpen={cartModalIsOpen}
        onRequestClose={closeCartModal}
        contentLabel="Carrito"
        style={modalStyles}
      >
        <h2>Carrito de Compras</h2>
        <ProductCarrito cartItems={cart} removeFromCart={removeFromCart} />
        <div className="btn-group" role="group">
          <button className="btn btn-primary" onClick={closeCartModal}>
            Cerrar Carrito
          </button>
        </div>
      </Modal>
    </>
  );
}

export default App;
