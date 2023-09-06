import React from 'react';
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
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    width: '90%',
    maxHeight: '600px', 
    overflow: 'auto',
    textAlign: 'center',
    borderRadius: '8px',
    border: '2px solid black', 
  },
};

function Navbar({ cartItems, openCartModal }) {
  const [cartModalIsOpen, setCartModalIsOpen] = React.useState(false);

  const closeCartModal = () => {
    setCartModalIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center w-100">
          <a className="navbar-brand" href="#" style={{ color: 'white', fontWeight: 'bold' }}>
            AldMarket
          </a>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: 'white', fontWeight: 'bold' }}>Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#" style={{ color: 'white', fontWeight: 'bold' }}>Categorías</a>
                </li>
                <li className="nav-item">
           
                  <button className="nav-link btn btn-link" onClick={openCartModal} style={{ color: 'white', fontWeight: 'bold', border: 'none', marginRight: '10px' }}>
                    Carrito ({cartItems})
                  </button>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <div className="input-group">
                  <input className="form-control" type="search" placeholder="Buscar" aria-label="Search" />
                  <button className="btn btn-outline-success btn-light" type="submit">Buscar</button>
                </div>
              </form>
            </div>
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
       
        <div className="btn-group" role="group">
          <button className="btn btn-primary" onClick={closeCartModal}>
            Cerrar Carrito
          </button>
        </div>
      </Modal>
    </nav>
  )
}

export default Navbar;
