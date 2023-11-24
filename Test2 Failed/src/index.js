// src/components/App.jsx
import React, { useState, useEffect } from 'react';
import { Card, Button, Pagination, Modal, Form } from 'react-bootstrap';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';
import '../css/App.css';

const App = () => {
  const [firstName, setFirstName] = useState('Rudy');
  const [currentPage, setCurrentPage] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showAddItemModal, setShowAddItemModal] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
  });
  const [products, setProducts] = useState([]);

  // ... (Le reste du code App.jsx)

  const handleAddToCart = () => {
    // Ajoutez ici la logique pour ajouter un article au panier
  };

  const handleShowCart = () => setShowCart(true);

  const handleCloseCart = () => setShowCart(false);

  const handleShowAddItemModal = () => setShowAddItemModal(true);

  const handleCloseAddItemModal = () => setShowAddItemModal(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddNewItem = () => {
    // Ajoutez ici la logique pour ajouter un nouvel article
  };

  const handlePageChange = (page) => setCurrentPage(page);

  useEffect(() => {
    // Chargez les produits depuis la source de données (par exemple, products.js)
    setProducts(getProducts());
  }, []);

  return (
    <div className="app-container">
      <header>
        <h1>Ma Boutique en Ligne</h1>
        <Button variant="primary" onClick={handleShowCart}>
          <FaShoppingCart /> Panier ({cartItems.length})
        </Button>
        <Button variant="success" onClick={handleShowAddItemModal}>
          <FaPlus /> Ajouter un article
        </Button>
      </header>

      <Pagination>
        <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} />
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} />
      </Pagination>

      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Panier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Affichez ici le contenu du panier */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Fermer
          </Button>
          <Button variant="primary">Passer au paiement</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showAddItemModal} onHide={handleCloseAddItemModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter un nouvel article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez le nom du produit"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            {/* Ajoutez d'autres champs ici (prix, description, image) */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddItemModal}>
            Annuler
          </Button>
          <Button variant="primary" onClick={handleAddNewItem}>
            Ajouter l'article
          </Button>
        </Modal.Footer>
      </Modal>

      <section className="product-grid">
        {products
          .slice((currentPage - 1) * 3, currentPage * 3)
          .map((product, index) => (
            <Card key={index}>
              <Card.Body>
                <Image className="product-image" />
                <Name className="product-name" />
                <Price className="product-price" />
                <Description className="product-description" />
                <Button variant="primary" onClick={handleAddToCart}>
                  Ajouter au panier
                </Button>
              </Card.Body>
            </Card>
          ))}
      </section>
    </div>
  );
};

export default Appt;
