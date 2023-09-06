import React from 'react';

function ProductCarrito({ cartItems, removeFromCart }) {
  return (
    <div style={{ padding: '10px', borderRadius: '8px'  }}>
  
      {cartItems.map((item, index) => (
        <div className="product-carrito" key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: 'white'}}>
    
          <img src={item.image} alt={item.name} style={{ width: '100px', height: '100px', marginRight: '10px', borderTopLeftRadius: '8%', borderBottomLeftRadius: '8%' }} />
     
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', flex: 1 }}>
            <p style={{ margin: '0', color: 'black', fontWeight: 'bold' }}>{item.name}</p>
            <p style={{ margin: '0', color: 'black', fontWeight: 'bold' }}>Precio: {item.price} USD</p>
            <p style={{ margin: '0', color: 'black', fontWeight: 'bold' }}>Categoría: {item.category}</p>
          </div>
       
          <button className="btn btn-danger" style={{ marginLeft: '10px' }} onClick={() => removeFromCart(index)}>
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCarrito;
