import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';

const modalStyles = {
  overlay: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  content: {
    position: 'absolute',
    top: 'auto',
    left: 'auto',
    right: 'auto',
    bottom: 'auto',
    padding: '20px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    borderRadius: '8px',
  },
};

function Product({ name, description, price, image, category, addToCart }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const confirmAddToCart = () => {
    addToCart({
      name,
      description,
      price,
      image,
      category,
    });
    closeModal();
  };

  return (
    <div className="card h-100">
      <img
        src={image}
        className="card-img-top"
        alt={name}
        style={{ width: '100%', height: '350px' }}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
        <div>
          <p className="card-text">Precio: {price} USD</p>
          <p className="card-text">Categoría: {category}</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <button className="btn btn-primary" onClick={openModal}>
            Agregar al carrito
          </button>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirmación"
        style={modalStyles}
      >
        <h2>Confirmación</h2>
        <p>¿Desea agregar este producto al carrito?</p>
        <div>
          <img src={image} alt={name} style={{ width: '200px', height: '200px', marginBottom: '10px', borderRadius: '5%'}} />
          <p>Nombre: {name}</p>
          <p>Descripción: {description}</p>
          <p>Precio: {price} USD</p>
          <p>Categoría: {category}</p>
        </div>
        <div className="btn-group" role="group">
          <button className="btn btn-danger" onClick={closeModal}>
            Cancelar
          </button>
          <button className="btn btn-success" onClick={confirmAddToCart}>
            Aceptar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default Product;
